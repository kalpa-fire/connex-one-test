import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Box } from '@chakra-ui/react';
import { Metrics } from './views/metrics';
import { Time } from './views/time';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box display="flex" justifyContent="space-between" >
      <Time width="30vw"/>
      <Metrics width="70vw"/>
     </Box>
    </QueryClientProvider>
  );
}

export default App;
