import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DatePicker from './date_picker';
import * as serviceWorker from './serviceWorker';

// import data from "./data/solar";
import data from "./data/gregorian";

ReactDOM.render(
  <div className="app">
    <DatePicker
      // initDate={[1399, 0, 1]}
      // minYear={1300}

      data={data}
      initDate={[2020, 2, 20]}
      minYear={1995}
      onChangeDate={(date) => console.log(date)}
      onChangeTime={(time) => console.log(time)}
      highlightToday={true}
      shortWeekLabel={true}
      // timeOnly={true}
      // if range select is true
      // selectedDate must be a 2D array
      // e.g  --> selectedDate={[2020, 2, 19], [2020, 2, 25]}
      rangeSelect={true}
      // selectedDate={[[2020, 2, 16], [2020, 2, 26]]}
      // selectedTime={[20, 59, 24]}
      // initView={3}
      enableTime={true}

    // maxRange

    // selectedDate={[2020, 2, 19]}
    // onlyShowCurrentMonthDays={true}
    // hideLastFadedRow={true}
    // showSelectedDate={true}
    // showToday={true}
    />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
