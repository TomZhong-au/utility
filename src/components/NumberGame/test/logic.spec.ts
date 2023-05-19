import { describe, it, expect, MockedClass, beforeEach } from 'vitest'

import { generateRandomArray, storeTime, updateRankingArray } from '../logic'



describe('updateRankingArray', () => {
  it('should update ranking array correctly', () => {
    const arr = [
      {
        boardSize: 4,
        best: [10, 20, 30],
      },
      {
        boardSize: 6,
        best: [15, 25, 35],
      },
    ];

    const time = 12;
    const boardSize = 4;

    const updatedArr = updateRankingArray(arr, { time, boardSize });

    expect(updatedArr).toEqual([
      {
        boardSize: 4,
        best: [10, 12, 20],
      },
      {
        boardSize: 6,
        best: [15, 25, 35],
      },
    ]);
  });

  it('should limit the number of records to 3', () => {
    const arr = [
      {
        boardSize: 4,
        best: [10, 20, 30],
      },
    ];

    const time = 25;
    const boardSize = 4;

    const updatedArr = updateRankingArray(arr, { time, boardSize });

    expect(updatedArr).toEqual([
      {
        boardSize: 4,
        best: [10, 20, 25],
      },
    ]);
  });


  it('should add record to the corresponding array', () => {
    const arr = [
      {
        boardSize: 4,
        best: [10],
      },
    ];
    const time = 5;
    const boardSize = 4;
    const updatedArr = updateRankingArray(arr, { time, boardSize });

    expect(updatedArr).toEqual([{ boardSize: 4, best: [5, 10] }])
  })


  it('should create a new entry in the array when new boardSize exist', () => {
    const arr = [
      {
        boardSize: 4,
        best: [10, 15],
      },
    ];
    const time = 25;
    const boardSize = 6;
    const updatedArr = updateRankingArray(arr, { time, boardSize });

    expect(updatedArr).toEqual([{ boardSize: 4, best: [10, 15] }, { boardSize: 6, best: [25] }])

  })

});

