import { html, customElement, TemplateResult, property, css } from 'lit-element';

import { BaseElement } from '../base-element';

@customElement('dedcade-list')
export class DedcadeList extends BaseElement {
  @property({ type: Number })
  currentYear: number | undefined;

  @property({ type: Number })
  minYear: number | undefined;

  @property({ type: Number })
  maxYear: number | undefined;

  dedcadeList: number[][] = [];

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
    const dedcadeStart = year - year % 10;

    return html`
      ${(this.dedcadeList as number[][]).map(dedcade => {
        return html`
          <div
            class="year-button"
            ?active="${dedcade[0] === dedcadeStart}"
            @click="${() => { this._fire('dedcade-changed-to', dedcade); }}"
          >
            <div>${dedcade[0]}-${dedcade[1]}</div>
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
    this.currentYear = _event.detail;
  }

  private createDedcadeList(minYear: number, maxYear: number) {
    this._log('createDedcadeList');

    this.dedcadeList.push([minYear, minYear + 9]);

    const dedcadeCount = (maxYear - minYear) / 10;
    for (let i = 1; i < dedcadeCount - 1; i++) {
      const startCurrentDedcade = this.dedcadeList[i - 1][1] + 1;
      const dedcade = [
        startCurrentDedcade,
        startCurrentDedcade + 9
      ];
      this.dedcadeList.push(dedcade);
    }

    this.dedcadeList[this.dedcadeList.length - 1][1] = maxYear;
  }
}
