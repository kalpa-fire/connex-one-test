import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Box, Heading } from '@chakra-ui/react';
import { Metrics } from './views/metrics';
import { Time } from './views/time';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Heading textAlign="center">
        Connex One Test
      </Heading>
      <Box display="flex" justifyContent="space-between" >
      <Time width="30vw"/>
      <Metrics width="70vw"/>
     </Box>
    </QueryClientProvider>
  );
}

export default App;
