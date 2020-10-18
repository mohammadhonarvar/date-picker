import React, { Component } from "react";
import DecadesView from './components/decade';
import Calendar from './components/calendar';
import Clock from './components/clock';
import BottomExtraData from './components/bottom-extra-data';
import Header from './components/header';
import MonthsView from './components/months';
import YearsView from './components/years';
import Icons from './common/icon';

class DatePicker extends Component {

  constructor(props) {
    super(props);

    // bindings
    this.onArrowClick = this.onArrowClick.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.setDecade = this.setDecade.bind(this);
    this.nextView = this.nextView.bind(this);
    this.previousView = this.previousView.bind(this);
    this.changeDisplayingDate = this.changeDisplayingDate.bind(this);
    this.gotoDate = this.gotoDate.bind(this);

    // state initializing
    this.state = {
      // view index handler
      view: props.timeOnly ? 4 : props.initView ?? 0,
      // current on screen date --> [y,m,d]
      displayingDate: props.initDate,
      // keeps current decade
      decade: props.initDate[0],
      // selected date --> [y,m,d]
      selectedDate: this._initSelectedDateState(),
    };

    // required data for each type (gregorian, solar)
    this.data = props.data;

    this.time = props.selectedTime ?? [0, 0, 0];
    // minium year user can pick
    this.minYear = props.minYear ?? 1100;

  }

  _initSelectedDateState = () =>
    this.props.rangeSelect ? this._sortSelectedDates(this.props.selectedDate) : this.props.selectedDate ? [this.props.selectedDate] : [];


  _sortSelectedDates = (selectedDate) => {
    if (!selectedDate) return [];

    const rangeDate = Date.parse(selectedDate[0]);
    const rangeEndDate = Date.parse(selectedDate[1]);

    return rangeDate > rangeEndDate ? this._swapDates(selectedDate) : selectedDate;
  };

  _swapDates = (dates) => {
    const temporary = dates[0];
    dates[0] = dates[1];
    dates[1] = temporary;
    return dates;
  }

  _calculateDecade = () => this.state.decade - this.state.decade % 10;

  _calculateDisplayingDate = (currentYear, currentMonth, day, next) => {
    const changeFactor = next ? 1 : -1;
    const newMonth = (currentMonth + changeFactor) % 12;
    const month = newMonth < 0 ? 11 : newMonth;
    const year = (newMonth < 0 || (!newMonth && next)) ? currentYear + changeFactor : currentYear;
    return [year, month, day];
  };

  setDecade = (decade) => this.setState({ decade });

  _setView = (view) => this.setState({ view });

  previousView = () => this.state.view > 0 ?
    this.setState({ view: this.state.view - 1 }) : null;

  nextView = () =>
    this.state.view < 3 ?
      this.setState({ view: this.state.view + 1 }) : null;

  gotoDate = (displayingDate) => {
    this.setState({
      displayingDate,
      view: 0,
    });
  };

  selectDate = (day) => {
    let date = [this.state.displayingDate[0], this.state.displayingDate[1], day];
    let selectedDate;
    // remove :: start
    if (this.props.rangeSelect && this.state.selectedDate.length === 1) {
      selectedDate = this._sortSelectedDates([...this.state.selectedDate, date]);
    } else {
      selectedDate = [date];
    }
    this.setState({ selectedDate });
    // remove :: end
    this.props.onChangeDate(selectedDate);
  };

  onTimeChange = (time) => {
    let index = 0;
    Object.values(time).forEach((value) => {
      if (value === '') value = 0;
      this.time[index++] = parseInt(value);
    });
    this.props.onChangeTime(this.time);
  };

  // change current onscreen date
  changeDisplayingDate = (displayingDate) =>
    this.setState({ displayingDate, decade: displayingDate[0] });

  // header arrow callbacks
  onArrowClick = (next = false) => {
    let decade, changeFactor;
    switch (this.state.view) {
      // change month depend on {next}
      case 0:
        const newDisplayingDate = this._calculateDisplayingDate(this.state.displayingDate[0], this.state.displayingDate[1], this.state.displayingDate[2], next);
        if (newDisplayingDate[0] < this.minYear && newDisplayingDate[1] === 11) return;
        this.changeDisplayingDate(newDisplayingDate);
        break;
      case 2:
        // change current decade to show next or previous range of decades
        // depend on {next}
        changeFactor = next ? 10 : -10;
        decade = this.state.decade + changeFactor;
        if (decade < (this.minYear - this.minYear % 10)) return;
        this.setState({ decade });
        break;
      case 3:
        // again change current decade this time to show decade list so user
        // can pick a range for case2
        // see {DecadesView} for more info
        changeFactor = next ? 30 : -30;
        if (!next && (this.state.decade - this.state.decade % 10) <= (this.minYear - this.minYear % 10)) return;
        decade = this.state.decade + changeFactor;
        this.setState({ decade });
        break;

      case 4:
        this.setState({ view: 0 });
        break;
      default:
        console.log('Error: Invalid view!');
    }
  };

  render() {
    return (
      <div>
        <div className="date-picker">
          {
            this.state.view === 4 ? null :
              <Header
                title={
                  this.state.view === 0 ?
                    `${this.data.months[this.state.displayingDate[1]].name} ${this.state.displayingDate[0]}` :
                    this.state.view === 1 ? this.state.displayingDate[0] :
                      this.state.view === 2 ? `${this._calculateDecade()} - ${this._calculateDecade() + 9}` :
                        this.state.view === 3 ?
                          <Icons.calendar className="calendar-icon" /> : ''

                }
                hideArrows={this.state.view === 1}
                onArrowClick={this.onArrowClick}
                nextView={this.nextView}
              />
          }
          {
            this.props.showToday ? <BottomExtraData months={this.data.months} className="today" gotoDate={this.gotoDate} date={this.props.initDate} /> : null
          }
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
              <Clock
                className={`view clock-view${this.state.view === 4 ? '' : ' hide-view'}`}
                onTimeChange={this.onTimeChange}
                time={this.time}
              />
            </div>
          </div>
          {
            this.props.showSelectedDate && this.state.selectedDate.length ? <BottomExtraData months={this.data.months} className="selected-date" gotoDate={this.gotoDate} date={this.state.selectedDate} /> : null
          }
        </div>
        {
          this.props.enableTime && !this.props.timeOnly ?
            <div className="goto-time-view" onClick={() => this._setView(this.state.view === 4 ? 0 : 4)}>
              {
                this.state.view === 4 ? <Icons.arrowBackward /> : <Icons.clock />
              }
            </div> : null
        }
      </div>
    );
  }

}

export default DatePicker;