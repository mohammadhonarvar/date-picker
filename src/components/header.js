import React from 'react';
import Icons from '../common/icon';

const Header = (props) => {
  return <div className="header">
    {
      props.hideArrows ? null : <div className="previous" onClick={() => props.onArrowClick()}>
        <Icons.arrowBackward />
      </div>
    }
    <p onClick={props.nextView}>{props.title}</p>
    {
      props.hideArrows ? null : <div className="next" onClick={() => props.onArrowClick(true)}>
        <Icons.arrowForward />
      </div>
    }
  </div>;
}

export default Header;