import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

export const Default = (args: AccordionProps) => {
  const text = args.variant || 'Accordion';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Accordion {...args}>{label}</Accordion>;
};
