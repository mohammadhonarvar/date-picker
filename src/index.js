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
      minYear={1600}
      onSelectDate={(date) => console.log(date)}
      highlightToday={true}
      shortWeekLabel={true}
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
