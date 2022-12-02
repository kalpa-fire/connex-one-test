import React from 'react';
import { useQuery } from 'react-query';
import { Text, Box, BoxProps } from '@chakra-ui/react';

function formatTimeInChronometerStyle(secondsSinceEpoch: number): string {
    const hours = Math.floor(secondsSinceEpoch / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((secondsSinceEpoch % 3600) / 60).toString().padStart(2, '0');
    const seconds = (secondsSinceEpoch % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export function Time(props: BoxProps){
    const { data, isFetching, } = useQuery<{epoch: number}>('time', async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/time`, { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`}})
        return response.json();
    }, { refetchInterval: 30000 })

    const [ timeDifference, setTimeDifference ] = React.useState('');
    React.useEffect(() => {
        const timeoutId = setTimeout(()=>{
            setTimeDifference(data ? formatTimeInChronometerStyle(Math.round(Date.now() / 1000 ) - data.epoch) : '');
        }, 1000)
        return () => clearTimeout(timeoutId);
    }, [ data, timeDifference ])


    return <Box {...props}>
        { isFetching ? <Text> Loading... </Text> : 
        <Box>
            <Text>Time from server: { data && data.epoch }</Text>
            <Text>Difference between server and client: { timeDifference }</Text>
        </Box>
        }
    </Box> 
}