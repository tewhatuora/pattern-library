import { Accordion, AccordionProps } from './Accordion';
import { Text } from '../Text/Text';

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
  children: (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus gravida neque, id luctus augue aliquam a.
        Aliquam libero massa, laoreet quis magna nec, vulputate fermentum nibh. Maecenas sit amet lobortis ipsum. Ut in
        lacus metus. Donec id finibus mi.
      </Text>
      <Text>
        Ut eget elementum eros, ut auctor lacus. Ut non congue felis. Proin iaculis accumsan diam nec hendrerit.
        Phasellus ultricies lectus nibh, sed luctus urna ultricies sed.
      </Text>
    </>
  ),
};
