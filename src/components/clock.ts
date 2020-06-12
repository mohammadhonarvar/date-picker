import { html, css, customElement, TemplateResult, property, queryAll } from 'lit-element';

import { BaseElement } from '../base-element';
import { addLeadingZero } from '../utils/add-leading-zero';

const dateNow = new Date();

@customElement('clock-element')
export class ClockElement extends BaseElement {
  @property({ type: String })
  time: string = `${addLeadingZero(dateNow.getHours())}:${addLeadingZero(dateNow.getMinutes())}:${addLeadingZero(dateNow.getSeconds())}`;

  private timeToArray: number[] = this.time.split(':').map(item => parseInt(item));

  @queryAll('input')
  inputElementList: HTMLInputElement[] | undefined;

  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
      /* background: #eaeaea;
      border-radius: 10px; */
    }

    .clock {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      background: #efefef;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      border: 3px solid #ffffff;
      margin: 24px auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pointer {
      position: absolute;
      transform-origin: 0;
      border-radius: 4px;
      background: #9a9a9e;
      transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.65s;
    }

    .hour {
      width: 42px;
      height: 4px;
      transform: translate(50%) rotate(0deg);
    }

    .minute {
      width: 48px;
      height: 3px;
      transform: translate(50%) rotate(130deg);
    }

    .second {
      background: #fa7777;
      width: 56px;
      height: 2px;
      transform: translate(50%) rotate(90deg);
    }

    .center-dot {
      background: #ffffff;
      border: 4px solid #9a9a9e;
      border-radius: 50%;
      width: 3px;
      height: 3px;
      z-index: 2;
    }

    .clock-input-container {
      color: rgba(0, 0, 0, 0.38);
      margin: 24px auto;
      display: flex;
    }

    .clock-input-container input {
      outline: none;
      width: 42px;
      height: 42px;
      background-color: #efefef;
      border: none;
      margin: 0 8px;
      border-radius: 4px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.38);
    }
  `;

  protected shouldUpdate(): boolean {
    this._log('shouldUpdate');
    return this.time.split(':').length === 2 || this.time.split(':').length === 3;
  }

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('update');

    if (changedProperties.has('time')) {
      this.timeToArray = this.time.split(':').map(item => parseInt(item));
    }

    super.update(changedProperties);
  }

  protected render(): TemplateResult {
    this._log('render');

    return html`
      <div class="clock">
        <div class="pointer hour" style="transform: translate(50%) rotate(${((this.timeToArray[0] % 12) * 30 + this.timeToArray[1] * 0.5) - 90.0}deg)"></div>
        <div class="pointer minute" style="transform: translate(50%) rotate(${(this.timeToArray[1] * 6) - 90.0}deg)"></div>
        <div class="pointer second" style="transform: translate(50%) rotate(${(this.timeToArray[2] * 6) - 90.0}deg)"></div>
        <!-- ${this.timeToArray.length === 3
          ? html``
          : ''
        } -->
        <div class="center-dot"></div>
      </div>
      <div class="clock-input-container">
        <input
          name="hour"
          type="text"
          maxLength="2"
          value="${this.timeToArray[0]}"
          @focus="${(event: Event) => { (event.target as HTMLInputElement).setAttribute('focused', '') }}"
          @blur="${(event: Event) => { (event.target as HTMLInputElement).removeAttribute('focused') }}"
          @keydown="${this.onKeyDown}"
          @keyup="${this.onKeyUp}"
          @change="${this.changeClock}"
        >
        <input
          name="minute"
          type="text"
          maxLength="2"
          value="${this.timeToArray[1]}"
          @focus="${(event: Event) => { (event.target as HTMLInputElement).setAttribute('focused', '') }}"
          @blur="${(event: Event) => { (event.target as HTMLInputElement).removeAttribute('focused') }}"
          @keydown="${this.onKeyDown}"
          @keyup="${this.onKeyUp}"
          @change="${this.changeClock}"
        >
        ${this.timeToArray.length === 3
          ? html`
              <input
                name="second"
                type="text"
                maxLength="2"
                value="${this.timeToArray[2]}"
                @focus="${(event: Event) => { (event.target as HTMLInputElement).setAttribute('focused', '') }}"
                @blur="${(event: Event) => { (event.target as HTMLInputElement).removeAttribute('focused') }}"
                @keydown="${this.onKeyDown}"
                @keyup="${this.onKeyUp}"
                @change="${this.changeClock}"
              >
            `
          : ''
        }
      </div>
    `
  }

  protected validClock(inputName: string, clockPointerValue: string) {
    let clockRegularExpression = new RegExp('^[0-9 ]*$');
    if (!clockRegularExpression.test(clockPointerValue)) return false;

    if (inputName === 'hour') {
      if (clockPointerValue[0] >= '3' || (clockPointerValue[0] >= '2' && clockPointerValue[1] >= '4')) return false;
    } else {
      if (clockPointerValue[0] >= '6') return false;
    }

    return true;
  };

  protected changeClock(event: KeyboardEvent) {
    this._log('changeClock');
    
    let clockPointerValue = (event.target?.['value'] as string).trim();
    const inputName = event.target?.['name'];

    if (!this.validClock(inputName, clockPointerValue)) return;

    switch (inputName) {
      case 'hour':
        this.timeToArray[0] = parseInt(clockPointerValue);
        break;

      case 'minute':
        this.timeToArray[1] = parseInt(clockPointerValue);
        break;

      case 'second':
        this.timeToArray[2] = parseInt(clockPointerValue);
        break;

      default:
        break;
    }

    this.requestUpdate();
    this._fire('time-changed-to', {
      stringTime: `${addLeadingZero(this.timeToArray[0])}:${addLeadingZero(this.timeToArray[1])}:${addLeadingZero(this.timeToArray[2])}`,
      arrayTime: this.timeToArray
    });
  };

  protected changeClockValue(inputValue: number, inputName: string, operation: boolean) {
    this._log('changeClockValue');

    let clockPointerValue: number = inputValue;

    if (!operation && inputValue < 1) {
      clockPointerValue = inputName === 'hour' ? 24 : 60;
    }
    else if (operation && ((inputName === 'hour' && inputValue > 22) || inputValue > 58)) {
      clockPointerValue = -1;
    }

    const operator = operation ? 1 : -1;
    switch (inputName) {
      case 'hour':
        this.timeToArray[0] = clockPointerValue + operator;
        break;

      case 'minute':
        this.timeToArray[1] = clockPointerValue + operator;
        break;

      case 'second':
        this.timeToArray[2] = clockPointerValue + operator;
        break;

      default:
        break;
    }

    this.requestUpdate();
    this._fire('time-changed-to', {
      stringTime: `${addLeadingZero(this.timeToArray[0])}:${addLeadingZero(this.timeToArray[1])}:${addLeadingZero(this.timeToArray[2])}`,
      arrayTime: this.timeToArray
    });
  };

  protected onKeyUp(event: KeyboardEvent) {
    this._log('onKeyUp');
    if (event.keyCode !== 13) return;

    if (!this.inputElementList) return

    let focusedInputIndex = -1;
    for (let i = 0; i < this.inputElementList.length; i++) {
      if (!this.inputElementList[i].hasAttribute('focused')) continue;
      focusedInputIndex = i;
      break;
    }

    if (focusedInputIndex === 2) {
      this.inputElementList[focusedInputIndex].blur();
    }
    else {
      this.inputElementList[focusedInputIndex + 1].focus();
    }
  };

  protected onKeyDown(event: KeyboardEvent) {
    this._log('onKeyDown');

    const inputValue = event.target?.['value'] as string;
    const inputName = event.target?.['name'];

    if ( !(inputValue && inputName) ) return;

    if (event.keyCode === 38) {
      this.changeClockValue(parseInt(inputValue), inputName, true);
    }
    else if (event.keyCode === 40) {
      this.changeClockValue(parseInt(inputValue), inputName, false);
    }
  };
}
