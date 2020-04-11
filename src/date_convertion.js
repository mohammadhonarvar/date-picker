const toFloor = (number) => Math.floor(number);

const jalaliToGregorian = (year, month, day, separator) => {
  console.log('Shamsi: ', [year, month, day]);
  let gregorianYear;
  if (year > 979) {
    gregorianYear = 1600;
    year -= 979;
  } else {
    gregorianYear = 621;
  }

  let days = (365 * year) +
    (toFloor(year / 33) * 8) +
    (((year % 33) + 3) / 4) +
    78 +
    day +
    (((month < 7) ? (month - 1) * 31 : (((month - 7) * 30) + 186)));

  gregorianYear += 400 * (toFloor(days / 146097));

  days %= 146097;
  if (toFloor(days) > 36524) {
    gregorianYear += 100 * (toFloor(--days / 36524));
    days %= 36524;
    if (days >= 365) days++;
  }
  gregorianYear += 4 * (toFloor(days / 1461));
  days %= 1461;
  gregorianYear += toFloor((days - 1) / 365);

  if (days > 365) days = (days - 1) % 365;
  let gregorianDay = toFloor(days + 1);
  let montDays = [
    0,
    31,
    (((gregorianYear % 4 == 0) && (gregorianYear % 100 != 0)) || (gregorianYear % 400 == 0)) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  let index = 0;
  for (; index <= 12; index++) {
    if (gregorianDay <= montDays[index]) break;
    gregorianDay -= montDays[index];
  }

  let gregorianDate;
  if (separator == null)
    gregorianDate = [gregorianYear, index, gregorianDay];
  else
    gregorianDate = `${gregorianYear}${separator}${index}${separator}${gregorianDay}`;
  return gregorianDate;

};


console.log('miladi: ', jalaliToGregorian(1398, 12, 1));
