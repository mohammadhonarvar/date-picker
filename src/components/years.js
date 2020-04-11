import React from 'react';
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
export default YearsView;