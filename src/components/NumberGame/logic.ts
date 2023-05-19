import { secondToHour } from '../../util/secondToHour';
import { NumberGameRecords } from './interface';


const KEY_NAME = 'numberGameRecord'
// the original plan is to save 3 best records
// there is not enough place to display 3 records
export function storeTime(time: number, boardSize: number) {
  const records = localStorage.getItem(KEY_NAME)

  if (!records) {
    const newRecords = [
      {
        boardSize,
        best: [time]
      },
    ]
    localStorage.setItem(KEY_NAME, JSON.stringify(newRecords))
    return
  }

  const gameRecord: NumberGameRecords = JSON.parse(records)

  const updatedRecord = updateRankingArray(gameRecord, { time, boardSize })
  localStorage.setItem(KEY_NAME, JSON.stringify(updatedRecord));
}


export function updateRankingArray(arr: NumberGameRecords, { time, boardSize }: { time: number, boardSize: number }) {
  const entryIndex = arr.findIndex(entry => entry.boardSize === boardSize);

  if (entryIndex !== -1) {
    const entry = arr[entryIndex];
    const recordArr = [...entry.best];
    const index = recordArr.findIndex(item => time < item);
    recordArr.splice(index, 0, time);
    if (recordArr.length > 3) {
      recordArr.pop();
    }
    arr[entryIndex] = { ...entry, best: recordArr };
  } else {
    arr.push({ boardSize, best: [time] });
  }

  return arr;
}

export function getBestRecord(boardSize: number) {
  const rawRecord = localStorage.getItem(KEY_NAME)
  if (!rawRecord) return ""
  const records: NumberGameRecords = JSON.parse(rawRecord)
  const bestRecordForThisBoardSize = records.find(entry => entry.boardSize === boardSize)
  if (!bestRecordForThisBoardSize) return ""
  let output = ""
  bestRecordForThisBoardSize.best.forEach((time, index) => {
    const { minute, second } = secondToHour(time)
    output += `${index + 1}. ${minute}min ${second}sec; `
  })

  return output
}
