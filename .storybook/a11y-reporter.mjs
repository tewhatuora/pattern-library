// Vitest reporter that summarises the axe violations found in story tests.
// Gives one summary per rule across all stories in CI logs, alongside the individual failing tests.
import { stripVTControlCharacters } from 'node:util';

export default class A11yReporter {
  violations = new Map();

  onInit(vitest) {
    this.logger = vitest.logger;
  }

  add(storyId, { id, impact, help, helpUrl, nodes }) {
    const rule = this.violations.get(id) ?? { impact, help, helpUrl, stories: new Set(), nodes: 0 };
    rule.stories.add(storyId);
    rule.nodes += nodes;
    this.violations.set(id, rule);
  }

  onTestCaseResult(testCase) {
    const { storyId, reports = [] } = testCase.meta();
    for (const report of reports) {
      if (report.type !== 'a11y') continue;
      for (const violation of report.result?.violations ?? []) {
        this.add(storyId, { ...violation, nodes: violation.nodes.length });
      }
    }

    // When axe fails a test, the addon's report doesn't reach the test's meta, so read the rules from the
    // matcher's message instead: one `"<help> (<rule id>)"` line per failing element.
    if (!storyId || reports.length) return;
    const counts = new Map();
    for (const error of testCase.result().errors ?? []) {
      const message = stripVTControlCharacters(error.message ?? '');
      if (!message.includes('toHaveNoViolations')) continue;
      for (const [, help, id] of message.matchAll(/^"(.+) \(([a-z0-9-]+)\)"$/gm)) {
        counts.set(id, { help, nodes: (counts.get(id)?.nodes ?? 0) + 1 });
      }
    }
    for (const [id, { help, nodes }] of counts) {
      this.add(storyId, { id, help, helpUrl: `https://dequeuniversity.com/rules/axe/latest/${id}`, nodes });
    }
  }

  onTestRunEnd() {
    if (this.violations.size === 0) return;

    const order = ['critical', 'serious', 'moderate', 'minor'];
    const rules = [...this.violations].sort(([, a], [, b]) => order.indexOf(a.impact) - order.indexOf(b.impact));
    const stories = new Set(rules.flatMap(([, rule]) => [...rule.stories]));

    this.logger.log(`\nAccessibility: ${rules.length} axe rules violated across ${stories.size} stories\n`);
    for (const [id, rule] of rules) {
      const examples = [...rule.stories].slice(0, 3).join(', ');
      const more = rule.stories.size > 3 ? `, +${rule.stories.size - 3} more` : '';
      this.logger.log(
        `  [${rule.impact ?? 'see test'}] ${id}: ${rule.help} (${rule.nodes} elements in ${rule.stories.size} stories)`,
      );
      this.logger.log(`    ${examples}${more}`);
      this.logger.log(`    ${rule.helpUrl}`);
    }
    this.logger.log('');
  }
}
