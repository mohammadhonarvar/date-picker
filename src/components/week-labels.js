import React from 'react';

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

export default WeekLabels;