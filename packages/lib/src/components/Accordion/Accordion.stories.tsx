import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

export const Default = (args: AccordionProps) => {
  return <Accordion {...args} />;
};
Default.args = {
  icon: 'tick',
  header: 'Header',
  label: 'Label',
};
