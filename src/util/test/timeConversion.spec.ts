import { describe,it,expect } from 'vitest';
import { millisecToString, millisecondsToHour } from '../timeConversion';


describe('millisecondsToHour', () => {
  it('should convert milliseconds to hours, minutes, seconds, and milliseconds', () => {
    // Test case 1: 10,000 milliseconds
    expect(millisecondsToHour(10000)).toEqual({
      hour: 0,
      minute: 0,
      second: 10,
      millisecond: 0,
    });

    // Test case 2: 3,600,000 milliseconds
    expect(millisecondsToHour(3600000)).toEqual({
      hour: 1,
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    // Test case 3: 3,661,234 milliseconds
    expect(millisecondsToHour(3661234)).toEqual({
      hour: 1,
      minute: 1,
      second: 1,
      millisecond: 234,
    });

    // Test case 4: 123,456,789 milliseconds
    expect(millisecondsToHour(123456789)).toEqual({
      hour: 34,
      minute: 17,
      second: 36,
      millisecond: 789,
    });
  });

  it('should ignore the numbers after decimal',()=>{
    expect(millisecondsToHour(3661238.122355608)).toEqual({
        hour: 1,
        minute: 1,
        second: 1,
        millisecond: 238,
      });
  })
});


describe('millisecToString', () => {
  it('should convert milliseconds to a formatted string', () => {
    // Test case 1: 10,000 milliseconds
    expect(millisecToString(10000)).toEqual('00 min 10 sec 000');

    // Test case 2: 3,600,000 milliseconds
    expect(millisecToString(3600000)).toEqual('1 h 00 min 00 sec 000');

    // Test case 3: 3,661,234 milliseconds
    expect(millisecToString(3661234)).toEqual('1 h 01 min 01 sec 234');

    // Test case 4: 123,456,789 milliseconds
    expect(millisecToString(123456789)).toEqual('34 h 17 min 36 sec 789');

    // Test case 5: 59,999 milliseconds
    expect(millisecToString(59999)).toEqual('00 min 59 sec 999');
  });
});
