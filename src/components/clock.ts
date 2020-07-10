import { html, css, customElement, TemplateResult, property, queryAll, query } from 'lit-element';

import { BaseElement } from '../base-element';
import { addLeadingZero } from '../utils/add-leading-zero';

const dateNow = new Date();

@customElement('clock-element')
export class ClockElement extends BaseElement {
  @property({ type: String })
  time: string = `${addLeadingZero(dateNow.getHours())}:${addLeadingZero(dateNow.getMinutes())}:${addLeadingZero(dateNow.getSeconds())}`;

  private timeArray: number[] = this.time.split(':').map(item => parseInt(item));

  @query('input[name="hour"]')
  hourInputElement: HTMLInputElement | undefined;

  @query('input[name="minute"]')
  minuteInputElement: HTMLInputElement | undefined;

  @query('input[name="second"]')
  secondInputElement: HTMLInputElement | undefined;

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
      align-items: center;
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
      this.timeArray = this.time.split(':').map(item => parseInt(item));
    }

    super.update(changedProperties);
  }

  protected render(): TemplateResult {
    this._log('render');

    return html`
      <div class="clock">
        <div class="pointer hour" style="transform: translate(50%) rotate(${((this.timeArray[0] % 12) * 30 + this.timeArray[1] * 0.5) - 90.0}deg)"></div>
        <div class="pointer minute" style="transform: translate(50%) rotate(${(this.timeArray[1] * 6) - 90.0}deg)"></div>
        <div class="pointer second" style="transform: translate(50%) rotate(${(this.timeArray[2] * 6) - 90.0}deg)"></div>
        <div class="center-dot"></div>
      </div>
      <div class="clock-input-container">
        <input
          name="hour"
          type="text"
          maxLength="2"
          value="${addLeadingZero(this.timeArray[0])}"
          @focus="${(event: Event) => { (event.target as HTMLInputElement).setAttribute('focused', '') }}"
          @blur="${this.onInputBlur}"
          @keyup="${this.onKeyup}"
          @input="${this.onInput}"
        /> :
        <input
          name="minute"
          type="text"
          maxLength="2"
          value="${addLeadingZero(this.timeArray[1])}"
          @focus="${(event: Event) => { (event.target as HTMLInputElement).setAttribute('focused', '') }}"
          @blur="${this.onInputBlur}"
          @keyup="${this.onKeyup}"
          @input="${this.onInput}"
        />
        ${this.timeArray.length === 3
        ? html`
              : <input
                name="second"
                type="text"
                maxLength="2"
                value="${addLeadingZero(this.timeArray[2])}"
                @focus="${(event: Event) => { (event.target as HTMLInputElement).setAttribute('focused', '') }}"
                @blur="${this.onInputBlur}"
                @keyup="${this.onKeyup}"
                @input="${this.onInput}"
              />
            `
        : ''
      }
      </div>
    `
  }

  protected validClock(inputName: string, clockPointerValue: string) {
    this._log('validClock');

    let clockRegularExpression = new RegExp('^[0-9 ]*$');
    if (!clockRegularExpression.test(clockPointerValue)) return false;

    if (inputName === 'hour') {
      this._log('validClock: %s', clockPointerValue);
      if (clockPointerValue[0] >= '3' || (clockPointerValue[0] >= '2' && clockPointerValue[1] >= '4')) return false;
    } else {
      this._log('validClock: %s && %s', clockPointerValue[0], clockPointerValue[1]);
      if (clockPointerValue[0] >= '6') return false;
    }

    return true;
  };

  protected onInputBlur(event: KeyboardEvent) {
    this._log('onInputBlur');

    (event.target as HTMLInputElement).removeAttribute('focused');
    const inputValue = (event.target?.['value'] as string).trim();
    const inputName = event.target?.['name'];
    this.updateInputValue(inputName, parseInt(inputValue));
  }

  protected changeClockValue(inputValue: number, inputName: string, arrowName?: string) {
    this._log('changeClockValue');

    let clockPointerValue: number = inputValue;

    if (arrowName === 'up') {
      this.updateInputValue(inputName, clockPointerValue + 1);
      return;
    }

    if (arrowName === 'down') {
      this.updateInputValue(inputName, clockPointerValue -1);
      return;
    }

    if (inputValue < 1) {
      clockPointerValue = inputName === 'hour' ? 24 : 60;
    }
    else if ((inputName === 'hour' && inputValue > 22) || inputValue > 58) {
      clockPointerValue = -1;
    }
  };

  protected onKeyup(event: KeyboardEvent) {
    this._log('onKeyup');

    if (
      !(
        [8, 13, 38, 40, 46].includes(event.keyCode) ||
        /[0-9]/.test(String.fromCharCode(event.keyCode))
      )
    ) {
      event.preventDefault();
      return;
    }

    if (event.keyCode === 13) {
      let focusedInputIndex = -1;
      for (let i = 0; i < this.inputElementList!.length; i++) {
        if (!this.inputElementList![i].hasAttribute('focused')) continue;
        focusedInputIndex = i;
        break;
      }

      if (focusedInputIndex === 2) {
        this.inputElementList![focusedInputIndex].blur();
      }
      else {
        this.inputElementList![focusedInputIndex + 1].focus();
      }

      return;
    }

    const inputValue = event.target?.['value'] as string;
    const inputName = event.target?.['name'];

    const arrowName = (event.keyCode === 38) ? 'up' : ((event.keyCode === 40) ? 'down' : '');
    this.changeClockValue(parseInt(inputValue), inputName, arrowName);

    this._fire('time-changed', {
      stringTime: `${addLeadingZero(this.timeArray[0])}:${addLeadingZero(this.timeArray[1])}:${addLeadingZero(this.timeArray[2])}`,
      arrayTime: this.timeArray
    }, true);
  }

  protected onInput(event: KeyboardEvent) {
    this._log('onInput');

    const inputValue = (event.target?.['value'] as string).trim();
    const inputName = event.target?.['name'];

    if (inputValue.length < 2) return;

    this.updateInputValue(inputName, parseInt(inputValue));
  }

  protected updateInputValue(inputName: string, newVal: number) {
    this._log('updateAllInputValues');

    switch (inputName) {
      case 'hour':
        if (newVal > 23) {
          this.hourInputElement!.value = '00';
          this.timeArray[0] = 0;
        }
        else {
          this.hourInputElement!.value = addLeadingZero(newVal);
          this.timeArray[0] = newVal;
        }
        break;

      case 'minute':
        if (newVal > 59) {
          this.minuteInputElement!.value = '00';
          this.timeArray[1] = 0;
        }
        else {
          this.minuteInputElement!.value = addLeadingZero(newVal);
          this.timeArray[1] = newVal;
        }
        break;

      case 'second':
        if (newVal > 59) {
          this.secondInputElement!.value = '00';
          this.timeArray[2] = 0;
        }
        else {
          this.secondInputElement!.value = addLeadingZero(newVal);
          this.timeArray[2] = newVal;
        }
        break;
    }

    this.requestUpdate();
  }
}
