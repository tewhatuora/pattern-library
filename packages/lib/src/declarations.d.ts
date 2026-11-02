declare module '*.svg?component' {
  const content: React.FunctionComponent<React.ReactSVGElement>;
  export default content;
}

declare module 'react-shielded';

// SVG markup for one flag; the package doesn't ship types for these
declare module 'country-flag-icons/string/3x2/*' {
  const svg: string;
  export default svg;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => React.JSX.Element;
  export default MDXComponent;
}
