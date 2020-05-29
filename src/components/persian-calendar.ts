/**
 * This class is based on gregorian, then you can write your calendar with your data.
 * For example you can write persian calendar with your persian data (days label, months label & etc...)
*/

import { customElement, query, TemplateResult, html, css } from 'lit-element';

import CalendarBaseElement from './calendar-base';
import { calendarBaseStyle } from '../base-style';
import './month-list';
import { HeaderElement } from './header';
import './header';
import './week-labels';

import { convertStringToNumberArray } from '../utils/convert-string-to-number-array';

// This class is based on gregorian, then we can use the following:
import { weekDayList, monthsDaysCount, monthList } from '../data/jalali';

@customElement('persian-calendar-element')
export class PersianCalendarElement extends CalendarBaseElement {
  @query('week-labels')
  weekLabelsElement!: HTMLElement;

  @query('header-element')
  headerElement: HeaderElement | undefined

  protected calendarInitDate: number[] = [];
  protected calendarOnScreenDate: number[] = [];
  protected selectedDayList: number[] = [];
  protected calendarWeekList: number[][] = [];
  protected leapMonthIndex: number = 11;
  protected weekDayList = weekDayList;

  private minDateGregorianArray: number[];
  private maxDateGregorianArray: number[];
  private headerElementTitle: string = '';

  static styles = [calendarBaseStyle, css`
    .view {
      width: 100%;
      transition: ease-out 0.25s;
      position: relative;
    }

    [hidden] {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      transform: translate3d(-25px, 0, 0);
    }
  `];

  constructor() {
    super();

    this.minDate = '1300-1-1';
    this.maxDate = '1500-1-1';

    this.minDateArray = convertStringToNumberArray(this.minDate as string, '-');
    this.minDateGregorianArray = this.convertToGregorian(this.minDateArray[0], this.minDateArray[1], this.minDateArray[2]);

    this.maxDateArray = convertStringToNumberArray(this.maxDate, '-');
    this.maxDateGregorianArray = this.convertToGregorian(this.maxDateArray[0], this.maxDateArray[1], this.maxDateArray[2]);

    this.monthList = monthList;
    this.monthsDaysCount = monthsDaysCount;
    this.weekDayList = weekDayList;
  }

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('update: %s', this.initDate);

    if (changedProperties.has('minDate')) {
      this.minDateArray = convertStringToNumberArray(this.minDate as string, '-');
      this.minDateGregorianArray = this.convertToGregorian(this.minDateArray[0], this.minDateArray[1], this.minDateArray[2]);
    }

    if (changedProperties.has('maxDate')) {
      this.maxDateArray = convertStringToNumberArray(this.maxDate as string, '-');
      this.maxDateGregorianArray = this.convertToGregorian(this.maxDateArray[0], this.maxDateArray[1], this.maxDateArray[2]);
    }

    // Prevent re-rendering when shortWeekLabel is changed
    if (changedProperties.has('shortWeekLabel') && !this.shortWeekLabel) {
      if (this.weekLabelsElement) {
        this.weekLabelsElement.removeAttribute('short-name');
        return;
      }
    }

    // Create array of initDate when it's changed
    if (changedProperties.has('initDate')) {
      const initDateArray = convertStringToNumberArray(this.initDate as string, '-');
      if (new Date(`${initDateArray[0]}-${initDateArray[1]}-${initDateArray[2]}`).getTime() > new Date(`${this.maxDateGregorianArray[0]}-${this.maxDateGregorianArray[1]}-${this.maxDateGregorianArray[2]}`).getTime()) {
        this.initDate = this.maxDate as string;
      }

      if (new Date(`${initDateArray[0]}-${initDateArray[1]}-${initDateArray[2]}`).getTime() < new Date(`${this.minDateGregorianArray[0]}-${this.minDateGregorianArray[1]}-${this.minDateGregorianArray[2]}`).getTime()) {
        this.initDate = this.minDate as string;
      }

      this.onScreenDate = this.initDate;

      this.calendarInitDate = initDateArray;
      // We need a cloned array here
      this.calendarOnScreenDate = initDateArray.slice(0);
      this.calendarWeekList = this.calculateCalendar();
    }

    super.update(changedProperties);
  }

  protected render(): TemplateResult {
    this._log('render');

    const today = this.calculateIfTodayExist() ? this.calendarInitDate[2] : -1;

    return html`
      ${['calendar', 'monthList'].includes(this.activeView)
        ?
        html`
          <header-element
            @prev-month="${this.renderPrevMonth}"
            @next-month="${this.renderNextMonth}"
            @show-month-list="${() => { this.activeView = 'monthList' }}"
            debug
          >
          </header-element>`
        : ''
      }
      <div class="view" ?hidden="${this.activeView !== 'calendar'}">
        <week-labels .weekLabelList="${this.weekDayList}"></week-labels>
        ${this.calendarWeekList.map((week: number[], index: number) => {
          return html`
              <div class="calendar-row">
                ${week.map((day: number) => {
                  return this.getWeekDaysTemplate(day, index, today);
                })}
              </div>
            `
          })
        }
      </div>
      <month-list
        class="view"
        ?hidden="${this.activeView !== 'monthList'}"
        .monthList="${this.monthList}"
        @month-changed-to="${this.onMonthChangedTo}"
        debug
      >
      </month-list>
    `;
  }

  protected updated() {
    this._log('updated');

    if (this.headerElementTitle && this.headerElement) {
      this.headerElement.title = this.headerElementTitle;
      this._fire('current-month-changed', this.calendarOnScreenDate[1], true);
    }

    if (this.weekLabelsElement && this.shortWeekLabel) {
      this.weekLabelsElement.setAttribute('short-name', '');
    }
  }

  protected getWeekDaysTemplate(day: number, index: number, today: number): TemplateResult {
    // this._log('getCalendarWeekTemplate');

    const notForThisMonth = ((index === 0 && day > 7) || (index > 2 && day < 15));
    const selected = this.selectedDayList.includes(day);
    // const edge = selected && props.selectedDate.length > 1;
    return html`
      <div
        class="calendar-day${(notForThisMonth ? ' fade' : selected ? ' selected-day' : (this.highlightToday && today === day) ? ' current-date-highlight' : '')}"
        @click="${() => this.onDayClick(day)}"
      >
      <div class="calendar-day-data">
        ${this.onlyShowCurrentMonthDays && notForThisMonth ? '' : day}
      </div>
    </div>
    `;
  }

  // TODO: Complete this method
  protected onDayClick(day: number) {
    this._log('onDayClick');
    let date = [this.calendarOnScreenDate[0], this.calendarOnScreenDate[1], day];
    if (this.rangeSelect && this.selectedDateList.length === 1) {
      this.selectedDateList = this.sortRangeSelectedDates([...this.selectedDateList, date]);
    } else {
      this.selectedDateList = [date];
    }
    this.selectedDayList = this.calculateSelectedDayList();
    // TODO:
    // call onDateChange callback (user must provide) and pass the date
  }

  protected sortRangeSelectedDates(selectedDates: number[][] | undefined): number[][] {
    if (!selectedDates) return [];
    this._log('sortRangeSelectedDates');

    const startDate = Date.parse(selectedDates[0].toString());
    const endDate = Date.parse(selectedDates[1].toString());

    return startDate > endDate ? [selectedDates[1], selectedDates[0]] : selectedDates;
  };

  protected calculateIfTodayExist(): boolean {
    this._log('calculateIfTodayExist');

    return (this.calendarInitDate[0] === this.calendarOnScreenDate[0] &&
      this.calendarInitDate[1] === this.calendarOnScreenDate[1]);
  }

  protected calculateSelectedDayList() {
    this._log('calculateSelectedDayList');

    let days: Array<number> = [];
    let [onScreenYear, onScreenMonth]: Array<number> = this.calendarOnScreenDate;

    this.selectedDateList.forEach(([selectedDateYear, selectedDateMonth, selectedDateDay]: Array<number>) => {
      if (selectedDateYear === onScreenYear &&
        selectedDateMonth === onScreenMonth)
        days.push(selectedDateDay);
    });

    return days;
  };

  protected calculateCalendar(): number[][] {
    this._log('calculateCalendar');

    const newDate = this.convertToGregorian(this.calendarOnScreenDate[0], this.calendarOnScreenDate[1], 1);
    let date = new Date(newDate[0], newDate[1] - 1, newDate[2]);

    const currentMonthDaysCount = this.monthsDaysCount[this.calendarOnScreenDate[1] - 1] + (
          this.calendarOnScreenDate[1] - 1 === this.leapMonthIndex
          ? this.leapYearCalculation(this.calendarOnScreenDate[0])
          : 0
        );

    let tempYear = this.calendarOnScreenDate[0];
    let previousMonthIndex: number = this.calendarOnScreenDate[1] - 2;
    if (previousMonthIndex <= 0) {
      tempYear--;
      if (tempYear < this.minDateArray[0]) {
        tempYear = this.minDateArray[0];
      }
      previousMonthIndex = 11;
    }
    const previousMonthDaysCount = this.monthsDaysCount[previousMonthIndex] + (previousMonthIndex === this.leapMonthIndex ? this.leapYearCalculation(tempYear) : 0);


    const startWeekAtIndex = date.getDay();
    // We need to find index of day in the jalali week days
    let startWeekAtIndexInJalali = startWeekAtIndex + 1;
    if (startWeekAtIndexInJalali > 6) {
      startWeekAtIndexInJalali = 0;
    }

    const totalCells = currentMonthDaysCount + startWeekAtIndexInJalali;
    const calendar: Array<number[]> = [];
    let week = Array.from({ length: startWeekAtIndexInJalali }, (_v, k) => (previousMonthDaysCount - startWeekAtIndexInJalali) + k + 1);

    for (let i = startWeekAtIndexInJalali + 1; calendar.length < 6; ++i) {
      const day = i > totalCells ? i - totalCells : i - startWeekAtIndexInJalali;
      if (i % 7 === 0) {
        week.push(day);
        calendar.push(week);
        week = [];
        if ((this.onlyShowCurrentMonthDays || this.hideLastFadedRow) && 7 * calendar.length >= totalCells) break;
        continue;
      }
      week.push(day);
    }

    this.headerElementTitle = `${this.monthList[this.calendarOnScreenDate[1] - 1]?.name} ${this.calendarOnScreenDate[0]}`;

    return calendar;
  }

  private convertToGregorian(year: number, month: number, day: number): number[] {
    this._log('convertToGregorian');

    let gregorianYear;
    if (year > 979) {
      gregorianYear = 1600;
      year -= 979;
    } else {
      gregorianYear = 621;
    }

    let days = (365 * year) +
      (Math.floor(year / 33) * 8) +
      (((year % 33) + 3) / 4) +
      78 +
      day +
      (((month < 7) ? (month - 1) * 31 : (((month - 7) * 30) + 186)));

    gregorianYear += 400 * (Math.floor(days / 146097));

    days %= 146097;
    if (Math.floor(days) > 36524) {
      gregorianYear += 100 * (Math.floor(--days / 36524));
      days %= 36524;
      if (days >= 365) days++;
    }
    gregorianYear += 4 * (Math.floor(days / 1461));
    days %= 1461;
    gregorianYear += Math.floor((days - 1) / 365);

    if (days > 365) days = (days - 1) % 365;
    let gregorianDay = Math.floor(days + 1);
    let montDays = [
      0,
      31,
      (((gregorianYear % 4 === 0) && (gregorianYear % 100 !== 0)) || (gregorianYear % 400 === 0)) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ];

    let index = 0;
    for (; index <= 12; index++) {
      if (gregorianDay <= montDays[index]) break;
      gregorianDay -= montDays[index];
    }

    return [gregorianYear, index, gregorianDay];
  }

  protected leapYearCalculation(year: number): number {
    this._log('Persian-calendar: leapYearCalculation');
    return [1, 5, 9, 13, 17, 22, 26, 30].indexOf(year % 33) > -1 ? 1 : 0;
  }

  renderPrevMonth() {
    this._log('renderPrevMonth');

    if (this.calendarOnScreenDate[1] - 1 === 0) {
      if (this.calendarOnScreenDate[0] - 1 > this.minDateArray[0]) {
        this.calendarOnScreenDate = [this.calendarOnScreenDate[0] - 1, 12, 1];
      }
      else {
        this.calendarOnScreenDate = this.minDateArray;
      }
    }
    else {
      --this.calendarOnScreenDate[1];
    }

    this.calculateCalendarWeekList();
  }

  renderNextMonth() {
    this._log('renderNextMonth');

    if (this.calendarOnScreenDate[1] + 1 > 12) {
      if (this.calendarOnScreenDate[0] + 1 < this.maxDateArray[0]) {
        this.calendarOnScreenDate = [this.calendarOnScreenDate[0] + 1, 1, 1];
      }
      else {
        this.calendarOnScreenDate = this.maxDateArray;
      }
    }
    else {
      ++this.calendarOnScreenDate[1];
    }

    this.calculateCalendarWeekList();
  }

  calculateCalendarWeekList() {
    this._log('calculateCalendarWeekList');
    this.calendarWeekList = this.calculateCalendar();
    this.requestUpdate();
  }

  private onMonthChangedTo(event: CustomEvent) {
    this._log('onMonthChangedTo');

    this.calendarOnScreenDate[1] = event.detail;
    this.activeView = 'calendar';
    this.calculateCalendarWeekList();
  }
}
