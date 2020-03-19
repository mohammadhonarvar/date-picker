import React, { Component } from "react";

class DatePicker extends Component {

  constructor(props) {
    super(props);
    this.onArrowClick = this.onArrowClick.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.setDecade = this.setDecade.bind(this);
    this.nextView = this.nextView.bind(this);
    this.previousView = this.previousView.bind(this);
    this.changeDisplayingDate = this.changeDisplayingDate.bind(this);
    this.gotoDate = this.gotoDate.bind(this);

    this.state = {
      view: 0,
      displayingDate: props.initDate,
      decade: props.initDate[0],
      selectedDate: props.selectedDate ?? [],
    };

    this.data = props.data;
    this.minYear = props.minYear ?? 1100;

  }

  changeDisplayingDate = (displayingDate) =>
    this.setState({ displayingDate, decade: displayingDate[0] });

  onArrowClick = (next = false) => {
    let decade, changeFactor;
    switch (this.state.view) {
      case 0:
        const newDisplayingDate = this._calculateDisplayingDate(this.state.displayingDate[0], this.state.displayingDate[1], this.state.displayingDate[2], next);
        if (newDisplayingDate[0] < this.minYear && newDisplayingDate[1] === 11) return;
        this.changeDisplayingDate(newDisplayingDate);
        break;
      case 2:
        changeFactor = next ? 10 : -10;
        decade = this.state.decade + changeFactor;
        if (decade < (this.minYear - this.minYear % 10)) return;
        this.setState({ decade });
        break;
      case 3:
        changeFactor = next ? 30 : -30;
        if (!next && (this.state.decade - this.state.decade % 10) <= (this.minYear - this.minYear % 10)) return;
        decade = this.state.decade + changeFactor;
        this.setState({ decade });
        break;
      default:
        console.log('Error: Invalid view!');
    }
  };

  selectDate = (day) => {
    const selectedDate = [this.state.displayingDate[0], this.state.displayingDate[1], day];
    this.setState({ selectedDate });
    this.props.onSelectDate(selectedDate);
  };

  _calculateDisplayingDate = (currentYear, currentMonth, day, next) => {
    const changeFactor = next ? 1 : -1;
    const newMonth = (currentMonth + changeFactor) % 12;
    const month = newMonth < 0 ? 11 : newMonth;
    const year = (newMonth < 0 || (!newMonth && next)) ? currentYear + changeFactor : currentYear;
    return [year, month, day];
  };

  previousView = () => this.state.view > 0 ?
    this.setState({ view: this.state.view - 1 }) : null;

  nextView = () =>
    this.state.view < 3 ?
      this.setState({ view: this.state.view + 1 }) : null;

  _calculateDecade = () => this.state.decade - this.state.decade % 10;

  setDecade = (decade) => this.setState({ decade });

  gotoDate = (displayingDate) => {
    this.setState({
      displayingDate,
      view: 0,
    });
  };

  render() {
    return (
      <div className="date-picker">
        <Header
          title={
            this.state.view === 0 ?
              `${this.data.months[this.state.displayingDate[1]].name} ${this.state.displayingDate[0]}` :
              this.state.view === 1 ? this.state.displayingDate[0] : this.state.view === 2 ? `${this._calculateDecade()} - ${this._calculateDecade() + 9}` :
                <svg className="calendar-icon" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" /></svg>
          }
          hideArrows={this.state.view === 1}
          onArrowClick={this.onArrowClick}
          nextView={this.nextView}
        />
        <div className="views-container">
          <div className="views">
            <Calendar
              className={`view${this.state.view === 0 ? '' : ' hide-view'}`}
              selectedDate={this.state.selectedDate}
              selectDate={this.selectDate}
              initDate={this.props.highlightToday ? this.props.initDate : []}
              displayingDate={this.state.displayingDate}
              shortWeekLabel={this.props.shortWeekLabel}
              onlyShowCurrentMonthDays={this.props.onlyShowCurrentMonthDays}
              hideLastFadedRow={this.props.hideLastFadedRow}
              isSolar={this.data.isSolar}
              toGregorian={this.data.toGregorian}
              monthsDaysCount={this.data.monthsDaysCount}
              leapIndex={this.data.leapIndex}
              isLeapYear={this.data.isLeapYear}
              weekDays={this.data.weekDays}
            />
            <MonthsView
              className={`view months-view${this.state.view === 1 ? '' : ' hide-view'}`}
              displayingDate={this.state.displayingDate}
              changeDisplayingDate={this.changeDisplayingDate}
              previousView={this.previousView}
              months={this.data.months}
            />
            <YearsView
              className={`view years-view${this.state.view === 2 ? '' : ' hide-view'}`}
              displayingDate={this.state.displayingDate}
              changeDisplayingDate={this.changeDisplayingDate}
              previousView={this.previousView}
              decade={this.state.decade}
              minYear={this.minYear}
            />
            <DecadesView
              className={`view decades-view${this.state.view === 3 ? '' : ' hide-view'}`}
              setDecade={this.setDecade}
              previousView={this.previousView}
              displayingDate={this.state.displayingDate}
              decade={this.state.decade}
              minYear={this.minYear}
            />
          </div>
        </div>
        {
          this.props.showSelectedDate && this.state.selectedDate.length ? <BottomExtraData months={this.data.months} className="selected-date" gotoDate={this.gotoDate} date={this.state.selectedDate} /> : null
        }
        {
          this.props.showToday ? <BottomExtraData months={this.data.months} className="today" gotoDate={this.gotoDate} date={this.props.initDate} /> : null
        }
      </div>
    );
  }

}

const BottomExtraData = (props) => {
  return <div className={props.className} onClick={() => props.gotoDate(props.date)}>
    {`${props.months[props.date[1]]['name']} ${props.date[2]}, ${props.date[0]}`}
  </div>;
};

const DecadesView = (props) => {
  let decades = [];
  let startYear = props.decade - props.decade % 10;
  for (let i = 0; i < 3; ++i) {
    decades.push([startYear, startYear + 9]);
    startYear += 10;
  }
  return < div className={props.className} >
    {
      decades.map(
        (decade) => {
          const enabled = decade[1] >= props.minYear;
          const activeDecade = props.displayingDate[0] - props.displayingDate[0] % 10 === decade[0];
          return <div
            key={decade}
            className={`decade-button${enabled ? ' enabled-decade' : ''}${activeDecade ? ' active-decade' : ''}`}
            onClick={enabled ? () => {
              props.setDecade(decade[0]);
              props.previousView();
            } : null}
          >
            <div>{`${decade[0]} - ${decade[1]}`}</div>
          </div>
        }
      )
    }
  </div>;
};

const YearsView = (props) => {
  const startYear = props.decade - props.decade % 10;

  const years = Array.from({ length: 10 }, (v, k) => startYear + k);

  return < div className={props.className} >
    {
      years.map(
        (year) => {
          const enabled = year >= props.minYear;
          return <div
            key={year}
            className={`year-button${enabled ? ' enabled-year' : ''}${year === props.displayingDate[0] ? ' active-year' : ''}`}
            onClick={enabled ? () => {
              props.changeDisplayingDate([year, props.displayingDate[1], props.displayingDate[2]]);
              props.previousView();
            } : null}
          >
            <div>{year}</div>
          </div>
        }
      )
    }
  </div>;
};

const Header = (props) => {
  return <div className="header">
    {
      props.hideArrows ? null : <div className="previous" onClick={() => props.onArrowClick()}>
        <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
      </div>
    }
    <p onClick={props.nextView}>{props.title}</p>
    {
      props.hideArrows ? null : <div className="next" onClick={() => props.onArrowClick(true)}>
        <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
      </div>
    }
  </div>;
}

const MonthsView = (props) => {
  return <div className={props.className}>
    {
      props.months.map((month, i) =>
        <div
          key={month['name']}
          className={`month-button ${props.displayingDate[1] === i ? 'active-month' : ''}`}
          onClick={() => {
            props.changeDisplayingDate([props.displayingDate[0], i, props.displayingDate[2]]);
            props.previousView();
          }}
        >
          <div>{month['shortName']}</div>
        </div>
      )
    }
  </div>;
};

const Calendar = (props) => {

  const _calculateIfTodayExist = () =>
    props.initDate[0] === props.displayingDate[0] &&
    props.initDate[1] === props.displayingDate[1];

  const _calculateIfSelectedDayExist = () =>
    props.selectedDate[0] === props.displayingDate[0] &&
    props.selectedDate[1] === props.displayingDate[1];

  const today = _calculateIfTodayExist() ? props.initDate[2] : -1;

  const selectedDay = _calculateIfSelectedDayExist() ? props.selectedDate[2] : -1;

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
                return <div
                  key={`day-${i}`}
                  className={`calendar-day${(notForThisMonth ? ' fade' : selectedDay === day ? ' selected-day' : today === day ? ' current-date-highlight' : '')}`}
                  onClick={notForThisMonth ? null : () => props.selectDate(day)}
                >
                  <div className="calendar-day-data">
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

const WeekLabels = (props) => {
  return <div className="week-labels-row">
    {
      props.weekDays.map((weekDay, i) =>
        <div key={i} className="calendar-day">
          <div className="calendar-day-data">{weekDay[props.shortWeekLabel ? 'shortName' : 'name']}</div>
        </div>
      )
    }
  </div>
}

export default DatePicker;