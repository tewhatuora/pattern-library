declare module '*.svg?component' {
  const content: React.FunctionComponent<React.ReactSVGElement>;
  export default content;
}

declare module 'react-shielded';

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
