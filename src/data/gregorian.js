const data = {

  isLeapYear: (year) => {
    let isLeap = 0;
    if (year % 4 === 0) isLeap = 1;
    if (year % 100 === 0) {
      isLeap = 0;
      if (year % 400 === 0) isLeap = 1;
    }
    return isLeap;
  },

  leapIndex: 1,
  isSolar: 0,

  monthsDaysCount: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  weekDays: [
    { name: 'Sun', shortName: 'S' },
    { name: 'Mon', shortName: 'M' },
    { name: 'Tue', shortName: 'T' },
    { name: 'Wed', shortName: 'W' },
    { name: 'Thu', shortName: 'T' },
    { name: 'Fri', shortName: 'F' },
    { name: 'Sat', shortName: 'S' }
  ],
  months: [
    { name: 'January', shortName: 'Jan', code: 0 },
    { name: 'February', shortName: 'Feb', code: 3 },
    { name: 'March', shortName: 'Mar', code: 3 },
    { name: 'April', shortName: 'Apr', code: 6 },
    { name: 'May', shortName: 'May', code: 1 },
    { name: 'Jun', shortName: 'Jun', code: 4 },
    { name: 'July', shortName: 'Jul', code: 6 },
    { name: 'August', shortName: 'Aug', code: 2 },
    { name: 'September', shortName: 'Sep', code: 5 },
    { name: 'October', shortName: 'Oct', code: 0 },
    { name: 'November', shortName: 'Nov', code: 3 },
    { name: 'December', shortName: 'Dec', code: 5 }
  ],

}

export default data;