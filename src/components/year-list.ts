import { html, customElement, TemplateResult, property, css } from 'lit-element';

import { BaseElement } from '../base-element';

@customElement('year-list')
export class YearList extends BaseElement {
  @property({ type: Number })
  currentYear: number | undefined;

  @property({ type: Number })
  activeYear: number | undefined;

  private yearList: number[] | undefined;

  static styles = css`
    :host {
      display: flex;
      flex-flow: row wrap;
    }

    .year-button {
      width: calc(33.33333% - 40px);
      text-align: center;
      border-radius: 6px;
      padding: 10px 16px;
      font-weight: 500;
      margin: 4px;
      color: rgba(0, 0, 0, 0.60);
      cursor: pointer;
    }

    .year-button:hover {
      background-color: #A0144F23;
      color: rgba(0, 0, 0, 0.60);
    }

    [active] {
      background-color: #A0144F;
      color: rgba(255, 255, 255, 0.87);
    }
  `;

  disconnectedCallback() {
    document.removeEventListener('current-year-changed', this.onCurrentYearChanged.bind(this));
    super.disconnectedCallback();
  }

  constructor() {
    super();
    document.addEventListener('current-year-changed', this.onCurrentYearChanged.bind(this));
  }

  protected shouldUpdate(): boolean {
    this._log('shouldUpdate');
    return this.currentYear ? true : false;
  }

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('update');

    if (changedProperties.has('currentYear')) {
      const year = this.currentYear as number;
      this.activeYear = year;
      const dedcade = year - year % 10;
      this.yearList = Array.from({ length: 10 }, (_item, index) => dedcade + index);
    }

    super.update(changedProperties);
  }

  protected render(): TemplateResult {
    this._log('render');

    return html`
      ${(this.yearList as number[]).map(year => {
        return html`
          <div
            class="year-button"
            ?active="${this.activeYear === year}"
            @click="${() => { this.activeYear = year; this._fire('year-changed-to', year); }}"
          >
            <div>${year}</div>
          </div>
        `
      })
    }`;
  }

  private onCurrentYearChanged(event: Event | CustomEvent) {
    this._log('onCurrentYearChanged');

    event.stopPropagation();
    if (!event['detail']) return;
    const _event = event as CustomEvent;
    this.activeYear = _event.detail;
  }
}
