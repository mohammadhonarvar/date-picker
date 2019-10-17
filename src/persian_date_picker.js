import React, { Component } from 'react';
// import 'persian-date';
import './style.css';

class PersianDatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // week days to show for current state
      weeksDays: [[], [], [], [], [], []],

      // picking years array
      yearsToShow: [],

      // user selected date
      selectedDate: [0, 0, 0],

      // views:
      // 0: days,
      // 1: months,
      // 2: years,
      // 3: year ranges,
      view: 0,
    };

    // list of month names with short name and codes*
    // *codes: used for f:_calculateWeekDay
    this.monthDaysName = [
      { name: 'فروردین', code: 0, },
      { name: 'اردیبهشت', code: 3, },
      { name: 'خرداد', code: 3, },
      { name: 'تیر', code: 6, },
      { name: 'مرداد', code: 1, },
      { name: 'شهریور', code: 4, },
      { name: 'مهر', code: 6, },
      { name: 'آبان', code: 2, },
      { name: 'آذر', code: 5, },
      { name: 'دی', code: 0, },
      { name: 'بهمن', code: 3, },
      { name: 'اسفند', code: 5, }
    ];

    // this.minYear = 1920;
    // this.maxYear = 2020;

    // current showing month
    this.currentMonth = 6;

    // current showing year
    this.currentYear = 1398;

    // is this.currentYear is leap
    this.isLeapYear = 0;

    this.minShowYear = 0;
    this.maxShowYear = 0;

    this.isJalali = 1;


    this.date = this._jalaliToGregorian(1398, 7, 1);
    this.currentYear = this.date[0];
    this.currentMonth = this.date[1] - 1;

    const weekDayIndex = this._calculateWeekDay(this.currentYear, this.currentMonth, this.date[2]);
    console.log(weekDayIndex);

    // set weeksDays to show calculated days
    this.state.weeksDays = this._calculateMonthDays(this.currentYear, this.currentMonth, this.date[2]);
    console.log(this.state.weeksDays);
  }

  // sunday: 0
  // eg: 2019.1.1 was Tuesday so since sunday is 0:
  // _calculateWeekDay(2019, 1, 1) -> 2 (sun:0, mon: 1, Tue: 2)
  _calculateWeekDay(year, month, day) {

    // Calculate Century, Year, Month and Day Code
    const yearDate = year % 100;
    const yearCentury = Math.floor(year / 100);
    const centuryCodes = [4, 2, 0, 6];
    const calcCenturyCode = yearCentury % 4;
    const centuryCode = centuryCodes[calcCenturyCode === 0 ? 3 : calcCenturyCode - 1];
    const yearCode = (yearDate + (yearDate / 4)) % 7;
    const monthCode = this.monthDaysName[month].code;

    // Calculate if this year is a leap year
    let isLeap = 0;
    if (year % 4 === 0) isLeap = 1;
    if (year % 100 === 0) {
      isLeap = 0;
      if (year % 400 === 0) isLeap = 1;
    }
    this.isLeapYear = isLeap;

    // Calculate and return the week day Index :
    // 0: Sunday, 1: Monday, ....
    return (Math.floor(yearCode + monthCode + centuryCode + day + isLeap) % 7) + this.isJalali;
  }


  _toFloor = (number) => Math.floor(number);

  _jalaliToGregorian = (year, month, day) => {
    console.log('Shamsi: ', [year, month, day]);
    let gregorianYear;
    if (year > 979) {
      gregorianYear = 1600;
      year -= 979;
    } else {
      gregorianYear = 621;
    }

    let days = (365 * year) +
      (this._toFloor(year / 33) * 8) +
      (((year % 33) + 3) / 4) +
      78 +
      day +
      (((month < 7) ? (month - 1) * 31 : (((month - 7) * 30) + 186)));

    gregorianYear += 400 * (this._toFloor(days / 146097));

    days %= 146097;
    if (this._toFloor(days) > 36524) {
      gregorianYear += 100 * (this._toFloor(--days / 36524));
      days %= 36524;
      if (days >= 365) days++;
    }
    gregorianYear += 4 * (this._toFloor(days / 1461));
    days %= 1461;
    gregorianYear += this._toFloor((days - 1) / 365);

    if (days > 365) days = (days - 1) % 365;
    let gregorianDay = this._toFloor(days + 1);
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

    console.log('miladi: ', [gregorianYear, index, gregorianDay]);

    return [gregorianYear, index, gregorianDay];

  };


  _calculateMonthDays = (year, monthIndex, day) => {
    let tempWeeksDays = [[], [], [], [], [], []];
    const weekDayIndex = this._calculateWeekDay(year, this.currentMonth, day);
    let monthsDaysCount = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29 + this.isLeapYear];


    // let lastDayPrinted = this.state.weeksDays[4][6] === undefined ? 1 : this.state.weeksDays[4][6] + 1;
    let lastDayPrinted = monthsDaysCount[monthIndex] - weekDayIndex + 1;

    for (let weekCounter = 0; weekCounter < 6; weekCounter++) {
      const firstDay = lastDayPrinted;
      const lastDay = firstDay + 7;

      for (let day = firstDay; day < lastDay; day++) {
        let pushItem = day;
        if (weekCounter === 0) {
          if (day > monthsDaysCount[monthIndex])
            pushItem = day - monthsDaysCount[monthIndex];
        } else
          if (day > monthsDaysCount[this.currentMonth])
            pushItem = day - monthsDaysCount[this.currentMonth];

        tempWeeksDays[weekCounter].push(pushItem);
        lastDayPrinted = pushItem;
      }
      lastDayPrinted++;
    }
    return tempWeeksDays;
  }

  arrowCall(next) {
    // if (next) this.currentMonth = Math.abs(this.currentMonth + 1) % 12;
    // else this.currentMonth = Math.abs(this.currentMonth - 1) % 12;

    if (this.state.view === 1) {
      if (next) this.currentYear++;
      else this.currentYear--;
      this.forceUpdate();
      return;
    } else if (this.state.view === 2) {
      this._calculateYears(next);
      return;
    }
    else if (this.state.view === 3) {
      console.log(3);
      return;
    }

    if (next)
      this.currentMonth++;
    else
      this.currentMonth--;

    if (this.currentMonth === 12) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    else if (this.currentMonth === -1) {
      this.currentMonth = 11;
      this.currentYear--;
    };

    let monthIndex = this.currentMonth - 1;
    if (monthIndex === 12) monthIndex = 0;
    else if (monthIndex === -1) monthIndex = 11;

    let tempWeekDays = this._calculateMonthDays(this.currentYear, monthIndex, 1);
    this.setState({
      weeksDays: tempWeekDays,
    });
  }

  _calculateYears = (nextYearList) => {

    let tempYears = [];
    let startYear, endYear;
    if (nextYearList === undefined) {
      startYear = this.currentYear - this.currentYear % 10;
      endYear = startYear + 10;
    } else if (nextYearList) {
      startYear = this.state.yearsToShow[9] + 1;
      endYear = startYear + 10;
    } else {
      startYear = this.state.yearsToShow[0] - 10;
      endYear = this.state.yearsToShow[0];
    }
    this.minShowYear = startYear;
    this.maxShowYear = endYear - 1;
    for (let index = startYear; index < endYear; index++) {
      tempYears.push(index);
    }
    this.setState({ yearsToShow: tempYears });
  }

  _changeView = (nextView = false) => {
    if (this.state.view === 3) return;
    this.setState({
      view: nextView ? this.state.view + 1 : this.state.view - 1,
    })
    if (this.state.view + 1 === 2) {
      this._calculateYears();
    }
  }

  pickYear = (year) => {
    this.currentYear = year;
    this._changeView();
  }

  pickMonth = (monthIndex) => {
    this.currentMonth = monthIndex;
    let tempWeekDays = this._calculateMonthDays(monthIndex);
    this._changeView();
    this.setState({
      weeksDays: tempWeekDays,
    });
  }

  pickDay = (weekDay) => {
    this.setState({
      selectedDate: [this.currentYear, this.currentMonth, weekDay]
    });
    console.log([this.currentYear, this.monthDaysName[this.currentMonth].name, weekDay]);
  }

  render() {
    return (
      <div className="date-picker" dir="rtl" >
        <div className="header">
          <div onClick={() => this.arrowCall(false)} className="arrow-prev"></div>
          <h4 className="header-text" onClick={() => this._changeView(true)}>
            {
              this.state.view === 0 ?
                `${this.monthDaysName[this.currentMonth].name} ${this.currentYear}` :
                this.state.view === 1 ?
                  this.currentYear : this.state.view === 2 ? `${this.minShowYear} - ${this.maxShowYear}` : ''
            }
          </h4>
          <div onClick={() => this.arrowCall(true)} className="arrow-next"></div>
        </div>
        {
          this.state.view === 0 ? <div>
            <div className="week-days">
              <span>ش</span>
              <span>ی</span>
              <span>د</span>
              <span>س</span>
              <span>چ</span>
              <span>پ</span>
              <span>ج</span>
            </div>
            <div className="month-days">
              {
                this.state.weeksDays.map((week, index) => {
                  return (
                    <div key={index} className="week-row">
                      {
                        this.state.weeksDays[index].map((weekDay) => {
                          const date = this.state.selectedDate;
                          const isSelected = this.currentYear === date[0] && this.currentMonth === date[1] && weekDay === date[2];
                          const isNotInThisMonth = (index === 0 && weekDay > 7) || ((index === 5 || index === 4) && weekDay < 21);
                          return <div key={'week' + index + '-' + weekDay} onClick={isNotInThisMonth ? null : () => this.pickDay(weekDay)} className={`day-item ${isSelected && !isNotInThisMonth ? 'selected' : ''} ${isNotInThisMonth ? 'fade' : ''}`} >{weekDay}</div>;
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          </div> : this.state.view === 1 ? <div className="month-list">
            {
              this.monthDaysName.map((month, index) => {
                return (
                  <div key={month.name} className={this.currentMonth === index ? 'selected' : ''} onClick={() => { this.pickMonth(index); }}>{month.name}</div>
                )
              })
            }
          </div> : this.state.view === 2 ? <div className="year-list">
            {
              this.state.yearsToShow.map((year) => {
                return (
                  <div key={year} className={this.currentYear === year ? 'selected' : ''} onClick={() => { this.pickYear(year); }}>{year}</div>
                )
              })
            } </div>
                : this.state.view === 3 ? <p>Show Decades</p> : null
        }
        <div className="show-date">
          <h5>Pick Time</h5>
        </div>
      </div>
    );
  };
}

export default PersianDatePicker;
