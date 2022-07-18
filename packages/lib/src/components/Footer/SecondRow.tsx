import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';

export const SecondRow = () => {
  return (
    <Box>
      <AllowedChildren
        errorMessage="Only `Navigation` components are allowed as children of `Footer`."
        types={[Navigation]}
      />
    </Box>
  );
};

const Navigation = () => null; // TODO: Placeholder, remove when actual Navigation is implemented
