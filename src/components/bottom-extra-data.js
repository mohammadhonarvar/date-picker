import React from 'react';
const BottomExtraData = (props) => {
  return <div className={props.className} onClick={() => props.gotoDate(props.date)}>
    {`${props.months[props.date[1]]['name']} ${props.date[2]}, ${props.date[0]}`}
  </div>;
};

export default BottomExtraData;