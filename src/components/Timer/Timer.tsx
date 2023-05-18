import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { secondToHour } from '../../util/secondToHour';

interface TimerProps {
    action?: 'start' | 'stop' | 'reset',
    unit?: '1s' | '0.01s',
    getTime?: (time: number) => void;
}

/**
 * a timer component
 * @param action 'start'|'stop'|'continue'|'reset'
 * @param unit '1s' | '0.01s'
 * @param getTime a setState function to get time
 * 
 */
const Timer = ({ action='start', unit='1s', getTime }: TimerProps) => {
    const [time, setTime] = useState(0)

    useEffect(()=>{
        const handleIncrement = () => {
            switch (action) {
                case "stop":
                    return
    
                case "reset":
                    return setTime(0)
    
                default:
                    setTime(current=>current+1)
            }
        }
        const frequency=unit==='1s'?1000:10
        const clock=setInterval(handleIncrement, frequency)

        return ()=>{clearInterval(clock)}
    },[action])

    getTime && getTime(time)
const {minute,second}=secondToHour(time)
    return (<Box bgColor={'gray'}>
        {minute.toString().padStart(2,'0')}:{second.toString().padStart(2,'0')}
    </Box>);
}

export default Timer;