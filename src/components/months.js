import React from 'react';

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


export default MonthsView;