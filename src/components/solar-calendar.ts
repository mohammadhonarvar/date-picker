/**
 * This class is based on gregorian, then you can write your calendar with your data.
 * For example you can write persian calendar with your persian data (days label, months label & etc...)
*/

import { customElement, query, TemplateResult, html, css } from 'lit-element';

import CalendarBaseElement from './calendar-base';
import { calendarBaseStyle } from '../base-style';
import './month-list';
import { YearList } from './year-list';
import './year-list';
import { DecadeList } from './decade-list';
import './decade-list';
import { HeaderElement } from './header';
import './header';

import { convertStringToNumberArray } from '../utils/convert-string-to-number-array';
import './week-labels';

// This class is based on gregorian, then we can use the following:
import { weekDayList, monthsDaysCount, monthList } from '../data/solar';

@customElement('solar-calendar-element')
export class SolarCalendarElement extends CalendarBaseElement {
  @query('week-labels')
  weekLabelsElement!: HTMLElement;

  @query('header-element')
  headerElement: HeaderElement | undefined;

  @query('year-list')
  yearListElement: YearList | undefined;

  @query('decade-list')
  decadeListElement: DecadeList | undefined;

  protected calendarInitDate: number[] = [];
  protected calendarOnScreenDate: number[] = [];
  protected selectedDayList: number[] = [];
  protected calendarWeekList: number[][] = [];
  protected leapMonthIndex: number = 11;
  protected weekDayList = weekDayList;

  private minDateGregorianArray: number[];
  private maxDateGregorianArray: number[];

  static styles = [calendarBaseStyle, css``];

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
    this._log('update');

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
      const initDateGregorianArray = this.convertToGregorian(initDateArray[0], initDateArray[1], initDateArray[2]);
      if (new Date(`${initDateGregorianArray[0]}-${initDateGregorianArray[1]}-${initDateGregorianArray[2]}`).getTime() > new Date(`${this.maxDateGregorianArray[0]}-${this.maxDateGregorianArray[1]}-${this.maxDateGregorianArray[2]}`).getTime()) {
        this.initDate = this.maxDate as string;
      }

      if (new Date(`${initDateGregorianArray[0]}-${initDateGregorianArray[1]}-${initDateGregorianArray[2]}`).getTime() < new Date(`${this.minDateGregorianArray[0]}-${this.minDateGregorianArray[1]}-${this.minDateGregorianArray[2]}`).getTime()) {
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
      ${['calendar', 'monthList', 'yearList', 'decadeList'].includes(this.activeView)
        ?
        html`
          <header-element
            @prev-month="${this.renderPrevMonth}"
            @next-month="${this.renderNextMonth}"
            @prev-year="${this.prevYear}"
            @next-year="${this.nextYear}"
            @prev-decade="${this.prevDecade}"
            @next-decade="${this.nextDecade}"
            @show-month-list="${() => { this.activeView = 'monthList' }}"
            @show-year-list="${() => { this.activeView = 'yearList' }}"
            @show-decade-list="${() => { this.activeView = 'decadeList' }}"
            debug
          >
          </header-element>`
        : ''
      }
      <div class="views-container">
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
        <year-list
          class="view"
          ?hidden="${this.activeView !== 'yearList'}"
          .currentYear="${this.calendarOnScreenDate[0]}"
          .minYear="${this.minDateArray[0]}"
          .maxYear="${this.maxDateArray[0]}"
          @year-changed-to="${this.onYearChangedTo}"
          debug
        >
        </year-list>
        <decade-list
          class="view"
          ?hidden="${this.activeView !== 'decadeList'}"
          .currentYear="${this.calendarOnScreenDate[0]}"
          .minYear="${this.minDateArray[0]}"
          .maxYear="${this.maxDateArray[0]}"
          @decade-changed-to="${this.onDedcadeChangedTo}"
          @decade-changed="${this.decadeChanged}"
          debug
        >
        </year-list>
      </div>
    `;
  }

  protected firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(changedProperties);
    this._log('firstUpdated');

    this._fire('current-month-changed', this.calendarOnScreenDate[1], true);
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('updated');

    if (changedProperties.has('activeView')) {
      this.handleHeaderTitle();
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
    this.handleHeaderTitle();
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
    this.handleHeaderTitle();
  }

  prevYear() {
    this._log('prevYear');
    this.calendarOnScreenDate[0] = this.calendarOnScreenDate[0] - 1;
    if (this.calendarOnScreenDate[0] <= this.minDateArray[0]) {
      this.calendarOnScreenDate[0] = this.minDateArray[0];
    }
    this.calculateCalendarWeekList();
  }

  nextYear() {
    this._log('nextYear');

    this.calendarOnScreenDate[0] = this.calendarOnScreenDate[0] + 1;
    if (this.calendarOnScreenDate[0] >= this.maxDateArray[0]) {
      this.calendarOnScreenDate[0] = this.maxDateArray[0];
    }
    this.calculateCalendarWeekList();
  }

  prevDecade() {
    this._log('prevDecade');

    this.calendarOnScreenDate[0] = (this.calendarOnScreenDate[0] - this.calendarOnScreenDate[0] % 10) - 10;
    if (this.calendarOnScreenDate[0] < this.minDateArray[0]) {
      this.calendarOnScreenDate[0] = this.minDateArray[0];
      return;
    }
    this.calculateCalendarWeekList();
  }

  nextDecade() {
    this._log('nextDecade');

    this.calendarOnScreenDate[0] = (this.calendarOnScreenDate[0] - this.calendarOnScreenDate[0] % 10) + 10;
    if (this.calendarOnScreenDate[0] >= this.maxDateArray[0]) {
      this.calendarOnScreenDate[0] = this.maxDateArray[0];
      return;
    }
    this.calculateCalendarWeekList();
  }

  calculateCalendarWeekList() {
    this._log('calculateCalendarWeekList');

    this.calendarWeekList = this.calculateCalendar();
    this._fire('current-month-changed', this.calendarOnScreenDate[1], true);
    this._fire('current-year-changed', this.calendarOnScreenDate[0], true);
    this.requestUpdate();
  }

  private onMonthChangedTo(event: CustomEvent) {
    this._log('onMonthChangedTo');

    this.calendarOnScreenDate[1] = event.detail;
    this.calculateCalendarWeekList();
    this.activeView = 'calendar';
  }

  private onYearChangedTo(event: CustomEvent) {
    this._log('onYearChangedTo');

    this.calendarOnScreenDate[0] = event.detail;
    this.activeView = 'monthList';
    this.calculateCalendarWeekList();
  }

  private decadeChanged(event: CustomEvent) {
    this._log('decadeChanged');

    if ( !(this.headerElement && ['yearList', 'decadeList'].includes(this.activeView)) ) return;

    this.headerElement.title = `${event.detail[0]}-${event.detail[1]}`;
  }

  private onDedcadeChangedTo(event: CustomEvent) {
    this._log('onDedcadeChangedTo');

    this.calendarOnScreenDate[0] = event.detail[0] as number;
    if (this.yearListElement) {
      this.yearListElement.currentYear = event.detail[0] as number;
    }
    requestAnimationFrame(() => {
      this.activeView = 'yearList';
      this.calculateCalendarWeekList();
    });
  }

  private handleHeaderTitle() {
    this._log('handleHeaderTitle');

    if (!this.headerElement) return;

    switch (this.activeView) {
      case 'calendar':
        this.headerElement.calendarActiveView = this.activeView;
        this.headerElement.title = `${this.monthList[this.calendarOnScreenDate[1] - 1]?.name} ${this.calendarOnScreenDate[0]}`;
        break;

      case 'monthList':
        this.headerElement.calendarActiveView = this.activeView;
        this.headerElement.title = this.calendarOnScreenDate[0] + '';
        break;

      case 'yearList':
      case 'decadeList':
        this.headerElement.calendarActiveView = this.activeView;
        if (this.decadeListElement) {
          this.headerElement.title = `${this.decadeListElement.activeDecade[0]}-${this.decadeListElement.activeDecade[1]}`;
        }
        break;

      default:
        this._warn('Invalid view');
        break;
    }
  }
}
