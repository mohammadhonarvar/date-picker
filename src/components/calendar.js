import React from 'react';
import WeekLabels from './week-labels';

const Calendar = (props) => {

  const _calculateIfTodayExist = () =>
    props.initDate[0] === props.displayingDate[0] &&
    props.initDate[1] === props.displayingDate[1];

  const _calculateSelectedDays = () => {
    let days = [];
    // console.log(props.selectedDate);
    props.selectedDate.forEach(date => {
      if (date[0] === props.displayingDate[0] &&
        date[1] === props.displayingDate[1])
        days.push(date[2]);
    });
    return days;
  };

  const selectedDays = _calculateSelectedDays();

  const _calculateIfInRangeDay = (day) => {

    const date = [props.displayingDate[0], props.displayingDate[1], day];

    const currentDate = Date.parse(date);
    const rangeStartDate = Date.parse(props.selectedDate[0]);
    const rangeEndDate = Date.parse(props.selectedDate[1]);

    return rangeStartDate <= currentDate && currentDate <= rangeEndDate;
  };

  const today = _calculateIfTodayExist() ? props.initDate[2] : -1;

  const _calculateCalendar = () => {
    let date = new Date(props.displayingDate[0], props.displayingDate[1], 1);
    if (props.isSolar) {
      const newDate = props.toGregorian(props.displayingDate[0], props.displayingDate[1] + 1, 1);
      date = new Date(newDate[0], newDate[1] - 1, newDate[2]);
    }

    const currentMonthDaysCount = props.monthsDaysCount[props.displayingDate[1]] + (props.displayingDate[1] === props.leapIndex ? props.isLeapYear(props.displayingDate[0]) : 0);

    let tempYear = props.displayingDate[0];
    let previousMonthDaysIndex = props.displayingDate[1] - 1;
    if (props.displayingDate[1] - 1 === -1) {
      tempYear--;
      previousMonthDaysIndex = 11;
    }
    const previousMonthDaysCount = props.monthsDaysCount[previousMonthDaysIndex] + (props.displayingDate[1] - 1 === props.leapIndex ? props.isLeapYear(tempYear) : 0);

    const startWeekAtIndex = date.getDay();
    // console.log(startWeekAtIndex);

    let totalCells = currentMonthDaysCount + startWeekAtIndex;

    let calendar = [];
    let week = Array.from({ length: startWeekAtIndex }, (v, k) => (previousMonthDaysCount - startWeekAtIndex) + k + 1);

    for (let i = startWeekAtIndex + 1; calendar.length < 6; ++i) {
      const day = i > totalCells ? i - totalCells : i - startWeekAtIndex;
      if (i % 7 === 0) {
        week.push(day);
        calendar.push(week);
        week = [];
        if ((props.onlyShowCurrentMonthDays || props.hideLastFadedRow) && 7 * calendar.length >= totalCells) break;
        continue;
      }
      week.push(day);

    }
    return calendar;
  }

  return <div className={props.className}>
    <WeekLabels weekDays={props.weekDays} shortWeekLabel={props.shortWeekLabel} />
    {
      _calculateCalendar().map((calendar, index) => {
        return (
          <div key={index} className="calendar-row">
            {
              calendar.map((day, i) => {
                const notForThisMonth = ((index === 0 && day > 7) || (index > 2 && day < 15));
                const selected = selectedDays.includes(day);
                const edge = selected && props.selectedDate.length > 1;
                return <div
                  key={`day-${i}`}
                  className={`calendar-day${(notForThisMonth ? ' fade' : selected ? ' selected-day' : _calculateIfInRangeDay(day) ? ' in-range-day' : today === day ? ' current-date-highlight' : '')}`}
                  onClick={notForThisMonth ? null : () => props.selectDate(day)}
                >
                  <div
                    className="calendar-day-data"
                    data-range-edge={!notForThisMonth && edge}
                    data-start-range-edge={!notForThisMonth && edge && props.selectedDate[0][2] === day ? "" : null}
                  >
                    {props.onlyShowCurrentMonthDays && notForThisMonth ? null : day}
                  </div>
                </div>
              })
            }
          </div>
        )
      })
    }
  </div>;
}

export default Calendar;