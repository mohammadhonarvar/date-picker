import { css } from "lit-element";
// import { appConfig } from './config';

export const baseStyle = css`
  body {
    margin: 0;
    /* background-color: #A282D4; */
    /* background-color: #78BB7B; */
    background-color: #A0144F;
    font-family: "open Sans", "Tahoma";
  }

  p {
    margin: 0;
  }

  .app {
    margin: 100px auto;
    width: 320px;
  }


`;

export const calendarBaseStyle = css`
  :host {
    --primary-color: #A0144F;
    --primary-background-color:  #A0144F23;

    --primary-day-highlight-color: #c3c3c3;
    --primary-selected-day-color: rgba(255, 255, 255, 0.87);
    --primary-day-box-color: #c3c3c3;
  }

  .views-container {
    padding: 0 8px 16px;
    position: relative;
  }

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

  .calendar-view {
    display: block;
  }

  .calendar-row {
    display: flex;
    padding: 0 8px;
    margin: 6px 0;
  }

  .calendar-row .calendar-day {
    /* background-color: tomato; */
    /* margin: 2px; */
    font-weight: 500;
    flex: 1 0 auto;
    position: relative;
  }

  .calendar-row .calendar-day::after {
    content: "";
    float:left;
    display: block;
    padding-top: 100%;
  }

  .calendar-row .calendar-day {
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    border-radius: 50%;
  }

  .calendar-row .current-date-highlight {
    color: var(--primary-color);
    background-color: var(--primary-background-color);
  }

  .calendar-row .selected-day {
    background: #A0144F;
    color: rgba(255, 255, 255, 0.87);
  }

  .calendar-row .in-range-day {
    background: #A0144F23;
    border-radius: 0;
  }

  .calendar-day-data {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-row .in-range-day,
  .calendar-day-data[data-range-edge="true"],
  .calendar-day-data[data-start-range-edge] {
    transition: ease-in 0.15s;
  }

  .calendar-row .fade {
    color: rgba(0, 0, 0, 0.38);
  }

  .goto-time-view {
    height: 42px;
    border-radius: 8px;
    background: #FFFFFF;
    margin-top: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: rgba(0, 0, 0, 0.60);
  }
`;
