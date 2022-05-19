import '@mohnz/design-system/styles';
import { ThemeProvider, neutral, Heading, Text, Button, Badge } from '@mohnz/design-system';

function App() {
  return (
    <ThemeProvider theme={neutral}>
      <Heading level="1">Heading one</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat repudiandae rerum.
      </Text>
      <Heading level="2">Heading two</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat repudiandae rerum.
      </Text>
      <Heading level="3">Heading three</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat repudiandae rerum.
      </Text>
      <Heading level="4">Heading four</Heading>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut ex exercitationem magni. Aliquam assumenda, commodi consequatur corporis cumque delectus, eaque est libero natus, non numquam officia quaerat repudiandae rerum.
      </Text>
      <Button variant="primary">Click here</Button>
      <Badge variant="positive">Positive</Badge>
    </ThemeProvider>
  );
}

export default App;
