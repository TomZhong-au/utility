import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { secondToHour } from '../../util/secondToHour';

interface TimerProps {
    action?: 'start' | 'stop',
    reset?: boolean,
    getTime?: (time: number) => void;
}

const Timer = ({ action = 'start', reset = false, getTime }: TimerProps) => {
    // this unit of time is 1 second
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (reset) setTime(0)
    }, [reset])

    useEffect(() => {
        const handleIncrement = () => {
            if (action === 'stop') return
            setTime(current => {
                if (current > 356400) return current
                return current + 1
            })
        }

        const clock = setInterval(handleIncrement, 1000)

        return () => { clearInterval(clock) }
    }, [action])

    // if need to getTime
    getTime && getTime(time)

    const { minute, second } = secondToHour(time)

    return (<Box bgColor={'gray'}>
        {minute.toString().padStart(2, '0')}:{second.toString().padStart(2, '0')}
    </Box>);
}

export default Timer;