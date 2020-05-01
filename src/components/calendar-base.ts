/**
 * This class is based on gregorian, then you can write your calendar with your data.
 * For example you can write persian calendar with your persian data (days label, months label & etc...)
*/

import { html, css, customElement, TemplateResult, property, query } from 'lit-element';

import { BaseElement } from '../base-element';
import './week-labels';

// This class is based on gregorian, then we can use the following:
import { weekDayList, monthsDaysCount, monthList } from '../data/gregorian';

interface MonthInterface {
  name: string;
  shortName: string;
  code: number;
}

@customElement('calendar-base-element')
export default class CalendarBaseElement extends BaseElement {
  @property({ type: String })
  initDate: string = '1100-1-1';

  @property({ type: String })
  onScreenDate: string = this.initDate;

  @property({ type: Boolean })
  shortWeekLabel: boolean = true;

  @property({ type: Boolean })
  onlyShowCurrentMonthDays: boolean = true;

  @property({ type: Boolean })
  hideLastFadedRow: boolean = false;

  @property({ type: Array })
  monthsDaysCount: number[] = monthsDaysCount;

  @property({ type: Array })
  monthList: MonthInterface[] = monthList;

  @query('week-labels')
  weekLabelsElement!: HTMLElement;

  private calendarInitDate: number[] = this.convertDateToArray(this.initDate);
  private calendarOnScreenDate: number[] = this.convertDateToArray(this.onScreenDate);

  static styles = css`
    .week-labels-row .calendar-day,
    .calendar-row .calendar-day {
      /* background-color: tomato; */
      /* margin: 2px; */
      font-weight: 500;
      flex: 1 0 auto;
      position: relative;
    }

    .week-labels-row .calendar-day::after,
    .calendar-row .calendar-day::after {
      content: "";
      float:left;
      display: block;
      padding-top: 100%;
    }

    .calendar-row .calendar-day {
      color: rgba(0, 0, 0, 0.87);
      cursor: pointer;
      border-radius: 50%;
    }

    .calendar-day-data {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .calendar-row .current-date-highlight {
      color: #A0144F;
      background-color: #A0144F23;
    }

    .calendar-row .selected-day {
      background: #A0144F;
      color: rgba(255, 255, 255, 0.87);
    }
  `;

  protected shouldUpdate(): boolean {
    if ((this.initDate.split('-')).length !== 3) return false;
    return true;
  }

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('update');

    // Prevent re-rendering when shortWeekLabel is changed
    if (changedProperties.has('shortWeekLabel') && !this.shortWeekLabel) {
      if (this.weekLabelsElement) {
        this.weekLabelsElement.removeAttribute('short-name');
      }
      return;
    }

    // Create array of initDate when it's changed
    if (changedProperties.has('date')) {
      this.calendarInitDate = this.convertDateToArray(this.initDate);
    }

    super.update(changedProperties);
  }

  protected render(): TemplateResult {
    this._log('render');

    const calendarWeekList = this.calculateCalendar(1);

    return html`
      <week-labels .weekLabelList="${weekDayList}"></week-labels>
      ${calendarWeekList.map((week: number[]) => {
        return html`
          <div class="calendar-row">
            ${week.map((day: number, index: number) => {
              return this.getWeekDaysTemplate(day, index);
            })}
          </div>
        `
      })}
    `;
  }

  protected updated() {
    this._log('updated');

    if (this.weekLabelsElement && this.shortWeekLabel) {
      this.weekLabelsElement.setAttribute('short-name', '');
    }
  }

  protected getWeekDaysTemplate(day: number, index: number): TemplateResult {
    this._log('getCalendarWeekTemplate');

    const today = this.calculateIfTodayExist() ? this.calendarInitDate[2] : -1;
    const notForThisMonth = ((index === 0 && day > 7) || (index > 2 && day < 15));
    // const selected = selectedDays.includes(day);
    // const edge = selected && props.selectedDate.length > 1;
    return html`
      <div
        class="calendar-day ${(notForThisMonth ? 'fade' : today === day ? ' current-date-highlight' : '')}"
        @click="${this.onDayClick}"
      >
      <div class="calendar-day-data">
        ${this.onlyShowCurrentMonthDays && notForThisMonth ? '' : day}
      </div>
    </div>
    `;
  }

  // TODO: Complete this method
  protected onDayClick() {
    this._log('onDayClick');
  }

  private convertDateToArray(date: string): number[] {
    this._log('convertDateToArray');
    return (date.split('-')).map((item: string): number => parseInt(item));
  }

  protected calculateIfTodayExist(): boolean {
    this._log('calculateIfTodayExist');

    return (this.calendarInitDate[0] === this.calendarOnScreenDate[0] &&
      this.calendarInitDate[1] === this.calendarOnScreenDate[1]);
  }

  protected leapYearCalculation(year: number): number {
    this._log('leapYearCalculation');

    let isLeap: number = 0;
    if (year % 4 === 0) isLeap = 1;
    if (year % 100 === 0) {
      isLeap = 0;
      if (year % 400 === 0) isLeap = 1;
    }
    return isLeap;
  };

  protected calculateCalendar(leapMonthIndex: number): number[][] {
    this._log('calculateCalendar');

    let date = new Date(this.calendarOnScreenDate[0], this.calendarOnScreenDate[1], 1);
    // if (props.isSolar) {
    //   const newDate = props.toGregorian(this.calendarOnScreenDate[0], this.calendarOnScreenDate[1] + 1, 1);
    //   date = new Date(newDate[0], newDate[1] - 1, newDate[2]);
    // }

    const currentMonthDaysCount = this.monthsDaysCount[this.calendarOnScreenDate[1]] + (this.calendarOnScreenDate[1] === leapMonthIndex ? this.leapYearCalculation(this.calendarOnScreenDate[0]) : 0);

    let tempYear = this.calendarOnScreenDate[0];
    let previousMonthDaysIndex = this.calendarOnScreenDate[1] - 1;
    if (this.calendarOnScreenDate[1] - 1 === -1) {
      tempYear--;
      previousMonthDaysIndex = 11;
    }
    const previousMonthDaysCount = this.monthsDaysCount[previousMonthDaysIndex] + (this.calendarOnScreenDate[1] - 1 === leapMonthIndex ? this.leapYearCalculation(tempYear) : 0);

    const startWeekAtIndex = date.getDay();
    // console.log(startWeekAtIndex);

    let totalCells = currentMonthDaysCount + startWeekAtIndex;

    let calendar: Array<number[]> = [];
    let week = Array.from({ length: startWeekAtIndex }, (_v, k) => (previousMonthDaysCount - startWeekAtIndex) + k + 1);

    for (let i = startWeekAtIndex + 1; calendar.length < 6; ++i) {
      const day = i > totalCells ? i - totalCells : i - startWeekAtIndex;
      if (i % 7 === 0) {
        week.push(day);
        calendar.push(week);
        week = [];
        if ((this.onlyShowCurrentMonthDays || this.hideLastFadedRow) && 7 * calendar.length >= totalCells) break;
        continue;
      }
      week.push(day);

    }
    return calendar;
  }

  // protected sortRangeSelectedDates(selectedDates: Array<Number> | undefined) {
  //   if (!selectedDates) return [];

  //   const startDate = Date.parse(selectedDates[0].toString());
  //   const endDate = Date.parse(selectedDates[1].toString());

  //   return startDate > endDate ? [selectedDates[1], selectedDates[0]] : selectedDates;
  // };
}
