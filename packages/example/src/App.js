import '@te-whatu-ora/anatomic/styles';
import { ThemeProvider, Heading, Text, Button, Badge } from '@te-whatu-ora/anatomic';
import { neutral } from '@te-whatu-ora/anatomic-themes';

function App() {
  return (
    <ThemeProvider theme={neutral.className}>
      <Heading level="1">Heading one</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam
        assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat
        repudiandae rerum.
      </Text>
      <Heading level="2">Heading two</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam
        assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat
        repudiandae rerum.
      </Text>
      <Heading level="3">Heading three</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam
        assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat
        repudiandae rerum.
      </Text>
      <Heading level="4">Heading four</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam
        assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat
        repudiandae rerum.
      </Text>
      <Button variant="primary">Click here</Button>
      <Button variant="secondary" icon="chevron_left" iconPosition="left">
        Prev
      </Button>
      <Button variant="secondary" icon="chevron_right">
        Next
      </Button>
      <Badge variant="positive">Positive</Badge>
    </ThemeProvider>
  );
}

export default App;
