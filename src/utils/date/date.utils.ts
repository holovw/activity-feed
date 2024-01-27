import {
  second,
  minute,
  hour,
  day,
  week,
} from '../../constants/date.constants.ts';

interface DateDiff {
  [key: string]: number,
}

export const getDateDiff = (firstDate: string, secondDate: string): DateDiff | null => {
  const diff = Date.parse(secondDate) - Date.parse(firstDate);
  if (isNaN(diff)) {
    return null;
  }

  return {
    w: Math.floor(diff / week),
    d: Math.floor(diff / day),
    h: Math.floor(diff / hour),
    m: Math.floor(diff / minute),
    s: Math.floor(diff / second),
    ms: diff,
  };
}
