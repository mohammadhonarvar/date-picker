import { html, customElement, TemplateResult, property, css } from 'lit-element';

import { BaseElement } from '../base-element';

@customElement('decade-list')
export class DecadeList extends BaseElement {
  @property({ type: Number })
  currentYear: number | undefined;

  @property({ type: Number })
  minYear: number | undefined;

  @property({ type: Number })
  maxYear: number | undefined;

  decadeList: number[][] = [];
  activeDecade: number[] = [];

  static styles = css`
    :host {
      display: flex;
      flex-flow: row wrap;
    }

    .decade-button {
      width: calc(100% - 40px);
      text-align: center;
      border-radius: 6px;
      padding: 10px 16px;
      font-weight: 500;
      margin: 4px;
      color: rgba(0, 0, 0, 0.60);
      cursor: pointer;
    }

    .decade-button:hover {
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
    if (
      !(
        this.currentYear &&
        this.minYear &&
        this.maxYear
      )
    ) {
      return false;
    }

    return true;
  }

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('update');

    if (changedProperties.has('minYear') || changedProperties.has('maxYear')) {
      this.createDedcadeList(this.minYear as number, this.maxYear as number);
    }

    super.update(changedProperties);
  }

  protected render(): TemplateResult {
    this._log('render');

    const year = this.currentYear as number;
    const decadeStart = year - year % 10;
    let targeIndex = this.decadeList.findIndex(item => item[0] === decadeStart);
    // It will happen when the user select the maxYear
    if (targeIndex === -1) {
      targeIndex = this.decadeList.findIndex(item => item[1] === decadeStart);
    }
    this.activeDecade = this.decadeList[targeIndex];

    if (targeIndex === 0) {
      return html`
        ${(this.decadeList as number[][]).slice(0, 3).map(decade => {
          return html`
            <div
              class="decade-button"
              ?active="${decade[0] === decadeStart}"
              @click="${() => { this._fire('decade-changed-to', decade); }}"
            >
              <div>${decade[0]}-${decade[1]}</div>
            </div>
            `
          })
        }`;
    }

    if (targeIndex === this.decadeList.length - 1) {
      return html`
        ${(this.decadeList as number[][]).slice(this.decadeList.length - 3).map(decade => {
          return html`
            <div
              class="decade-button"
              ?active="${decade[0] === decadeStart || decade[1] === this.maxYear}"
              @click="${() => { this._fire('decade-changed-to', decade); }}"
            >
              <div>${decade[0]}-${decade[1]}</div>
            </div>
            `
          })
        }`;
    }

    return html`
      ${(this.decadeList as number[][]).slice(targeIndex - 1, targeIndex + 2).map(decade => {
        return html`
          <div
            class="decade-button"
            ?active="${decade[0] === decadeStart}"
            @click="${() => { this._fire('decade-changed-to', decade); }}"
          >
            <div>${decade[0]}-${decade[1]}</div>
          </div>
          `
        })
      }`;
  }

  protected updated() {
    this._log('updated');
    this._fire('decade-changed', this.activeDecade);
  }

  private onCurrentYearChanged(event: Event | CustomEvent) {
    this._log('onCurrentYearChanged');

    event.stopPropagation();
    if (!event['detail']) return;
    const _event = event as CustomEvent;
    this.currentYear = _event.detail;
  }

  private createDedcadeList(minYear: number, maxYear: number) {
    this._log('createDedcadeList');

    if (minYear + 9 > maxYear) {
      this.decadeList.push([minYear, maxYear]);
      return;
    }

    this.decadeList.push([minYear, minYear + 9]);

    const decadeCount = Math.floor((maxYear - minYear) / 10);
    if (decadeCount === 1) {
      this.decadeList[1] = [this.decadeList[0][0] + 1, maxYear];
      return;
    }

    for (let i = 1; i < decadeCount; i++) {
      const startCurrentDedcade = this.decadeList[i - 1][1] + 1;
      const dedcade = [
        startCurrentDedcade,
        startCurrentDedcade + 9
      ];
      this.decadeList.push(dedcade);
    }

    const lastDecade = this.decadeList[this.decadeList.length - 1];
    if (lastDecade[1] - lastDecade[0] === 0) {
      this.decadeList.splice(this.decadeList.length - 1, 1);
    }

    this.decadeList[this.decadeList.length - 1][1] = maxYear;

  }
}
