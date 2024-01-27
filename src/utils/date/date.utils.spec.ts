import { getDateDiff } from './date.utils.ts';

describe('Date Utils', () => {
  describe('getDateDiff', () => {
    it('should return null for non-date string', () => {
      const invalidDateString = 'Not a date string';
      expect(getDateDiff(invalidDateString, invalidDateString)).toBeNull();
    });

    it('should return time difference by each metric', () => {
      const firstDateString = '2024-01-25T14:28:43.860Z';
      const secondDateString = '2024-02-01T15:29:44.860Z';
      const result = getDateDiff(firstDateString, secondDateString);

      expect(result?.w).toBe(1);
      expect(result?.d).toBe(7);
      expect(result?.h).toBe(169);
      expect(result?.m).toBe(10141);
      expect(result?.s).toBe(608461);
      expect(result?.ms).toBe(608461000);
    });
  });
});
