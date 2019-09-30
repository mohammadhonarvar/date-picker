import React, { Component } from 'react';
import './style.css';

class DatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weeksDays: [[], [], [], [], [], []],
      date: [0, 0, 0],
    };
    this.monthIndex = 0;
    this.currentYear = 2019;
    this.monthDaysName = [
      { name: 'January', code: 0 },
      { name: 'February', code: 3 },
      { name: 'March', code: 3 },
      { name: 'April', code: 6 },
      { name: 'May', code: 1 },
      { name: 'Jun', code: 4 },
      { name: 'July', code: 6 },
      { name: 'August', code: 2 },
      { name: 'September', code: 5 },
      { name: 'October', code: 0 },
      { name: 'November', code: 3 },
      { name: 'December', code: 5 }
    ];
    this.isLeapYear = 0;
    this.state.weeksDays = this._calculateMonthDays(undefined, 0);

    this._calculateWeekDay(this.currentYear, 1);
  }

  _calculateWeekDay(year, day) {
    const yearDate = year % 100;
    const yearCentury = Math.floor(year / 100);
    const centuryCodes = [4, 2, 0, 6];
    const calcCenturyCode = yearCentury % 4;
    const centuryCode = centuryCodes[calcCenturyCode === 0 ? 3 : calcCenturyCode - 1];
    const yearCode = (yearDate + (yearDate / 4)) % 7;
    const monthCode = this.monthDaysName[this.monthIndex].code;

    let isLeap = 0;
    if (year % 4 === 0) isLeap = 1;
    if (year % 100 === 0) {
      isLeap = 0;
      if (year % 400 === 0) isLeap = 1;
    }

    this.isLeapYear = isLeap;
    return Math.floor(yearCode + monthCode + centuryCode + day + isLeap) % 7;
  }

  _calculateMonthDays = (next = true, monthIndex) => {
    let tempWeeksDays = [[], [], [], [], [], []];
    const weekDayIndex = this._calculateWeekDay(this.currentYear, 1);
    let monthsDaysCount = [31, 28 + this.isLeapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


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
          if (day > monthsDaysCount[this.monthIndex])
            pushItem = day - monthsDaysCount[this.monthIndex];

        tempWeeksDays[weekCounter].push(pushItem);
        lastDayPrinted = pushItem;
      }
      lastDayPrinted++;
    }
    return tempWeeksDays;
  }

  arrowCall(next) {
    // if (next) this.monthIndex = Math.abs(this.monthIndex + 1) % 12;
    // else this.monthIndex = Math.abs(this.monthIndex - 1) % 12;

    if (next)
      this.monthIndex++;
    else
      this.monthIndex--;

    if (this.monthIndex === 12) {
      this.monthIndex = 0;
      this.currentYear++;
    }
    else if (this.monthIndex === -1) {
      this.monthIndex = 11;
      this.currentYear--;
    };

    let monthIndex = this.monthIndex - 1;
    if (monthIndex === 12) monthIndex = 0;
    else if (monthIndex === -1) monthIndex = 11;

    let tempWeekDays = this._calculateMonthDays(next, monthIndex);
    this.setState({
      weeksDays: tempWeekDays,
    });
  }

  pickDate = (weekDay) => {
    this.setState({
      date: [this.currentYear, this.monthIndex, weekDay]
    });
    console.log([this.currentYear, this.monthDaysName[this.monthIndex].name, weekDay]);
  }

  render() {
    return (
      <div className="date-picker" >
        <div className="header">
          <div onClick={() => this.arrowCall(false)} className="arrow-prev"></div>
          <h4 className="header-text" onClick={() => { console.log(); }}>{`${this.monthDaysName[this.monthIndex].name} ${this.currentYear}`}</h4>
          <div onClick={() => this.arrowCall(true)} className="arrow-next"></div>
        </div>
        <div className="weekDays">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="month-days">
          {
            this.state.weeksDays.map((week, index) => {
              return (
                <div key={index} className="week-row">
                  {
                    this.state.weeksDays[index].map((weekDay) => {
                      const date = this.state.date;
                      const isSelected = this.currentYear === date[0] && this.monthIndex === date[1] && weekDay === date[2];
                      const isNotInThisMonth = (index === 0 && weekDay > 7) || ((index === 5 || index === 4) && weekDay < 21);
                      return <div key={'week' + index + '-' + weekDay} onClick={isNotInThisMonth ? null : () => this.pickDate(weekDay)} className={`day-item ${isSelected && !isNotInThisMonth ? 'selected' : ''} ${isNotInThisMonth ? 'fade' : ''}`} >{weekDay}</div>;
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div className="show-date">
          <h5>Pick Time</h5>
        </div>
      </div>
    );
  };
}

export default DatePicker;
