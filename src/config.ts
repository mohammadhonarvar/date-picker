import { css } from "lit-element";

// This is the base dimensions(for example, if we need it)
export const appConfig = {
  // UI
  maxWith: 768, //px
  mainImageHeight: 430, //px
  mainImageMargin: 60, //px
  iconSize: 28, //px
  iconButtonSize: 56, //px
};

// This is the base theme & shared styles(for example)
export const styleConfig = css`
  :host {
    --app-primary-color: #3277b9;
    /* --app-accent-color: #cf7a59; */
    --app-accent-color: #f57c00;
    --app-primary-text-color: #ffffff;
    --app-light-back-color: #eeeeee;
    --app-dark-background-color: #102f4b;

    --mdc-typography-font-family: "Iran Sans", "Roboto", "Tahoma", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --mdc-theme-primary: var(--app-primary-color);
    --mdc-theme-secondary: var(--app-accent-color);
    --mdc-theme-on-primary: var(--app-primary-text-color);
    --mdc-theme-text-primary-on-dark: var(--app-primary-text-color);
    --mdc-icon-size: ${appConfig.iconSize}px;
    --mdc-icon-button-size: ${appConfig.iconButtonSize}px;
  }
`;
