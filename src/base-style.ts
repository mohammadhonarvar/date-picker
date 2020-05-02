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

  .date-picker .header .calendar-icon {
    fill: rgba(0, 0, 0, 0.38);
  }

  .date-picker .week-labels-row,
  .date-picker .calendar-row {
    display: flex;
    padding: 0 8px;
    margin: 6px 0;
  }

  .date-picker .week-labels-row {
    margin-bottom: 8px;

    font-weight: 500;
    font-size: 0.85em;
    cursor: default;
    color: rgba(0, 0, 0, 0.38);
  }

  .date-picker .calendar-row .in-range-day {
    background: #A0144F23;
    border-radius: 0;
  }

  .date-picker .calendar-row .in-range-day,
  .date-picker .calendar-day-data[data-range-edge="true"],
  .date-picker .calendar-day-data[data-start-range-edge] {
    transition: ease-in 0.15s;
  }

  .date-picker .calendar-day-data[data-range-edge="true"] {
    border-radius: 0 50% 50% 0;
    background: #A0144F23;
  }

  .date-picker .calendar-day-data[data-start-range-edge] {
    border-radius: 50% 0 0 50%;
  }

  .date-picker .actions {
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 0 8px 16px;
  }

  .date-picker .next,
  .date-picker .previous {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    fill: #A0144F;
    cursor: pointer;
    padding: 6px;
    background-color: #A0144F23;
  }

  .date-picker .pick-date-button {
    flex: 3;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.87);
    background-color: #8F7FCE;
    text-align: center;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    margin: 0 8px;
  }

  .date-picker .pick-date-button:active {
    opacity: 0.8;
    transition: ease-in 0.15s;
  }

  .date-picker .calendar-row .fade {
    color: rgba(0, 0, 0, 0.38);
  }

  .views-container {
    padding: 0 8px 16px;
  }

  .date-picker .views {
    position: relative;
  }

  .date-picker .view {
    width: 100%;
    transition: ease-out 0.25s;
    position: relative;
  }

  .date-picker .hide-view {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transform: translate3d(-25px, 0, 0);
    /* transform: scale(0.85); */
  }

  .date-picker .years-view,
  .date-picker .months-view {
    display: flex;
    flex-flow: row wrap;
  }

  .date-picker .decades-view {
    display: flex;
    flex-flow: column nowrap;
  }

  .date-picker .decades-view .decade-button,
  .date-picker .years-view .year-button,
  .date-picker .months-view .month-button {
    width: calc(33.33333% - 40px);
    text-align: center;
    border-radius: 6px;
    padding: 10px 16px;
    color: rgba(0, 0, 0, 0.28);
    font-weight: 500;
    margin: 4px;
  }

  .date-picker .months-view .month-button,
  .date-picker .decades-view .enabled-decade,
  .date-picker .years-view .enabled-year {
    color: rgba(0, 0, 0, 0.60);
    cursor: pointer;
  }

  .date-picker .decades-view .decade-button {
    width: calc(100% - 40px);
  }

  .date-picker .enabled-decade:hover,
  .date-picker .enabled-year:hover,
  .date-picker .month-button:hover {
    background-color: #A0144F23;
    color: rgba(0, 0, 0, 0.60);
  }

  .date-picker .decades-view .active-decade,
  .date-picker .years-view .active-year,
  .date-picker .months-view .active-month {
    background-color: #A0144F;
    color: rgba(255, 255, 255, 0.87);
  }


  .date-picker .today,
  .date-picker .selected-date {
    cursor: pointer;
    font-weight: 500;
    background-color: #A0144F;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 8px;
    text-align: center;
    padding: 12px;
    margin: 0 8px 8px;
  }

  .date-picker .today {
    background-color: #A0144F23;
    color: #A0144F;
  }

  .clock-view {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    /* background: #eaeaea;
    border-radius: 10px; */
  }

  .clock-view .clock {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background: #efefef;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    border: 3px solid #ffffff;
    margin: 24px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .clock-view .pointer {
    position: absolute;
    transform-origin: 0;
    border-radius: 4px;
    background: #9a9a9e;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.65s;
  }

  .clock-view .hour {
    width: 42px;
    height: 4px;
    transform: translate(50%) rotate(0deg);
  }

  .clock-view .minute {
    width: 48px;
    height: 3px;
    transform: translate(50%) rotate(130deg);
  }

  .clock-view .second {
    background: #fa7777;
    width: 56px;
    height: 2px;
    transform: translate(50%) rotate(90deg);
  }

  .clock-view .center-dot {
    background: #ffffff;
    border: 4px solid #9a9a9e;
    border-radius: 50%;
    width: 3px;
    height: 3px;
    z-index: 2;
  }

  .clock-view .clock-input-container {
    color: rgba(0, 0, 0, 0.38);
    margin: 24px auto;
    display: flex;
  }

  .clock-view .clock-input-container input {
    outline: none;
    width: 42px;
    height: 42px;
    background-color: #efefef;
    border: none;
    margin: 0 8px;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
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

export const calendarBaseStyle = css`
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
    color: #A0144F;
    background-color: #A0144F23;
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
`;
