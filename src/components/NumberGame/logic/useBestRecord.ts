import { useEffect, useState } from 'react';
import useResetSignal from '../../../hooks/useResetSignal';

interface NumberGameRecords {
    [key: string]: number,
}

const STORAGE_KEY = 'numberGameRecord'

/**
 * a custom hook to retrive and save best records in local storage
 * @param boardSize 
 * @returns 
 */
export function useBestRecord(boardSize: number) {

    const ENTRY_KEY=boardSize.toString()
    const [record, setRecord] = useState<undefined | number>()
    const { reset, setReset } = useResetSignal()

    useEffect(() => {
        const rawRecords = localStorage.getItem(STORAGE_KEY)
        if (!rawRecords) return
        const savedRecords: NumberGameRecords = JSON.parse(rawRecords)
        // in case there is no record for this level of boardSize, it will still be undefined
        setRecord(savedRecords[ENTRY_KEY])
        // by using the reset signal, I am able to get the updated record
    }, [boardSize, reset])


    const setBestRecord = (value: number) => {
        const rawRecords = localStorage.getItem(STORAGE_KEY)
        if (!rawRecords) {
            const entry = { [ENTRY_KEY]: value }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(entry))
            return
        }
        const savedRecords: NumberGameRecords = JSON.parse(rawRecords)
        savedRecords[ENTRY_KEY]=value

        localStorage.setItem(STORAGE_KEY,JSON.stringify(savedRecords))
        setReset(true)
    }

    return { record, setBestRecord }
}