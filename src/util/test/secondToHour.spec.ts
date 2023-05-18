import { describe, it, expect } from 'vitest';
import { secondToHour } from '../secondToHour';

describe('secondToMin', () => {
    it('should convert seconds to minutes and seconds', () => {
        expect(secondToHour(50)).toEqual({ hour: 0, minute: 0, second: 50 })

        // Test case 1: 120 seconds (2 minutes)
        expect(secondToHour(125)).toEqual({ hour: 0, minute: 2, second: 5 });

        // Test case 2: 3670 seconds (1 hour, 1 minute, and 10 seconds)
        expect(secondToHour(3670)).toEqual({ hour: 1, minute: 1, second: 10 });

        // Test case 3: 5000 seconds (1 hour, 23 minutes, and 20 seconds)
        expect(secondToHour(5000)).toEqual({ hour: 1, minute: 23, second: 20 });
    });
});