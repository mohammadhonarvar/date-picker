import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from '../base-element';
import { arrowBackward, arrowForward } from '../utils/icon';

@customElement('header-element')
export class HeaderElement extends BaseElement {

  @property({ type: String })
  title: string = '';

  @property({ type: Boolean })
  disableNavigation: Boolean = false;

  // FIX THEME & CSS VARs
  static styles = css`
   :host {
      display: flex;
      flex-flow: row nowrap;
      padding: 16px;
      align-items: center;
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

    .next,
    .previous {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      fill: #A0144F;
      cursor: pointer;
      padding: 6px;
      background-color: #A0144F23;
    }

    [hidden] {
      display: none;
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="previous" ?hidden="${this.disableNavigation}"  @click="${() => { this._fire('header-backward-clicked', undefined); }}">
        ${arrowBackward}
      </div>
      <p @click=${() => { console.log('Go to next view') }}>${this.title}</p>
      <div class="next" ?hidden="${this.disableNavigation}"  @click="${() => { this._fire('header-forward-clicked', undefined); }}">
        ${arrowForward}
      </div>
    `;
  }
}
