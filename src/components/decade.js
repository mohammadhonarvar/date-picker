import React from "react";
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

export default DecadesView;