// Vitest reporter that summarises the axe results the a11y addon attaches to each story test.
// Gives one summary per rule across all stories in CI logs, alongside the individual failing tests.
export default class A11yReporter {
  violations = new Map();

  onInit(vitest) {
    this.logger = vitest.logger;
  }

  onTestCaseResult(testCase) {
    const { storyId, reports = [] } = testCase.meta();
    for (const report of reports) {
      if (report.type !== 'a11y') continue;
      for (const { id, impact, help, helpUrl, nodes } of report.result?.violations ?? []) {
        const rule = this.violations.get(id) ?? { impact, help, helpUrl, stories: new Set(), nodes: 0 };
        rule.stories.add(storyId);
        rule.nodes += nodes.length;
        this.violations.set(id, rule);
      }
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
        `  [${rule.impact}] ${id}: ${rule.help} (${rule.nodes} elements in ${rule.stories.size} stories)`,
      );
      this.logger.log(`    ${examples}${more}`);
      this.logger.log(`    ${rule.helpUrl}`);
    }
    this.logger.log('');
  }
}
