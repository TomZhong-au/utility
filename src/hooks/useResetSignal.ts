import { useEffect, useState } from 'react';


/**
 * this hook simulates the reset mechanism in real-life. The reset value will be false by default. After calling the setReset(true) function, it will be set to true for a short time.Then it will auto change back to false.
 */
export default function useResetSignal() {
    const [reset, setReset] = useState(false)

    useEffect(() => {
        if (reset === true) {
            setReset(false)
        }
    }, [reset])

    return { reset, setReset }
}