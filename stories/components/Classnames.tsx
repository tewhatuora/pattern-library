import { DocsContext, DocsContextProps, Source, Subheading } from '@storybook/addon-docs';

import { Renderer } from '@storybook/csf';

import { ReactNode } from 'react';

import * as Components from '../../packages/lib/src/components';
import { code } from '../theme/ThemeItems.css';

type Variants = Record<string, string>;
type FunctionClassname = (variants: Variants) => string;
type Styles = Record<string, string | FunctionClassname | Variants>;

const renderType = (args: Styles, className: string, variants?: Variants) => {
  switch (typeof args[className]) {
    case 'string':
      return 'string';
    case 'object':
      return `{ ${Object.keys(args[className]).map((className) => `"${className}": string`)} }`;
    case 'function':
      return (
        !!variants &&
        `({ ${Object.keys(variants)
          .map(
            (variant) =>
              `"${variant}": ${Object.keys(variants[variant])
                .map((key) => `"${key}"`)
                .join(' | ')} `,
          )
          .join(', ')} }) => string`
      );
    default:
      return null;
  }
};
export const Classnames = () => {
  return (
    <DocsContext.Consumer>
      {(context) => {
        /* @ts-ignore: primaryStory does exist on context, just not typed */
        const componentParts = context.primaryStory?.title.split('/');
        const name = componentParts[componentParts.length - 1];
        const stylesObj = `${name}Styles`;

        if (stylesObj in Components) {
          const styles = (Components as Record<string, string | ReactNode>)[stylesObj] as Record<string, string>;
          const variants: Variants = {};
          const classNames = Object.keys(styles).reduce((all, key: string) => {
            // Don't include upper snake case constants
            if (!key.match(/[A-Z]+(_[A-Z]+)+/) && !key.toLowerCase().includes('variants')) {
              all.push(key);
            }
            if (key.toLowerCase().includes('variants')) {
              variants[key] = styles[key];
            }
            return all;
          }, [] as string[]);

          return (
            <div>
              <Subheading>Classnames</Subheading>
              <Source
                code={`import { ${name}Styles } from '@healthnz/pattern-library';
const { ${classNames.join(', ')} } = ${name}Styles;`}
                dark
                language="typescript"
              />
              <table className="docblock-argstable">
                <thead className="docblock-argstable-head">
                  <tr>
                    <th align="left">Classname</th>
                    <th align="left">Type</th>
                  </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                  {classNames.map((className: string) => (
                    <tr key={className}>
                      <td>
                        <strong>{className}</strong>
                      </td>
                      <td>
                        <code className={code}>{renderType(styles, className, variants)}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return null;
      }}
    </DocsContext.Consumer>
  );
};
