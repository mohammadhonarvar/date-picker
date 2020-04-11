import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hour: this.addZero(this.props.time[0]),
      minute: this.addZero(this.props.time[1]),
      second: this.addZero(this.props.time[2])
    };

    this.inputReference = {
      hour: React.createRef(),
      minute: React.createRef(),
      second: React.createRef()
    };

  }

  validClock = (target, clockPointerValue) => {
    let clockRegularExpression = new RegExp('^[0-9 ]*$');
    if (!clockRegularExpression.test(clockPointerValue)) return false;

    if (target === 'hour') {
      if (clockPointerValue[0] >= '3' || (clockPointerValue[0] >= '2' && clockPointerValue[1] >= '4')) return false;
    } else {
      if (clockPointerValue[0] >= '6') return false;
    }

    return true;
  };

  changeClock = (event, target) => {
    let clockPointerValue = event.currentTarget.value.trim();
    if (!this.validClock(target, clockPointerValue)) return;
    const nextState = { ...this.state };
    nextState[target] = clockPointerValue;
    this.setState(nextState);
    this.props.onTimeChange(nextState);
  };

  changeClockValue = (target, operation) => {
    let clockPointerValue = parseInt(this.state[target]);
    if (!operation && clockPointerValue < 1)
      clockPointerValue = target === 'hour' ? 24 : 60;
    else if (operation && ((target === 'hour' && clockPointerValue > 22) || clockPointerValue > 58))
      clockPointerValue = -1;


    const operator = operation ? 1 : -1;
    const nextState = { ...this.state };
    nextState[target] = this.addZero(clockPointerValue + operator);
    this.setState(nextState);
    this.props.onTimeChange(nextState);
  };

  addZero = (number) => number < 10 ? "0" + number : number.toString();

  onKeyUp = (event, target) => {
    if (event.keyCode === 13) {
      const inputKeys = Object.keys(this.inputReference);
      const focusedInputIndex = inputKeys.indexOf(target);
      if (focusedInputIndex === 2)
        this.inputReference[target].current.blur();
      else
        this.inputReference[inputKeys[focusedInputIndex + 1]].current.focus();
    }
  };

  onKeyDown = (event, target) => {
    if (this.state[target] === '') return;
    if (event.keyCode === 38)
      this.changeClockValue(target, true);
    else if (event.keyCode === 40)
      this.changeClockValue(target);
  };

  render() {
    return <div className={this.props.className}>
      <div className="clock">
        <div style={{ transform: `translate(50%) rotate(${((this.state.hour % 12) * 30 + this.state.minute * 0.5) - 90.0}deg)`, }} className="pointer hour"></div>
        <div style={{ transform: `translate(50%) rotate(${(this.state.minute * 6) - 90.0}deg)`, }} className="pointer minute"></div>
        <div style={{ transform: `translate(50%) rotate(${(this.state.second * 6) - 90.0}deg)`, }} className="pointer second"></div>
        <div className="center-dot"></div>
      </div>
      <div className="clock-input-container">
        {
          Object.keys(this.inputReference).map(
            (clockInput, index) =>
              <div key={clockInput}>
                <input
                  ref={this.inputReference[clockInput]}
                  data-pointer={clockInput}
                  type="text"
                  maxLength="2"
                  value={this.state[clockInput].toString()}
                  onKeyDown={(event) => { this.onKeyDown(event, clockInput) }}
                  onKeyUp={(event) => { this.onKeyUp(event, clockInput) }}
                  onChange={(event) => this.changeClock(event, clockInput)}
                />
                {index === 2 ? '' : ':'}
              </div>
          )
        }
      </div>
    </div>;
  }
}

export default Clock;
