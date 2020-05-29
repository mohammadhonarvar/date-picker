import { html, customElement, TemplateResult, property, query } from 'lit-element';

import CalendarBaseElement from './calendar-base';
import { calendarBaseStyle } from '../base-style';
import { convertStringToNumberArray } from '../utils/convert-string-to-number-array';
import './week-labels';

// This class is based on gregorian, then we can use the following:
import { weekDayList, monthsDaysCount, monthList } from '../data/gregorian';

interface MonthInterface {
  name: string;
  shortName: string;
  code: number;
}

@customElement('gregorian-calendar-element')
export class GregorianCalendarElement extends CalendarBaseElement {
  @property({ type: Array })
  monthList: MonthInterface[] = monthList;

  @query('week-labels')
  weekLabelsElement!: HTMLElement;

  protected calendarInitDate: number[] = [];
  protected calendarOnScreenDate: number[] = [];
  protected selectedDayList: number[] = [];
  protected calendarWeekList: number[][] = [];
  protected leapMonthIndex: number = 1;
  protected weekDayList = weekDayList;

  static styles = calendarBaseStyle;

  constructor() {
    super();

    this.minDate = '1900-1-1';
    this.maxDate = '2200-1-1';
    // Get date with 'yyyy-mm-dd' format by some tricks!!!
    this.initDate = new Date().toISOString().split('T')[0];

    this.minDateArray = convertStringToNumberArray(this.minDate, '-');
    this.maxDateArray = convertStringToNumberArray(this.maxDate, '-');

    this.monthList = monthList;
    this.monthsDaysCount = monthsDaysCount;
  }

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('update');

    // Prevent re-rendering when shortWeekLabel is changed
    if (changedProperties.has('shortWeekLabel') && !this.shortWeekLabel) {
      if (this.weekLabelsElement) {
        this.weekLabelsElement.removeAttribute('short-name');
        return;
      }
    }

    // Create array of initDate when it's changed
    if (changedProperties.has('initDate')) {
      if (new Date(this.initDate as string).getTime() > new Date(`${this.maxDateArray[0]}-${this.maxDateArray[1]}-${this.maxDateArray[2]}`).getTime()) {
        this.initDate = this.maxDate as string;
      }

      if (new Date(this.initDate as string).getTime() < new Date(`${this.minDateArray[0]}-${this.minDateArray[1]}-${this.minDateArray[2]}`).getTime()) {
        this.initDate = this.minDate as string;
      }

      this._log('update: %o', this.initDate);
      this.onScreenDate = this.initDate;

      const initDateArray = convertStringToNumberArray(this.initDate as string, '-');
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
      <!-- Remove::start -->
      <!-- this div is here just to prove MHF something :D -->
      <!-- <div @click="">Change Screen Date</div> -->
      <!-- Remove::end -->
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
    `;
  }

  protected updated() {
    this._log('updated');

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

  protected calculateIfTodayExist(): boolean {
    this._log('calculateIfTodayExist');

    return (this.calendarInitDate[0] === this.calendarOnScreenDate[0] &&
      this.calendarInitDate[1] === this.calendarOnScreenDate[1]);
  }

  protected leapYearCalculation(year: number): number {
    this._log('leapYearCalculation');

    let isLeap: number = 0;
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      isLeap = 1;
    }
    return isLeap;
  };

  protected calculateCalendar(): number[][] {
    this._log('calculateCalendar');

    let date = new Date(`${this.calendarOnScreenDate[0]}-${this.calendarOnScreenDate[1]}-1`);

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
    this._log('startWeekAtIndex: %s', startWeekAtIndex);
    // console.log(startWeekAtIndex);

    let totalCells = currentMonthDaysCount + startWeekAtIndex;
    // this._log('totalCells: %s', totalCells);

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

    const headerTitle = `${this.monthList[this.calendarOnScreenDate[1] - 1]?.name} ${this.calendarOnScreenDate[0]}`;
    this._fire('date-changed', headerTitle, true);

    return calendar;
  }

  protected sortRangeSelectedDates(selectedDates: number[][] | undefined): number[][] {
    if (!selectedDates) return [];
    this._log('sortRangeSelectedDates');

    const startDate = Date.parse(selectedDates[0].toString());
    const endDate = Date.parse(selectedDates[1].toString());

    return startDate > endDate ? [selectedDates[1], selectedDates[0]] : selectedDates;
  };

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

    this.calendarWeekList = this.calculateCalendar();
    this.requestUpdate();
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

    this.calendarWeekList = this.calculateCalendar();
    this.requestUpdate();
  }
}
