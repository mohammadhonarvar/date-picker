const toFloor = (number) => Math.floor(number);
const data = {

  isLeapYear: (year) => {
    let leapResult = [1, 5, 9, 13, 17, 22, 26, 30];
    return leapResult.indexOf(year % 33) > -1 ? 1 : 0;
  },

  leapIndex: 11,
  isSolar: 1,

  monthsDaysCount: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],

  weekDays: [
    { name: 'یک شنبه', shortName: 'ی' },
    { name: 'دوشنبه', shortName: 'د' },
    { name: 'سه شنبه', shortName: 'س' },
    { name: 'چهارشنبه', shortName: 'چ' },
    { name: 'پنجشنبه', shortName: 'پ' },
    { name: 'جمعه', shortName: 'ج' },
    { name: 'شنبه', shortName: 'ش' }
  ],
  months: [
    { name: 'فروردین', shortName: '', code: 0 },
    { name: 'اردیبهشت', shortName: '', code: 3 },
    { name: 'خرداد', shortName: '', code: 3 },
    { name: 'تیر', shortName: '', code: 6 },
    { name: 'مرداد', shortName: '', code: 1 },
    { name: 'شهریور', shortName: '', code: 4 },
    { name: 'مهر', shortName: '', code: 6 },
    { name: 'آبان', shortName: '', code: 2 },
    { name: 'آذر', shortName: '', code: 5 },
    { name: 'دی', shortName: '', code: 0 },
    { name: 'بهمن', shortName: '', code: 3 },
    { name: 'اسفند', shortName: '', code: 5 }
  ],

  toGregorian: (year, month, day) => {
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
      (((gregorianYear % 4 === 0) && (gregorianYear % 100 !== 0)) || (gregorianYear % 400 === 0)) ? 29 : 28,
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

    const gregorianDate = [gregorianYear, index, gregorianDay];
    return gregorianDate;

  }
}

export default data;