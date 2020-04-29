import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from './base-element';
import { baseStyle } from './base-style';
import { arrowBackward, arrowForward } from './icon';

@customElement('header-ma')
export class HeaderMa extends BaseElement {
  @property({ type: String })
  title: string = '';

  static styles = [baseStyle, css`
   :host {
      display: flex;
      flex-flow: row nowrap;
      padding: 16px;
      align-items: center;
      /* background-color: #A0144F23; */
   }

   p {
      font-weight: 500;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.87);
      align-self: stretch;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin: 0 8px;
    }

    [hidden] {
      display: none;
    }
  `];

  protected render(): TemplateResult {
    this._log('render');

    return html`
      <!-- FIXME: hidden conditions -->
      <div className="previous" ?hidden="${}" @click="${() => { this._fire('header-backward-clicked', undefined); }}">
        ${arrowBackward}
      </div>
      <p onClick={props.nextView}>${this.title}</p>
      <div className="next" ?hidden="${}" @click="${() => { this._fire('header-forward-clicked', undefined); }}">
        ${arrowForward}
      </div>
    `;
  }
}
