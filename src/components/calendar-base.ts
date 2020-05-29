/**
 * This class is based on gregorian, then you can write your calendar with your data.
 * For example you can write persian calendar with your persian data (days label, months label & etc...)
*/

import { property } from 'lit-element';

import { BaseElement } from '../base-element';

import { MonthInterface } from '../data/jalali';

export default abstract class CalendarBaseElement extends BaseElement {
  @property({ type: String, attribute: 'date' })
  initDate: string | undefined;

  @property({ type: String, attribute: 'min-date' })
  protected minDate: string | undefined;

  @property({ type: String, attribute: 'max-date' })
  protected maxDate: string | undefined;

  @property({ type: Array })
  selectedDateList: number[][] = [];

  @property({ type: String })
  onScreenDate: string | undefined;

  @property({ type: Boolean })
  shortWeekLabel: boolean = true;

  @property({ type: Boolean })
  rangeSelect: boolean = false;

  @property({ type: Boolean })
  onlyShowCurrentMonthDays: boolean = false;

  @property({ type: Boolean })
  hideLastFadedRow: boolean = false;

  @property({ type: Boolean })
  highlightToday: boolean = true;

  @property({ type: Array })
  monthsDaysCount: number[] = [];

  @property({ type: Array })
  monthList: MonthInterface[] = [];

  protected minDateArray: number[] = [];
  protected maxDateArray: number[] = [];

  protected shouldUpdate(): boolean {
    if (
      !(
        this.initDate &&
        (this.initDate.split('-')).length === 3 &&
        this.minDate &&
        (this.minDate.split('-')).length === 3 &&
        this.maxDate &&
        (this.maxDate.split('-')).length === 3
      )
    ) {
      return false;
    }
    return true;
  }

  protected abstract calculateCalendar(): {};
  protected abstract leapYearCalculation(param?: unknown): {};
}
