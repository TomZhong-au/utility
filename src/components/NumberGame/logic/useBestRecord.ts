import { useEffect, useState } from 'react';

interface NumberGameRecords {
    [key: string]: number,
}

const KEY_NAME = 'numberGameRecord'


export function useGetBestRecord(boardSize: number) {
    const [record, setRecord] = useState(0)
    useEffect(() => {
        const rawRecords = localStorage.getItem(KEY_NAME)
        if (!rawRecords) {
            setRecord(0)
            return
        }
        const savedRecords: NumberGameRecords = JSON.parse(rawRecords)
        setRecord(savedRecords[boardSize.toString()] || 0)
    }, [])
    return { record }
}