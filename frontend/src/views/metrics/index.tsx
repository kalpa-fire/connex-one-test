import { useQuery } from 'react-query';
import { Text, Box, BoxProps } from '@chakra-ui/react';

export function Metrics(props: BoxProps){
    const { data, isFetching } = useQuery('metrics', async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/metrics`, { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`}})
        return response.text();
    }, { refetchInterval: 30000 })

    return <Box {...props}>
    { isFetching ? <Text> Loading... </Text> : 
    <pre>
        {data}
    </pre>
    }
</Box> 
}