export const convertToGregorian = (year: number, month: number, day: number): number[] => {
  let gregorianYear;

  if (year > 979) {
    gregorianYear = 1600;
    year -= 979;
  } else {
    gregorianYear = 621;
  }

  let days =
    365 * year +
    Math.floor(year / 33) * 8 +
    ((year % 33) + 3) / 4 +
    78 +
    day +
    (month < 7 ? (month - 1) * 31 : (month - 7) * 30 + 186);

  gregorianYear += 400 * Math.floor(days / 146097);

  days %= 146097;
  if (Math.floor(days) > 36524) {
    gregorianYear += 100 * Math.floor(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gregorianYear += 4 * Math.floor(days / 1461);
  days %= 1461;
  gregorianYear += Math.floor((days - 1) / 365);

  if (days > 365) days = (days - 1) % 365;
  let gregorianDay = Math.floor(days + 1);
  const montDays = [
    0,
    31,
    (gregorianYear % 4 === 0 && gregorianYear % 100 !== 0) || gregorianYear % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let index = 0;
  for (; index <= 12; index++) {
    if (gregorianDay <= montDays[index]) break;
    gregorianDay -= montDays[index];
  }

  return [gregorianYear, index, gregorianDay];
};
