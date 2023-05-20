import { Box, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
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
 * 
 * @param props.action accepts 'start' | 'stop' to control the timer's running
 * @param props.reset accepts a boolean to instruct the timer to reset. Should use with the useResetSignal custom hook.
 * @param props.getTime a setState function to pass the time to parent component.
 * @returns 
 */
const Timer = ({ action = 'start', reset = false, getTime }: TimerProps) => {
    // this unit of time is 1 ms
    const [time, setTime] = useState(0)
    const startTime=useRef(performance.now())

    useEffect(() => {
        if (reset) startTime.current=performance.now()
    }, [reset])

    useEffect(() => {
        const handleIncrement = () => {
            if (action === 'stop') return
            setTime(performance.now()-startTime.current)
        }
        const clock = setInterval(handleIncrement, 100)
        return () => { clearInterval(clock) }
    }, [action])

    // if getTime function is passed in
    useEffect(() => {
        if (getTime && action === 'stop') {
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