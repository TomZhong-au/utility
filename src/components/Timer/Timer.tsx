import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { millisecondsToHour } from '../../util/timeConversion';
import React from 'react';

interface TimerProps {
    action?: 'start' | 'stop',
    reset?: boolean,
    /**
     * export time (in ms) to other components
     */
    getTime?: (time: number) => void;
}

/**
 * the unit of the time is 1 ms
 */
const Timer = ({ action = 'start', reset = false, getTime }: TimerProps) => {
    // this unit of time is 1 ms
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (reset) setTime(0)
    }, [reset])

    useEffect(() => {
        const handleIncrement = () => {
            if (action === 'stop') return
            setTime(current => current + 1)
        }

        const clock = setInterval(handleIncrement, 10)

        return () => { clearInterval(clock) }
    }, [action])

    // if need to getTime
    useEffect(() => {
        if (getTime && action === 'stop') {
            // Delay the time update using setTimeout to avoid updating state while rendering another component
            getTime(time);

        }
    }, [getTime, time, action]);

    const { minute, second, millisecond } = millisecondsToHour(time)

    return (<Box>
        <Text as='span' fontSize={'lg'}>{minute.toString().padStart(2, '0')}:{second.toString().padStart(2, '0')}.</Text>
        <Text as='span' fontSize={'sm'}>{millisecond.toString().padStart(3, '0')}</Text>
    </Box>);
}

export default React.memo(Timer);