import { getDateDiff } from '../../../../utils/date.utils';

export const getPassedTimeFormatted = (actionDate: string): string | null => {
  const diff = getDateDiff(actionDate, new Date().toISOString());

  if (diff) {
    const rangeKey = Object.keys(diff).find(range => diff[range]);
    if (rangeKey) {
      return `${diff[rangeKey]}${rangeKey}`;
    }
  }

  return null;
};
