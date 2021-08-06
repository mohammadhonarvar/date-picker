define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.__asyncDelegator=__asyncDelegator;_exports.__asyncGenerator=__asyncGenerator;_exports.__asyncValues=__asyncValues;_exports.__await=__await;_exports.__awaiter=__awaiter;_exports.__classPrivateFieldGet=__classPrivateFieldGet;_exports.__classPrivateFieldSet=__classPrivateFieldSet;_exports.__createBinding=__createBinding;_exports.__decorate=__decorate;_exports.__exportStar=__exportStar;_exports.__extends=__extends;_exports.__generator=__generator;_exports.__importDefault=__importDefault;_exports.__importStar=__importStar;_exports.__makeTemplateObject=__makeTemplateObject;_exports.__metadata=__metadata;_exports.__param=__param;_exports.__read=__read;_exports.__rest=__rest;_exports.__spread=__spread;_exports.__spreadArrays=__spreadArrays;_exports.__values=__values;_exports.eventOptions$1=_exports.eventOptions=eventOptions;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.internalProperty$1=_exports.internalProperty=internalProperty;_exports.property$1=_exports.property=property;_exports.query$1=_exports.query=query;_exports.queryAll$1=_exports.queryAll=queryAll;_exports.queryAssignedNodes$1=_exports.queryAssignedNodes=queryAssignedNodes;_exports.queryAsync$1=_exports.queryAsync=queryAsync;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.defaultTemplateProcessor=_exports.defaultConverter$1=_exports.defaultConverter=_exports.customElement$1=_exports.customElement=_exports.css$1=_exports.css=_exports.createMarker$1=_exports.createMarker=_exports.convertStringToNumberArray=_exports.clock=_exports.classMap=_exports.calendarBaseStyle=_exports.calendar=_exports.boundAttributeSuffix=_exports.arrowForward=_exports.arrowBackward=_exports.addLeadingZero=_exports.__assign=_exports.YearList=_exports.WeekLabelList=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.Template$1=_exports.Template=_exports.SolarCalendarElement=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.NodePart$1=_exports.NodePart=_exports.MonthList=_exports.LitElement=_exports.HeaderElement=_exports.GregorianCalendarElement=_exports.EventPart$1=_exports.EventPart=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.DecadeList=_exports.DatePicker=_exports.ClockElement=_exports.CSSResult$1=_exports.CSSResult=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.BaseElement=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.$yearList=_exports.$weekLabels=_exports.$updatingElement=_exports.$tslibEs6=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$template=_exports.$solarCalendar=_exports.$solar=_exports.$shadyRender=_exports.$render=_exports.$parts=_exports.$part=_exports.$monthList=_exports.$modifyTemplate=_exports.$litHtml=_exports.$litElement=_exports.$ifDefined=_exports.$icon=_exports.$header=_exports.$gregorianCalendar=_exports.$gregorian=_exports.$fixPersianNumber=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$decorators=_exports.$decadeList=_exports.$datePicker=_exports.$cssTag=_exports.$convertStringToNumberArray=_exports.$clock=_exports.$classMap=_exports.$calendarBaseDefault=_exports.$calendarBase=_exports.$baseStyle=_exports.$baseElement=_exports.$addLeadingZero=void 0;_exports.weekDayList$1=_exports.weekDayList=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.templateCaches$1=_exports.templateCaches=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.shadyTemplateFactory=_exports.reparentNodes$1=_exports.reparentNodes=_exports.render$1=_exports.render$2=_exports.render=_exports.removeNodes$1=_exports.removeNodes=_exports.parts$1=_exports.parts=_exports.nothing$1=_exports.nothing=_exports.notEqual$1=_exports.notEqual=_exports.nodeMarker=_exports.noChange$1=_exports.noChange=_exports.monthsDaysCount$1=_exports.monthsDaysCount=_exports.monthList$1=_exports.monthList=_exports.markerRegex=_exports.marker=_exports.lastAttributeNameRegex=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.isPrimitive$1=_exports.isPrimitive=_exports.isIterable$1=_exports.isIterable=_exports.isDirective$1=_exports.isDirective=_exports.isCEPolyfill=_exports.ifDefined=_exports.html$2=_exports.html$1=_exports.html=_exports.fixPersianNumber=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=void 0;function _templateObject36_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n    :host {\n      display: block;\n      user-select: none;\n      overflow: hidden;\n    }\n  "]);_templateObject36_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject36_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject35_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n          <gregorian-calendar-element\n            date=\"","\"\n            ?range-picker=\"","\"\n            ?time-picker=\"","\"\n            .selectedDateList=","\n            @date-changed=","\n            @time-changed=","\n          >\n          </gregorian-calendar-element>\n        "]);_templateObject35_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject35_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject34_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n          <solar-calendar-element\n            debug\n            date=","\n            ?range-picker=\"","\"\n            ?time-picker=\"","\"\n            .selectedDateList=","\n            @date-changed=","\n            @time-changed=","\n          >\n          </solar-calendar-element>"]);_templateObject34_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject34_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject33_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      ","\n    "]);_templateObject33_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject33_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject32_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      .container {\n        background-color: rgb(var(--theme-background-color));\n        border-radius: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n      }\n\n      .calendar-row .selected-date {\n        background: rgb(var(--theme-primary-color));\n        color: rgba(var(--theme-on-primary-color), 0.87);\n      }\n\n      .calendar-row .range-edge-day {\n        background: rgb(var(--theme-primary-color));\n        color: rgba(var(--theme-on-primary-color), 0.87);\n        transition: ease-in 0.15s;\n      }\n\n      .calendar-row .range-edge-day-start {\n        border-radius: 50% 0 0 50%;\n      }\n\n      .calendar-row .range-edge-day-end {\n        border-radius: 0 50% 50% 0;\n      }\n\n      .calendar-row .in-range-date-highlight {\n        background: rgba(var(--theme-primary-color),0.09); border-radius: 0;\n      }\n    "]);_templateObject32_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject32_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject31_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      .container {\n        background-color: rgb(var(--theme-background-color));\n        border-radius: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n      }\n\n      .calendar-row .selected-date {\n        background: rgb(var(--theme-primary-color));\n        color: rgba(var(--theme-on-primary-color), 0.87);\n      }\n\n      .calendar-row .range-edge-day {\n        background: rgb(var(--theme-primary-color));\n        color: rgba(var(--theme-on-primary-color), 0.87);\n        transition: ease-in 0.15s;\n      }\n\n      .calendar-row .range-edge-day-start {\n        border-radius: 50% 0 0 50%;\n      }\n\n      .calendar-row .range-edge-day-end {\n        border-radius: 0 50% 50% 0;\n      }\n\n      .calendar-row .in-range-date-highlight {\n        background: rgba(var(--theme-primary-color),0.09); border-radius: 0;\n      }\n    "]);_templateObject31_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject31_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject30_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div\n        class=\"","\"\n        .date=\"","\"\n        @click=\"","\"\n      >\n        <div class=\"calendar-day-data\">\n          ","\n        </div>\n      </div>\n    "]);_templateObject30_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject30_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject29_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n            <div\n              class=\"goto-time-view\"\n              @click=","\n            >\n              ","\n            </div>\n          "]);_templateObject29_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject29_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject28_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n              <div class=\"calendar-row\">\n                ","\n              </div>\n            "]);_templateObject28_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject28_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject27_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <header-element\n        ?hidden=\"","\"\n        @prev-month=","\n        @next-month=","\n        @prev-year=","\n        @next-year=","\n        @prev-decade=","\n        @next-decade=","\n        @show-month-list=","\n        @show-year-list=","\n        @show-decade-list=","\n      >\n      </header-element>\n      <div class=\"views-container\">\n        <div class=\"view\" ?hidden=\"","\">\n          <week-labels .weekLabelList=","></week-labels>\n          ","\n        </div>\n        <month-list\n          class=\"view\"\n          ?hidden=\"","\"\n          .monthList=","\n          @month-changed-to=","\n        >\n        </month-list>\n        <year-list\n          class=\"view\"\n          ?hidden=\"","\"\n          .currentYear=","\n          .minYear=","\n          .maxYear=","\n          @year-changed-to=","\n        >\n        </year-list>\n        <decade-list\n          class=\"view\"\n          ?hidden=\"","\"\n          .currentYear=","\n          .minYear=","\n          .maxYear=","\n          @decade-changed-to=","\n          @decade-changed=","\n        >\n        </decade-list>\n        <clock-element debug ?hidden=\"","\">\n        </clock-element>\n      </div>\n      ","\n    "]);_templateObject27_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject27_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject26_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n    :host {\n      display: flex;\n      padding: 0 8px;\n      margin-top: 6px;\n      margin-bottom: 8px;\n      font-weight: 500;\n      font-size: 0.85em;\n      color: rgba(var(--theme-on-background-color), 0.38);\n    }\n\n    .week-day {\n      font-weight: 500;\n      flex: 1 0 auto;\n      position: relative;\n    }\n\n    .week-day::after {\n      content: \"\";\n      float:left;\n      display: block;\n      padding-top: 100%;\n    }\n\n    .week-day-data {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      top: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n  "]);_templateObject26_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject26_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject25_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n          <div class=\"week-day\">\n            <div class=\"week-day-data\">","</div>\n          </div>\n        "]);_templateObject25_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject25_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject24_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      ",""]);_templateObject24_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject24_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject23_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n    :host {\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: center;\n      align-items: center;\n      margin-top: 24px;\n      /* background: #eaeaea;\n      border-radius: 10px; */\n    }\n\n    .clock {\n      border-radius: 50%;\n      width: 150px;\n      height: 150px;\n      background: #efefef;\n      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n      border: 3px solid #ffffff;\n      margin: 24px auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .pointer {\n      position: absolute;\n      transform-origin: 0;\n      border-radius: 4px;\n      background: #9a9a9e;\n      transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.65s;\n    }\n\n    .hour {\n      width: 42px;\n      height: 4px;\n      transform: translate(50%) rotate(0deg);\n    }\n\n    .minute {\n      width: 48px;\n      height: 3px;\n      transform: translate(50%) rotate(130deg);\n    }\n\n    .second {\n      background: #fa7777;\n      width: 56px;\n      height: 2px;\n      transform: translate(50%) rotate(90deg);\n    }\n\n    .center-dot {\n      background: #ffffff;\n      border: 4px solid #9a9a9e;\n      border-radius: 50%;\n      width: 3px;\n      height: 3px;\n      z-index: 2;\n    }\n\n    .clock-input-container {\n      color: rgba(0, 0, 0, 0.38);\n      margin: 24px auto;\n      display: flex;\n      align-items: center;\n    }\n\n    .clock-input-container input {\n      outline: none;\n      width: 42px;\n      height: 42px;\n      background-color: #efefef;\n      border: none;\n      margin: 0 8px;\n      border-radius: 4px;\n      text-align: center;\n      font-size: 16px;\n      font-weight: 700;\n      color: rgba(0, 0, 0, 0.38);\n    }\n  "]);_templateObject23_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject23_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject22_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n              : <input\n                name=\"second\"\n                type=\"text\"\n                maxLength=\"2\"\n                value=\"","\"\n                @blur=\"","\"\n                @keydown=\"","\"\n                @input=\"","\"\n                @focus=\"","\"\n              />\n            "]);_templateObject22_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject22_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject21_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div class=\"clock\">\n        <div class=\"pointer hour\" style=\"transform: translate(50%) rotate(","deg)\"></div>\n        <div class=\"pointer minute\" style=\"transform: translate(50%) rotate(","deg)\"></div>\n        <div class=\"pointer second\" style=\"transform: translate(50%) rotate(","deg)\"></div>\n        <div class=\"center-dot\"></div>\n      </div>\n      <div class=\"clock-input-container\">\n        <input\n          name=\"hour\"\n          type=\"text\"\n          maxLength=\"2\"\n          value=\"","\"\n          @blur=\"","\"\n          @keydown=\"","\"\n          @input=\"","\"\n          @focus=\"","\"\n        /> :\n        <input\n          name=\"minute\"\n          type=\"text\"\n          maxLength=\"2\"\n          value=\"","\"\n          @blur=\"","\"\n          @keydown=\"","\"\n          @input=\"","\"\n          @focus=\"","\"\n        />\n        ","\n      </div>\n    "]);_templateObject21_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject21_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject20_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n   :host {\n      display: flex;\n      flex-flow: row nowrap;\n      padding: 16px;\n      align-items: center;\n   }\n\n   p {\n      font-weight: 500;\n      cursor: pointer;\n      color: rgba(var(--theme-on-background-color), 0.87);\n      align-self: stretch;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex: 1;\n      margin: 0 8px;\n    }\n\n    .next,\n    .previous {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%;\n      fill: rgb(var(--theme-primary-color));\n      cursor: pointer;\n      padding: 6px;\n      background-color: rgba(var(--theme-primary-color), 0.09);\n    }\n\n    [hidden] {\n      display: none;\n    }\n  "]);_templateObject20_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject20_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject19_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div class=\"previous\" ?hidden=\"","\"  @click=\"","\">\n        ","\n      </div>\n      <p @click=",">","</p>\n      <div class=\"next\" ?hidden=\"","\"  @click=\"","\">\n        ","\n      </div>\n    "]);_templateObject19_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject19_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject18_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\" /><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\" /></svg>"]);_templateObject18_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject18_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject17_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\" /><path d=\"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z\" /></svg>"]);_templateObject17_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject17_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject16_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\" /><path d=\"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z\" /></svg>"]);_templateObject16_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject16_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject15_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\" /><path d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z\" /></svg>"]);_templateObject15_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject15_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject14_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n    :host {\n      display: flex;\n      flex-flow: row wrap;\n    }\n\n    .decade-button {\n      width: calc(100% - 40px);\n      text-align: center;\n      border-radius: 6px;\n      padding: 10px 16px;\n      font-weight: 500;\n      margin: 4px;\n      color: rgba(0, 0, 0, 0.60);\n      cursor: pointer;\n    }\n\n    .decade-button:hover {\n      background-color: rgba(var(--theme-primary-color) ,0.09);\n      color: rgba(var(--theme-on-background-color), 0.60);\n    }\n\n    [active] {\n      background-color: rgb(var(--theme-primary-color));\n      color: rgba(var(--theme-on-primary-color), 0.87);\n    }\n  "]);_templateObject14_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject14_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject13_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n          <div\n            class=\"decade-button\"\n            ?active=\"","\"\n            @click=\"","\"\n          >\n            <div>","-","</div>\n          </div>\n          "]);_templateObject13_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject13_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject12_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      ",""]);_templateObject12_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject12_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject11_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n            <div\n              class=\"decade-button\"\n              ?active=\"","\"\n              @click=\"","\"\n            >\n              <div>","-","</div>\n            </div>\n            "]);_templateObject11_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject11_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject10_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n        ",""]);_templateObject10_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject10_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject9_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n            <div\n              class=\"decade-button\"\n              ?active=\"","\"\n              @click=\"","\"\n            >\n              <div>","-","</div>\n            </div>\n            "]);_templateObject9_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject9_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject8_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n        ",""]);_templateObject8_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject8_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject7_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n    :host {\n      display: flex;\n      flex-flow: row wrap;\n    }\n\n    .year-button {\n      width: calc(33.33333% - 40px);\n      text-align: center;\n      border-radius: 6px;\n      padding: 10px 16px;\n      font-weight: 500;\n      margin: 4px;\n      color: rgba(0, 0, 0, 0.60);\n      cursor: pointer;\n    }\n\n    .year-button:hover {\n      background-color: rgba(var(--theme-primary-color) ,0.09);\n      color: rgba(var(--theme-on-background-color), 0.60);\n    }\n\n    [active] {\n      background-color: rgb(var(--theme-primary-color));\n      color: rgba(var(--theme-on-primary-color), 0.87);\n    }\n  "]);_templateObject7_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject7_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject6_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n          <div\n            class=\"year-button\"\n            ?active=\"","\"\n            @click=\"","\"\n          >\n            <div>","</div>\n          </div>\n        "]);_templateObject6_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject6_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject5_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      ",""]);_templateObject5_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject5_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject4_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n\n    :host {\n      display: flex;\n      flex-flow: row wrap;\n    }\n\n    .month-button {\n      width: calc(33.33333% - 40px);\n      text-align: center;\n      border-radius: 6px;\n      padding: 10px 16px;\n      font-weight: 500;\n      margin: 4px;\n      color: rgba(0, 0, 0, 0.60);\n      cursor: pointer;\n    }\n\n    .month-button:hover {\n      background-color: rgba(var(--theme-primary-color) ,0.09);\n      color: rgba(var(--theme-on-background-color), 0.60);\n    }\n\n    [active] {\n      background-color: rgb(var(--theme-primary-color));\n      color: rgba(var(--theme-on-primary-color), 0.87);\n    }\n  "]);_templateObject4_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject4_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject3_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n          <div\n            class=\"month-button\"\n            ?active=\"","\"\n            @click=","\n          >\n            <div>","</div>\n          </div>\n        "]);_templateObject3_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject3_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject2_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      ",""]);_templateObject2_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject2_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _templateObject_d1b7ac50f70311eba9769dd77e1add8c(){var data=babelHelpers.taggedTemplateLiteral(["\n  :host {\n    /*A0144F*/\n    --theme-primary-color: var(--primary-color, 98, 0, 238);\n    --theme-primary-variant-color: var(--primary-variant-color, 55, 0, 179);\n\n    --theme-accent-color: var(--accent-color, 3, 218, 198);\n    --theme-accent-variant-color: var(--accent-variant-color, 1, 135, 134);\n\n    --theme-background-color: var(--background-color, 255, 255, 255);\n    --theme-surface-color: var(--surface-color, 255, 255, 255);\n\n    --theme-error-color: var(--error-color, 176, 0, 32);\n\n    /*\n    Help:\n    Material Typography Color System\n    #FFFFFFDE -> FFFFFF %87\n    #FFFFFF99 -> FFFFFF %60\n    #FFFFFF61 -> FFFFFF %38\n    */\n\n    --theme-on-primary-color: var(--on-primary-color, 255, 255, 255);\n    --theme-on-accent-color: var(--on-accent-color, 0, 0, 0);\n    --theme-on-background-color: var(--on-background-color, 0, 0, 0);\n    --theme-on-surface-color: var(--on-surface-color, 0, 0, 0);\n    --theme-on-error-color: var(--on-error-color, 255, 255, 255);\n  }\n\n  .views-container {\n    padding: 0 8px 16px;\n    position: relative;\n  }\n\n  .view {\n    width: 100%;\n    transition: ease-out 0.25s;\n    position: relative;\n  }\n\n  [hidden] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    visibility: hidden;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  .calendar-view {\n    display: block;\n  }\n\n  .calendar-row {\n    display: flex;\n    padding: 0 8px;\n    margin: 6px 0;\n  }\n\n  .calendar-row .calendar-day {\n    /* background-color: tomato; */\n    /* margin: 2px; */\n    font-weight: 500;\n    flex: 1 0 auto;\n    position: relative;\n  }\n\n  .calendar-row .calendar-day::after {\n    content: \"\";\n    float: left;\n    display: block;\n    padding-top: 100%;\n  }\n\n  .calendar-row .calendar-day {\n    color: rgba(var(--theme-on-background-color) 0.87);\n    cursor: pointer;\n    border-radius: 50%;\n  }\n\n  .calendar-row .current-date-highlight {\n    color: rgb(var(--theme-accent-color));\n    background-color: rgba(var(--theme-accent-variant-color), 0.09);\n  }\n\n  .calendar-row .selected-day {\n    color: rgba(var(--theme-on-primary-color), 0.87);\n    background: rgb(var(--theme-primary-color));\n  }\n\n  .calendar-row .in-range-day {\n    background: rgb(var(--theme-primary-variant-color));\n    border-radius: 0;\n  }\n\n  .calendar-day-data {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .calendar-row .in-range-day,\n  .calendar-day-data[data-range-edge=\"true\"],\n  .calendar-day-data[data-start-range-edge] {\n    transition: ease-in 0.15s;\n  }\n\n  .calendar-row .fade {\n    color: rgba(0, 0, 0, 0.38);\n  }\n\n  .goto-time-view {\n    padding: 10px 0;\n    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); */\n    border-top: 2px solid rgba(0, 0, 0, 0.09);\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    fill: rgba(0, 0, 0, 0.6);\n  }\n"]);_templateObject_d1b7ac50f70311eba9769dd77e1add8c=function _templateObject_d1b7ac50f70311eba9769dd77e1add8c(){return data};return data}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=babelHelpers.getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=babelHelpers.getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return babelHelpers.possibleConstructorReturn(this,result)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}function _createForOfIteratorHelper(o,allowArrayLike){var it;if("undefined"===typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"===typeof o.length){if(it)o=it;var i=0,F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:!0};return{done:!1,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=!0,didErr=!1,err;return{s:function s(){it=o[Symbol.iterator]()},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e3){didErr=!0;err=_e3},f:function f(){try{if(!normalCompletion&&null!=it.return)it.return()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"===typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor)n=o.constructor.name;if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(null==len||len>arr.length)len=arr.length;for(var i=0,arr2=Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||babelHelpers.instanceof({__proto__:[]},Array)&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p]}};return _extendStatics(d,b)};function __extends(d,b){_extendStatics(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var _assign=function __assign(){_exports.__assign=_assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}}return t};return _assign.apply(this,arguments)};_exports.__assign=_assign;function __rest(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p]}if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===("undefined"===typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--){if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r}return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata(metadataKey,metadataValue){if("object"===("undefined"===typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return babelHelpers.instanceof(value,P)?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator(thisArg,body){var _={label:0,sent:function sent(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_){try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}function __createBinding(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]}function __exportStar(m,exports){for(var p in m){if("default"!==p&&!exports.hasOwnProperty(p))exports[p]=m[p]}}function __values(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function next(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done){ar.push(r.value)}}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}function __spread(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]))}return ar}function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++){s+=arguments[i].length}for(var r=Array(s),k=0,i=0;i<il;i++){for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++){r[k]=a[j]}}return r};function __await(v){return babelHelpers.instanceof(this,__await)?(this.v=v,this):new __await(v)}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){babelHelpers.instanceof(r.value,__await)?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod){if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k]}result.default=mod;return result}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6={__proto__:null,__extends:__extends,get __assign(){return _assign},__rest:__rest,__decorate:__decorate,__param:__param,__metadata:__metadata,__awaiter:__awaiter,__generator:__generator,__createBinding:__createBinding,__exportStar:__exportStar,__values:__values,__read:__read,__spread:__spread,__spreadArrays:__spreadArrays,__await:__await,__asyncGenerator:__asyncGenerator,__asyncDelegator:__asyncDelegator,__asyncValues:__asyncValues,__makeTemplateObject:__makeTemplateObject,__importStar:__importStar,__importDefault:__importDefault,__classPrivateFieldGet:__classPrivateFieldGet,__classPrivateFieldSet:__classPrivateFieldSet};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * True if the custom elements polyfill is in use.
        */_exports.$tslibEs6=tslib_es6;var isCEPolyfill="undefined"!==typeof window&&null!=window.customElements&&window.customElements.polyfillWrapFlushCallback!==void 0;/**
                                                                                                                                                              * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
                                                                                                                                                              * into another container (could be the same container), before `before`. If
                                                                                                                                                              * `before` is null, it appends the nodes to the container.
                                                                                                                                                              */_exports.isCEPolyfill=isCEPolyfill;var reparentNodes=function reparentNodes(container,start){var end=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,before=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;while(start!==end){var n=start.nextSibling;container.insertBefore(start,before);start=n}};/**
    * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
    * `container`.
    */_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;var removeNodes=function removeNodes(container,start){var end=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;while(start!==end){var n=start.nextSibling;container.removeChild(start);start=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom={__proto__:null,isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * An expression marker with embedded unique key to avoid collision with
        * possible text in templates.
        */_exports.$dom=dom;var marker="{{lit-".concat((Math.random()+"").slice(2),"}}");/**
                                                                    * An expression marker used text-positions, multi-binding attributes, and
                                                                    * attributes with markup-like text values.
                                                                    */_exports.marker=marker;var nodeMarker="<!--".concat(marker,"-->");_exports.nodeMarker=nodeMarker;var markerRegex=new RegExp("".concat(marker,"|").concat(nodeMarker));/**
                                                                   * Suffix appended to all bound attribute names.
                                                                   */_exports.markerRegex=markerRegex;var boundAttributeSuffix="$lit$";/**
                                              * An updatable Template that tracks the location of dynamic parts.
                                              */_exports.boundAttributeSuffix=boundAttributeSuffix;var Template=function Template(result,element){babelHelpers.classCallCheck(this,Template);this.parts=[];this.element=element;var nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),lastPartIndex=0,index=-1,partIndex=0,strings=result.strings,length=result.values.length;while(partIndex<length){var node=walker.nextNode();if(null===node){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();continue}index++;if(1===node.nodeType/* Node.ELEMENT_NODE */){if(node.hasAttributes()){for(var attributes=node.attributes,_length=attributes.length,count=0,i=0;i<_length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++}}while(0<count--){// Get the template literal section leading up to the first
// expression in this attribute
var stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName);// Find the attribute name
node.removeAttribute(attributeLookupName);var statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index:index,name:name,strings:statics});partIndex+=statics.length-1}}if("TEMPLATE"===node.tagName){stack.push(node);walker.currentNode=node.content}}else if(3===node.nodeType/* Node.TEXT_NODE */){var data=node.data;if(0<=data.indexOf(marker)){// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(var parent=node.parentNode,_strings=data.split(markerRegex),lastIndex=_strings.length-1,_i=0;_i<lastIndex;_i++){var insert=void 0,s=_strings[_i];if(""===s){insert=createMarker()}else{var match=lastAttributeNameRegex.exec(s);if(null!==match&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3]}insert=document.createTextNode(s)}parent.insertBefore(insert,node);this.parts.push({type:"node",index:++index})}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(""===_strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=_strings[lastIndex]}// We have a part for each match found
partIndex+=lastIndex}}else if(8===node.nodeType/* Node.COMMENT_NODE */){if(node.data===marker){var _parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(null===node.previousSibling||index===lastPartIndex){index++;_parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index:index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{var _i2=-1;while(-1!==(_i2=node.data.indexOf(marker,_i2+1))){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:"node",index:-1});partIndex++}}}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(var _i3=0,_nodesToRemove=nodesToRemove,n;_i3<_nodesToRemove.length;_i3++){n=_nodesToRemove[_i3];n.parentNode.removeChild(n)}};_exports.Template$1=_exports.Template=Template;var endsWith=function endsWith(str,suffix){var index=str.length-suffix.length;return 0<=index&&str.slice(index)===suffix},isTemplatePartActive=function isTemplatePartActive(part){return-1!==part.index};_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
var createMarker=function createMarker(){return document.createComment("")};/**
                                                               * This regex extracts the attribute name preceding an attribute-position
                                                               * expression. It does this by matching the syntax allowed for attributes
                                                               * against the string literal directly preceding the expression, assuming that
                                                               * the expression is in an attribute-value position.
                                                               *
                                                               * See attributes in the HTML spec:
                                                               * https://www.w3.org/TR/html5/syntax.html#elements-attributes
                                                               *
                                                               * " \x09\x0a\x0c\x0d" are HTML space characters:
                                                               * https://www.w3.org/TR/html5/infrastructure.html#space-characters
                                                               *
                                                               * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
                                                               * space character except " ".
                                                               *
                                                               * So an attribute is:
                                                               *  * The name: any character except a control character, space character, ('),
                                                               *    ("), ">", "=", or "/"
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by "="
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by:
                                                               *    * Any character except space, ('), ("), "<", ">", "=", (`), or
                                                               *    * (") then any non-("), or
                                                               *    * (') then any non-(')
                                                               */_exports.createMarker$1=_exports.createMarker=createMarker;var lastAttributeNameRegex=// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template={__proto__:null,marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template;var walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
                                                                            * Removes the list of nodes from a Template safely. In addition to removing
                                                                            * nodes from the Template, the Template part indices are updated to match
                                                                            * the mutated Template DOM.
                                                                            *
                                                                            * As the template is walked the removal state is tracked and
                                                                            * part indices are adjusted as needed.
                                                                            *
                                                                            * div
                                                                            *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                            *     div
                                                                            *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                            *         div
                                                                            * div <-- stop removing since previous sibling is the removing node (div#1,
                                                                            * removed 4 nodes)
                                                                            */function removeNodesFromTemplate(template,nodesToRemove){var content=template.element.content,parts=template.parts,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1),partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0,nodesToRemoveInTemplate=[],currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;var node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(null===currentRemovingNode){currentRemovingNode=node}}// When removing, increment count by which to adjust subsequent part indices
if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=null!==currentRemovingNode?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(function(n){return n.parentNode.removeChild(n)})}var countNodes=function countNodes(node){var count=11===node.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1,walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=function nextActiveIndexInTemplateParts(parts){for(var startIndex=1<arguments.length&&arguments[1]!==void 0?arguments[1]:-1,i=startIndex+1,_part;i<parts.length;i++){_part=parts[i];if(isTemplatePartActive(_part)){return i}}return-1};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node){var refNode=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,content=template.element.content,parts=template.parts;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===refNode||refNode===void 0){content.appendChild(node);return}var walker=document.createTreeWalker(content,walkerNodeFilter,null,!1),partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;var walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={__proto__:null,removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$modifyTemplate=modifyTemplate;var directives=new WeakMap,directive=function directive(f){return function(){var d=f.apply(void 0,arguments);directives.set(d,!0);return d}};/**
                                   * Brands a function as a directive factory function so that lit-html will call
                                   * the function during template rendering, rather than passing as a value.
                                   *
                                   * A _directive_ is a function that takes a Part as an argument. It has the
                                   * signature: `(part: Part) => void`.
                                   *
                                   * A directive _factory_ is a function that takes arguments for data and
                                   * configuration and returns a directive. Users of directive usually refer to
                                   * the directive factory as the directive. For example, "The repeat directive".
                                   *
                                   * Usually a template author will invoke a directive factory in their template
                                   * with relevant arguments, which will then return a directive function.
                                   *
                                   * Here's an example of using the `repeat()` directive factory that takes an
                                   * array and a function to render an item:
                                   *
                                   * ```js
                                   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
                                   * ```
                                   *
                                   * When `repeat` is invoked, it returns a directive function that closes over
                                   * `items` and the template function. When the outer template is rendered, the
                                   * return directive function is called with the Part for the expression.
                                   * `repeat` then performs it's custom logic to render multiple items.
                                   *
                                   * @param f The directive factory function. Must be a function that returns a
                                   * function of the signature `(part: Part) => void`. The returned function will
                                   * be called with the part object.
                                   *
                                   * @example
                                   *
                                   * import {directive, html} from 'lit-html';
                                   *
                                   * const immutable = directive((v) => (part) => {
                                   *   if (part.value !== v) {
                                   *     part.setValue(v)
                                   *   }
                                   * });
                                   */_exports.directive$1=_exports.directive=directive;var isDirective=function isDirective(o){return"function"===typeof o&&directives.has(o)};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={__proto__:null,directive:directive,isDirective:isDirective};/**
    * @license
    * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * A sentinel value that signals that a value was handled by a directive and
        * should not be written to the DOM.
        */_exports.$directive=directive$1;var noChange={};/**
                             * A sentinel value that signals a NodePart to fully clear its content.
                             */_exports.noChange$1=_exports.noChange=noChange;var nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={__proto__:null,noChange:noChange,nothing:nothing};_exports.$part=part;var TemplateInstance=/*#__PURE__*/function(){function TemplateInstance(template,processor,options){babelHelpers.classCallCheck(this,TemplateInstance);this.__parts=[];this.template=template;this.processor=processor;this.options=options}babelHelpers.createClass(TemplateInstance,[{key:"update",value:function update(values){var i=0,_iterator=_createForOfIteratorHelper(this.__parts),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _part2=_step.value;if(_part2!==void 0){_part2.setValue(values[i])}i++}}catch(err){_iterator.e(err)}finally{_iterator.f()}var _iterator2=_createForOfIteratorHelper(this.__parts),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _part3=_step2.value;if(_part3!==void 0){_part3.commit()}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}},{key:"_clone",value:function _clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari does not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
var fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),partIndex=0,nodeIndex=0,part,node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(void 0);partIndex++;continue}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
while(nodeIndex<part.index){nodeIndex++;if("TEMPLATE"===node.nodeName){stack.push(node);walker.currentNode=node.content}if(null===(node=walker.nextNode())){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();node=walker.nextNode()}}// We've arrived at our part's node.
if("node"===part.type){var _part4=this.processor.handleTextExpression(this.options);_part4.insertAfterNode(node.previousSibling);this.__parts.push(_part4)}else{var _this$__parts;(_this$__parts=this.__parts).push.apply(_this$__parts,babelHelpers.toConsumableArray(this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options)))}partIndex++}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}]);return TemplateInstance}();_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={__proto__:null,TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;var policy=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function createHTML(s){return s}}),commentMarker=" ".concat(marker," "),TemplateResult=/*#__PURE__*/function(){function TemplateResult(strings,values,type,processor){babelHelpers.classCallCheck(this,TemplateResult);this.strings=strings;this.values=values;this.type=type;this.processor=processor}/**
     * Returns a string of HTML used to create a `<template>` element.
     */babelHelpers.createClass(TemplateResult,[{key:"getHTML",value:function getHTML(){for(var l=this.strings.length-1,html="",isCommentBinding=!1,i=0;i<l;i++){var s=this.strings[i],commentOpen=s.lastIndexOf("<!--");// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment position.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
// We're in comment position if we have a comment open with no following
// comment close. Because <-- can appear in an attribute value there can
// be false positives.
isCommentBinding=(-1<commentOpen||isCommentBinding)&&-1===s.indexOf("-->",commentOpen+1);// Check to see if we have an attribute-like sequence preceding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
var attributeMatch=lastAttributeNameRegex.exec(s);if(null===attributeMatch){// We're only in this branch if we don't have a attribute-like
// preceding sequence. For comments, this guards against unusual
// attribute values like <div foo="<!--${'bar'}">. Cases like
// <!-- foo=${'bar'}--> are handled correctly in the attribute branch
// below.
html+=s+(isCommentBinding?commentMarker:nodeMarker)}else{// For attributes we use just a marker sentinel, and also append a
// $lit$ suffix to the name to opt-out of attribute-specific parsing
// that IE and Edge do for style and certain SVG attributes.
html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker}}html+=this.strings[l];return html}},{key:"getTemplateElement",value:function getTemplateElement(){var template=document.createElement("template"),value=this.getHTML();if(policy!==void 0){// this is secure because `this.strings` is a TemplateStringsArray.
// TODO: validate this when
// https://github.com/tc39/proposal-array-is-template-object is
// implemented.
value=policy.createHTML(value)}template.innerHTML=value;return template}}]);return TemplateResult}();_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */var SVGTemplateResult=/*#__PURE__*/function(_TemplateResult){babelHelpers.inherits(SVGTemplateResult,_TemplateResult);var _super=_createSuper(SVGTemplateResult);function SVGTemplateResult(){babelHelpers.classCallCheck(this,SVGTemplateResult);return _super.apply(this,arguments)}babelHelpers.createClass(SVGTemplateResult,[{key:"getHTML",value:function getHTML(){return"<svg>".concat(babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getHTML",this).call(this),"</svg>")}},{key:"getTemplateElement",value:function getTemplateElement(){var template=babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getTemplateElement",this).call(this),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}]);return SVGTemplateResult}(TemplateResult);_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={__proto__:null,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;var isPrimitive=function isPrimitive(value){return null===value||!("object"===babelHelpers.typeof(value)||"function"===typeof value)};_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;var isIterable=function isIterable(value){return Array.isArray(value)||// eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(value&&value[Symbol.iterator])};/**
    * Writes attribute values to the DOM for a group of AttributeParts bound to a
    * single attribute. The value is only set once even if there are multiple parts
    * for an attribute.
    */_exports.isIterable$1=_exports.isIterable=isIterable;var AttributeCommitter=/*#__PURE__*/function(){function AttributeCommitter(element,name,strings){babelHelpers.classCallCheck(this,AttributeCommitter);this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(var i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */babelHelpers.createClass(AttributeCommitter,[{key:"_createPart",value:function _createPart(){return new AttributePart(this)}},{key:"_getValue",value:function _getValue(){var strings=this.strings,l=strings.length-1,parts=this.parts;// If we're assigning an attribute via syntax like:
//    attr="${foo}"  or  attr=${foo}
// but not
//    attr="${foo} ${bar}" or attr="${foo} baz"
// then we don't want to coerce the attribute value into one long
// string. Instead we want to just return the value itself directly,
// so that sanitizeDOMValue can get the actual value rather than
// String(value)
// The exception is if v is an array, in which case we do want to smash
// it together into a string without calling String() on the array.
//
// This also allows trusted values (when using TrustedTypes) being
// assigned to DOM sinks without being stringified in the process.
if(1===l&&""===strings[0]&&""===strings[1]){var v=parts[0].value;if("symbol"===babelHelpers.typeof(v)){return v+""}if("string"===typeof v||!isIterable(v)){return v}}for(var text="",i=0;i<l;i++){text+=strings[i];var _part5=parts[i];if(_part5!==void 0){var _v2=_part5.value;if(isPrimitive(_v2)||!isIterable(_v2)){text+="string"===typeof _v2?_v2:_v2+""}else{var _iterator3=_createForOfIteratorHelper(_v2),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var t=_step3.value;text+="string"===typeof t?t:t+""}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}}}text+=strings[l];return text}},{key:"commit",value:function commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}]);return AttributeCommitter}();/**
   * A Part that controls all or part of an attribute value.
   */_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;var AttributePart=/*#__PURE__*/function(){function AttributePart(committer){babelHelpers.classCallCheck(this,AttributePart);this.value=void 0;this.committer=committer}babelHelpers.createClass(AttributePart,[{key:"setValue",value:function setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=!0}}}},{key:"commit",value:function commit(){while(isDirective(this.value)){var _directive=this.value;this.value=noChange;_directive(this)}if(this.value===noChange){return}this.committer.commit()}}]);return AttributePart}();/**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */_exports.AttributePart$1=_exports.AttributePart=AttributePart;var NodePart=/*#__PURE__*/function(){function NodePart(options){babelHelpers.classCallCheck(this,NodePart);this.value=void 0;this.__pendingValue=void 0;this.options=options}/**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */babelHelpers.createClass(NodePart,[{key:"appendInto",value:function appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}/**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"insertAfterNode",value:function insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"appendIntoPart",value:function appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker())}/**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"insertAfterPart",value:function insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}},{key:"setValue",value:function setValue(value){this.__pendingValue=value}},{key:"commit",value:function commit(){if(null===this.startNode.parentNode){return}while(isDirective(this.__pendingValue)){var _directive2=this.__pendingValue;this.__pendingValue=noChange;_directive2(this)}var value=this.__pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this.__commitText(value)}}else if(babelHelpers.instanceof(value,TemplateResult)){this.__commitTemplateResult(value)}else if(babelHelpers.instanceof(value,Node)){this.__commitNode(value)}else if(isIterable(value)){this.__commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{// Fallback, will render the string representation
this.__commitText(value)}}},{key:"__insert",value:function __insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}},{key:"__commitNode",value:function __commitNode(value){if(this.value===value){return}this.clear();this.__insert(value);this.value=value}},{key:"__commitText",value:function __commitText(value){var node=this.startNode.nextSibling;value=null==value?"":value;// If `value` isn't already a string, we explicitly convert it here in case
// it can't be implicitly converted - i.e. it's a symbol.
var valueAsString="string"===typeof value?value:value+"";if(node===this.endNode.previousSibling&&3===node.nodeType/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=valueAsString}else{this.__commitNode(document.createTextNode(valueAsString))}this.value=value}},{key:"__commitTemplateResult",value:function __commitTemplateResult(value){var template=this.options.templateFactory(value);if(babelHelpers.instanceof(this.value,TemplateInstance)&&this.value.template===template){this.value.update(value.values)}else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
var instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance}}},{key:"__commitIterable",value:function __commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear()}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
var itemParts=this.value,partIndex=0,itemPart,_iterator4=_createForOfIteratorHelper(value),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var item=_step4.value;// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}}catch(err){_iterator4.e(err)}finally{_iterator4.f()}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}},{key:"clear",value:function clear(){var startNode=0<arguments.length&&arguments[0]!==void 0?arguments[0]:this.startNode;removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}]);return NodePart}();/**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */_exports.NodePart$1=_exports.NodePart=NodePart;var BooleanAttributePart=/*#__PURE__*/function(){function BooleanAttributePart(element,name,strings){babelHelpers.classCallCheck(this,BooleanAttributePart);this.value=void 0;this.__pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}babelHelpers.createClass(BooleanAttributePart,[{key:"setValue",value:function setValue(value){this.__pendingValue=value}},{key:"commit",value:function commit(){while(isDirective(this.__pendingValue)){var _directive3=this.__pendingValue;this.__pendingValue=noChange;_directive3(this)}if(this.__pendingValue===noChange){return}var value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}this.value=value}this.__pendingValue=noChange}}]);return BooleanAttributePart}();/**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;var PropertyCommitter=/*#__PURE__*/function(_AttributeCommitter){babelHelpers.inherits(PropertyCommitter,_AttributeCommitter);var _super2=_createSuper(PropertyCommitter);function PropertyCommitter(element,name,strings){var _this;babelHelpers.classCallCheck(this,PropertyCommitter);_this=_super2.call(this,element,name,strings);_this.single=2===strings.length&&""===strings[0]&&""===strings[1];return _this}babelHelpers.createClass(PropertyCommitter,[{key:"_createPart",value:function _createPart(){return new PropertyPart(this)}},{key:"_getValue",value:function _getValue(){if(this.single){return this.parts[0].value}return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyCommitter.prototype),"_getValue",this).call(this)}},{key:"commit",value:function commit(){if(this.dirty){this.dirty=!1;// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.element[this.name]=this._getValue()}}}]);return PropertyCommitter}(AttributeCommitter);_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;var PropertyPart=/*#__PURE__*/function(_AttributePart){babelHelpers.inherits(PropertyPart,_AttributePart);var _super3=_createSuper(PropertyPart);function PropertyPart(){babelHelpers.classCallCheck(this,PropertyPart);return _super3.apply(this,arguments)}return PropertyPart}(AttributePart);// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;var eventOptionsSupported=!1;// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(function(){try{var options={get capture(){eventOptionsSupported=!0;return!1}};// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.addEventListener("test",options,options);// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.removeEventListener("test",options,options)}catch(_e){// event options not supported
}})();var EventPart=/*#__PURE__*/function(){function EventPart(element,eventName,eventContext){var _this2=this;babelHelpers.classCallCheck(this,EventPart);this.value=void 0;this.__pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=function(e){return _this2.handleEvent(e)}}babelHelpers.createClass(EventPart,[{key:"setValue",value:function setValue(value){this.__pendingValue=value}},{key:"commit",value:function commit(){while(isDirective(this.__pendingValue)){var _directive4=this.__pendingValue;this.__pendingValue=noChange;_directive4(this)}if(this.__pendingValue===noChange){return}var newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options)}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=newListener;this.__pendingValue=noChange}},{key:"handleEvent",value:function handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}]);return EventPart}();// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
_exports.EventPart$1=_exports.EventPart=EventPart;var getOptions=function getOptions(o){return o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture)},parts={__proto__:null,isPrimitive:isPrimitive,isIterable:isIterable,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;function templateFactory(result){var templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}var template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
var key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===void 0){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template)}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template}var templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={__proto__:null,templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;var parts$1=new WeakMap;/**
                                     * Renders a template result or other value to a container.
                                     *
                                     * To update a container with new values, reevaluate the template literal and
                                     * call `render` with the new result.
                                     *
                                     * @param result Any value renderable by NodePart - typically a TemplateResult
                                     *     created by evaluating a template tag like `html` or `svg`.
                                     * @param container A DOM parent to render to. The entire contents are either
                                     *     replaced, or efficiently updated if the same result type was previous
                                     *     rendered there.
                                     * @param options RenderOptions for the entire render tree rendered to this
                                     *     container. Render options must *not* change between renders to the same
                                     *     container, as those changes will not effect previously rendered DOM.
                                     */_exports.parts$1=_exports.parts=parts$1;var render=function render(result,container,options){var part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory:templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render$2=_exports.render=render;var render$1={__proto__:null,parts:parts$1,render:render};_exports.$render=render$1;var DefaultTemplateProcessor=/*#__PURE__*/function(){function DefaultTemplateProcessor(){babelHelpers.classCallCheck(this,DefaultTemplateProcessor)}babelHelpers.createClass(DefaultTemplateProcessor,[{key:"handleAttributeExpressions",/**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */value:function handleAttributeExpressions(element,name,strings,options){var prefix=name[0];if("."===prefix){var _committer=new PropertyCommitter(element,name.slice(1),strings);return _committer.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}var committer=new AttributeCommitter(element,name,strings);return committer.parts}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */},{key:"handleTextExpression",value:function handleTextExpression(options){return new NodePart(options)}}]);return DefaultTemplateProcessor}();_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;var defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={__proto__:null,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;if("undefined"!==typeof window){(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0")}/**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */var html=function html(strings){for(var _len=arguments.length,values=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++){values[_key-1]=arguments[_key]}return new TemplateResult(strings,values,"html",defaultTemplateProcessor)};/**
                                                                                                                    * Interprets a template literal as an SVG template that can efficiently
                                                                                                                    * render to and update a container.
                                                                                                                    */_exports.html$2=_exports.html$1=_exports.html=html;var svg=function svg(strings){for(var _len2=arguments.length,values=Array(1<_len2?_len2-1:0),_key2=1;_key2<_len2;_key2++){values[_key2-1]=arguments[_key2]}return new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor)};_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={__proto__:null,html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isIterable:isIterable,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;var getTemplateCacheKey=function getTemplateCacheKey(type,scopeName){return"".concat(type,"--").concat(scopeName)},compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn("Incompatible ShadyCSS version detected. "+"Please update to at least @webcomponents/webcomponentsjs@2.0.2 and "+"@webcomponents/shadycss@1.3.1.");compatibleShadyCSSVersion=!1}/**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */var shadyTemplateFactory=function shadyTemplateFactory(scopeName){return function(result){var cacheKey=getTemplateCacheKey(result.type,scopeName),templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}var template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}var key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){var element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template}};_exports.shadyTemplateFactory=shadyTemplateFactory;var TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=function removeStylesFromLitTemplates(scopeName){TEMPLATE_TYPES.forEach(function(type){var templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(function(template){var content=template.element.content,styles=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(content.querySelectorAll("style")).forEach(function(s){styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=function prepareTemplateStyles(scopeName,renderedDOM,template){shadyRenderSet.add(scopeName);// If `renderedDOM` is stamped from a Template, then we need to edit that
// Template's underlying template element. Otherwise, we create one here
// to give to ShadyCSS, which still requires one while scoping.
var templateElement=!!template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),length=styles.length;// Move styles out of rendered DOM and store.
// If there are no styles, skip unnecessary work
if(0===length){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
//
// ShadyCSS will only update styles containing @apply in the template
// given to `prepareTemplateStyles`. If no lit Template was given,
// ShadyCSS will not be able to update uses of @apply in any relevant
// template. However, this is not a problem because we only create the
// template for the purpose of supporting `prepareAdoptedCssText`,
// which doesn't support @apply at all.
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);return}// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(var condensedStyle=document.createElement("style"),i=0,_style;i<length;i++){_style=styles[i];_style.parentNode.removeChild(_style);condensedStyle.textContent+=_style.textContent}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
var content=templateElement.content;if(!!template){insertNodeIntoTemplate(template,condensedStyle,content.firstChild)}else{content.insertBefore(condensedStyle,content.firstChild)}// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);var style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style){// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else if(!!template){// When no style is left in the template, parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// There can be no style in the template in 2 cases (1) when Shady DOM
// is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
// is in use ShadyCSS removes the style if it contains no content.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
content.insertBefore(condensedStyle,content.firstChild);var removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=function render$2(result,container,options){if(!options||"object"!==babelHelpers.typeof(options)||!options.scopeName){throw new Error("The `scopeName` option is required.")}var scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){var _part6=parts$1.get(renderContainer);parts$1.delete(renderContainer);// ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
// that should apply to `renderContainer` even if the rendered value is
// not a TemplateInstance. However, it will only insert scoped styles
// into the document if `prepareTemplateStyles` has already been called
// for the given scope name.
var _template=babelHelpers.instanceof(_part6.value,TemplateInstance)?_part6.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,_template);removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,_part6)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};/**
                                         * Removes all style elements from Templates for the given scopeName.
                                         */_exports.render$1=render$2;var shadyRender={__proto__:null,shadyTemplateFactory:shadyTemplateFactory,render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$shadyRender=shadyRender;var _a;/**
         * Use this module if you want to create your own base class extending
         * [[UpdatingElement]].
         * @packageDocumentation
         */ /*
             * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
             * replaced at compile time by the munged name for object[property]. We cannot
             * alias this function, so we have to use a small shim that has the same
             * behavior when not compiling.
             */window.JSCompiler_renameProperty=function(prop,_obj){return prop};var defaultConverter={toAttribute:function toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return null==value?value:JSON.stringify(value);}return value},fromAttribute:function fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}};/**
    * Change function that returns true if `value` is different from `oldValue`.
    * This method is used as the default for a property's `hasChanged` function.
    */_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;var notEqual=function notEqual(value,old){// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value)};_exports.notEqual$1=_exports.notEqual=notEqual;var defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,finalized="finalized",UpdatingElement=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(UpdatingElement,_HTMLElement);var _super4=_createSuper(UpdatingElement);function UpdatingElement(){var _this3;babelHelpers.classCallCheck(this,UpdatingElement);_this3=_super4.call(this);_this3.initialize();return _this3}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */babelHelpers.createClass(UpdatingElement,[{key:"initialize",/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */value:function initialize(){var _this4=this;this._updateState=0;this._updatePromise=new Promise(function(res){return _this4._enableUpdatingResolver=res});this._changedProperties=new Map;this._saveInstanceProperties();// ensures first update will be caught by an early access of
// `updateComplete`
this.requestUpdateInternal()}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */},{key:"_saveInstanceProperties",value:function _saveInstanceProperties(){var _this5=this;// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach(function(_v,p){if(_this5.hasOwnProperty(p)){var value=_this5[p];delete _this5[p];if(!_this5._instanceProperties){_this5._instanceProperties=new Map}_this5._instanceProperties.set(p,value)}})}/**
     * Applies previously saved instance properties.
     */},{key:"_applyInstanceProperties",value:function _applyInstanceProperties(){var _this6=this;// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach(function(v,p){return _this6[p]=v});this._instanceProperties=void 0}},{key:"connectedCallback",value:function connectedCallback(){// Ensure first connection completes an update. Updates cannot complete
// before connection.
this.enableUpdating()}},{key:"enableUpdating",value:function enableUpdating(){if(this._enableUpdatingResolver!==void 0){this._enableUpdatingResolver();this._enableUpdatingResolver=void 0}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){}/**
                             * Synchronizes property values when attributes change.
                             */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}},{key:"_propertyToAttribute",value:function _propertyToAttribute(name,value){var options=2<arguments.length&&arguments[2]!==void 0?arguments[2]:defaultPropertyDeclaration,ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){var attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===void 0){return}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}},{key:"_attributeToProperty",value:function _attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}var ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);// Note, hint this as an `AttributeMap` so closure clearly understands
// the type; it has issues with tracking types through statics
// tslint:disable-next-line:no-unnecessary-type-assertion
if(propName!==void 0){var options=ctor.getPropertyOptions(propName);// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}/**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */},{key:"requestUpdateInternal",value:function requestUpdateInternal(name,oldValue,options){var shouldRequestUpdate=!0;// If we have a property key, perform property update steps.
if(name!==void 0){var ctor=this.constructor;options=options||ctor.getPropertyOptions(name);if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}// Add to reflecting properties set.
// Note, it's important that every change has a chance to add the
// property to `_reflectingProperties`. This ensures setting
// attribute + property reflects correctly.
if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{// Abort the request if the property should not be considered changed.
shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._updatePromise=this._enqueueUpdate()}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */},{key:"requestUpdate",value:function requestUpdate(name,oldValue){this.requestUpdateInternal(name,oldValue);return this.updateComplete}/**
     * Sets up the element to asynchronously update.
     */},{key:"_enqueueUpdate",value:function(){var _enqueueUpdate2=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var result;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this._updateState=this._updateState|STATE_UPDATE_REQUESTED;_context.prev=1;_context.next=4;return this._updatePromise;case 4:_context.next=8;break;case 6:_context.prev=6;_context.t0=_context["catch"](1);case 8:result=this.performUpdate();// If `performUpdate` returns a Promise, we await it. This is done to
// enable coordinating updates with a scheduler. Note, the result is
// checked to avoid delaying an additional microtask unless we need to.
if(!(null!=result)){_context.next=12;break}_context.next=12;return result;case 12:return _context.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return _context.stop();}}},_callee,this,[[1,6]])}));function _enqueueUpdate(){return _enqueueUpdate2.apply(this,arguments)}return _enqueueUpdate}()},{key:"performUpdate",/**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */value:function performUpdate(){// Abort any update if one is not pending when this is called.
// This can happen if `performUpdate` is called early to "flush"
// the update.
if(!this._hasRequestedUpdate){return}// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties()}var shouldUpdate=!1,changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties)}else{this._markUpdated()}}catch(e){// Prevent `firstUpdated` and `updated` from running when there's an
// update exception.
shouldUpdate=!1;// Ensure element can accept additional updates after an exception.
this._markUpdated();throw e}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}}},{key:"_markUpdated",value:function _markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */},{key:"_getUpdateComplete",/**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */value:function _getUpdateComplete(){return this._updatePromise}/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */},{key:"shouldUpdate",value:function shouldUpdate(_changedProperties){return!0}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */},{key:"update",value:function update(_changedProperties){var _this7=this;if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach(function(v,k){return _this7._propertyToAttribute(k,_this7[k],v)});this._reflectingProperties=void 0}this._markUpdated()}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */},{key:"updated",value:function updated(_changedProperties){}/**
                                  * Invoked when the element is first updated. Implement to perform one time
                                  * work on the element after update.
                                  *
                                  * Setting properties inside this method will trigger the element to update
                                  * again after this update cycle completes.
                                  *
                                  * @param _changedProperties Map of changed properties with old values
                                  */},{key:"firstUpdated",value:function firstUpdated(_changedProperties){}},{key:"_hasRequestedUpdate",get:function get(){return this._updateState&STATE_UPDATE_REQUESTED}},{key:"hasUpdated",get:function get(){return this._updateState&STATE_HAS_UPDATED}},{key:"updateComplete",get:function get(){return this._getUpdateComplete()}}],[{key:"_ensureClassProperties",/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */value:function _ensureClassProperties(){var _this8=this;// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
var superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach(function(v,k){return _this8._classProperties.set(k,v)})}}}/**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */},{key:"createProperty",value:function createProperty(name){var options=1<arguments.length&&arguments[1]!==void 0?arguments[1]:defaultPropertyDeclaration;// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}var key="symbol"===babelHelpers.typeof(name)?Symbol():"__".concat(name),descriptor=this.getPropertyDescriptor(name,key,options);if(descriptor!==void 0){Object.defineProperty(this.prototype,name,descriptor)}}/**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */},{key:"getPropertyDescriptor",value:function getPropertyDescriptor(name,key,options){return{// tslint:disable-next-line:no-any no symbol in index
get:function get(){return this[key]},set:function set(value){var oldValue=this[name];this[key]=value;this.requestUpdateInternal(name,oldValue,options)},configurable:!0,enumerable:!0}}/**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */},{key:"getPropertyOptions",value:function getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */},{key:"finalize",value:function finalize(){// finalize any superclasses
var superCtor=Object.getPrototypeOf(this);if(!superCtor.hasOwnProperty(finalized)){superCtor.finalize()}this[finalized]=!0;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map;// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var props=this.properties,propKeys=[].concat(babelHelpers.toConsumableArray(Object.getOwnPropertyNames(props)),babelHelpers.toConsumableArray("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])),_iterator5=_createForOfIteratorHelper(propKeys),_step5;// support symbols in properties (IE11 does not support this)
try{// This for/of is ok because propKeys is an array
for(_iterator5.s();!(_step5=_iterator5.n()).done;){var p=_step5.value;// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(p,props[p])}}catch(err){_iterator5.e(err)}finally{_iterator5.f()}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */},{key:"_attributeNameForProperty",value:function _attributeNameForProperty(name,options){var attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */},{key:"_valueHasChanged",value:function _valueHasChanged(value,old){var hasChanged=2<arguments.length&&arguments[2]!==void 0?arguments[2]:notEqual;return hasChanged(value,old)}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */},{key:"_propertyValueFromAttribute",value:function _propertyValueFromAttribute(value,options){var type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */},{key:"_propertyValueToAttribute",value:function _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}var type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}},{key:"observedAttributes",get:function get(){var _this9=this;// note: piggy backing on this to ensure we're finalized.
this.finalize();var attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach(function(v,p){var attr=_this9._attributeNameForProperty(p,v);if(attr!==void 0){_this9._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}}]);return UpdatingElement}(/*#__PURE__*/babelHelpers.wrapNativeSuper(HTMLElement));_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;_a=finalized;/**
                 * Marks class as having finished creating properties.
                 */UpdatingElement[_a]=!0;var updatingElement={__proto__:null,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$updatingElement=updatingElement;var legacyCustomElement=function legacyCustomElement(tagName,clazz){window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz},standardCustomElement=function standardCustomElement(tagName,descriptor){var kind=descriptor.kind,elements=descriptor.elements;return{kind:kind,elements:elements,// This callback is called once the class is otherwise fully defined
finisher:function finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=function customElement(tagName){return function(classOrDescriptor){return"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor)}};_exports.customElement$1=_exports.customElement=customElement;var standardProperty=function standardProperty(options,element){// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign(Object.assign({},element),{finisher:function finisher(clazz){clazz.createProperty(element.key,options)}})}else{// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer:function initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher:function finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=function legacyProperty(options,proto,name){proto.constructor.createProperty(name,options)};/**
    * A property decorator which creates a LitElement property which reflects a
    * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
    * supplied to configure property features.
    *
    * This decorator should only be used for public fields. Private or protected
    * fields should use the [[`internalProperty`]] decorator.
    *
    * @example
    * ```ts
    * class MyElement {
    *   @property({ type: Boolean })
    *   clicked = false;
    * }
    * ```
    * @category Decorator
    * @ExportDecoratedItems
    */function property(options){// tslint:disable-next-line:no-any decorator
return function(protoOrDescriptor,name){return name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}}/**
   * Declares a private or protected property that still triggers updates to the
   * element when it changes.
   *
   * Properties declared this way must not be used from HTML or HTML templating
   * systems, they're solely for properties internal to the element. These
   * properties may be renamed by optimization tools like closure compiler.
   * @category Decorator
   */function internalProperty(options){return property({attribute:!1,hasChanged:null===options||void 0===options?void 0:options.hasChanged})}/**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   * @param cache An optional boolean which when true performs the DOM query only
   * once and caches the result.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
   *
   * @example
   *
   * ```ts
   * class MyElement {
   *   @query('#first')
   *   first;
   *
   *   render() {
   *     return html`
   *       <div id="first"></div>
   *       <div id="second"></div>
   *     `;
   *   }
   * }
   * ```
   * @category Decorator
   */function query(selector,cache){return function(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name){var descriptor={get:function get(){return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};if(cache){var key="symbol"===babelHelpers.typeof(name)?Symbol():"__".concat(name);descriptor.get=function(){if(this[key]===void 0){this[key]=this.renderRoot.querySelector(selector)}return this[key]}}return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */function queryAsync(selector){return function(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name){var descriptor={get:function(){var _get=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this.updateComplete;case 2:return _context2.abrupt("return",this.renderRoot.querySelector(selector));case 3:case"end":return _context2.stop();}}},_callee2,this)}));function get(){return _get.apply(this,arguments)}return get}(),enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}/**
   * A property decorator that converts a class property into a getter
   * that executes a querySelectorAll on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   *
   * See:
   * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
   *
   * @example
   * ```ts
   * class MyElement {
   *   @queryAll('div')
   *   divs;
   *
   *   render() {
   *     return html`
   *       <div id="first"></div>
   *       <div id="second"></div>
   *     `;
   *   }
   * }
   * ```
   * @category Decorator
   */function queryAll(selector){return function(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name){var descriptor={get:function get(){return this.renderRoot.querySelectorAll(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}var legacyQuery=function legacyQuery(descriptor,proto,name){Object.defineProperty(proto,name,descriptor)},standardQuery=function standardQuery(descriptor,element){return{kind:"method",placement:"prototype",key:element.key,descriptor:descriptor}},standardEventOptions=function standardEventOptions(options,element){return Object.assign(Object.assign({},element),{finisher:function finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options,proto,name){Object.assign(proto[name],options)};/**
    * Adds event listener options to a method used as an event listener in a
    * lit-html template.
    *
    * @param options An object that specifies event listener options as accepted by
    * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
    *
    * Current browsers support the `capture`, `passive`, and `once` options. See:
    * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
    *
    * @example
    * ```ts
    * class MyElement {
    *   clicked = false;
    *
    *   render() {
    *     return html`
    *       <div @click=${this._onClick}`>
    *         <button></button>
    *       </div>
    *     `;
    *   }
    *
    *   @eventOptions({capture: true})
    *   _onClick(e) {
    *     this.clicked = true;
    *   }
    * }
    * ```
    * @category Decorator
    */function eventOptions(options){// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
return function(protoOrDescriptor,name){return name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor)}}// x-browser support for matches
// tslint:disable-next-line:no-any
var ElementProto=Element.prototype,legacyMatches=ElementProto.msMatchesSelector||ElementProto.webkitMatchesSelector;/**
                                                                                             * A property decorator that converts a class property into a getter that
                                                                                             * returns the `assignedNodes` of the given named `slot`. Note, the type of
                                                                                             * this property should be annotated as `NodeListOf<HTMLElement>`.
                                                                                             *
                                                                                             * @param slotName A string name of the slot.
                                                                                             * @param flatten A boolean which when true flattens the assigned nodes,
                                                                                             * meaning any assigned nodes that are slot elements are replaced with their
                                                                                             * assigned nodes.
                                                                                             * @param selector A string which filters the results to elements that match
                                                                                             * the given css selector.
                                                                                             *
                                                                                             * * @example
                                                                                             * ```ts
                                                                                             * class MyElement {
                                                                                             *   @queryAssignedNodes('list', true, '.item')
                                                                                             *   listItems;
                                                                                             *
                                                                                             *   render() {
                                                                                             *     return html`
                                                                                             *       <slot name="list"></slot>
                                                                                             *     `;
                                                                                             *   }
                                                                                             * }
                                                                                             * ```
                                                                                             * @category Decorator
                                                                                             */function queryAssignedNodes(){var slotName=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",flatten=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,selector=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"";return function(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name){var descriptor={get:function get(){var slotSelector="slot".concat(slotName?"[name=".concat(slotName,"]"):":not([name])"),slot=this.renderRoot.querySelector(slotSelector),nodes=slot&&slot.assignedNodes({flatten:flatten});if(nodes&&selector){nodes=nodes.filter(function(node){return node.nodeType===Node.ELEMENT_NODE&&node.matches?node.matches(selector):legacyMatches.call(node,selector)})}return nodes},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}var decorators={__proto__:null,customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes};/**
   @license
   Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */ /**
       * Whether the current browser supports `adoptedStyleSheets`.
       */_exports.$decorators=decorators;var supportsAdoptingStyleSheets=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;var constructionToken=Symbol(),CSSResult=/*#__PURE__*/function(){function CSSResult(cssText,safeToken){babelHelpers.classCallCheck(this,CSSResult);if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
babelHelpers.createClass(CSSResult,[{key:"toString",value:function toString(){return this.cssText}},{key:"styleSheet",get:function get(){if(this._styleSheet===void 0){// Note, if `supportsAdoptingStyleSheets` is true then we assume
// CSSStyleSheet is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}}]);return CSSResult}();_exports.CSSResult$1=_exports.CSSResult=CSSResult;/**
   * Wrap a value for interpolation in a [[`css`]] tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */var unsafeCSS=function unsafeCSS(value){return new CSSResult(value+"",constructionToken)};_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;var textFromCSSResult=function textFromCSSResult(value){if(babelHelpers.instanceof(value,CSSResult)){return value.cssText}else if("number"===typeof value){return value}else{throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))}},css=function css(strings){for(var _len3=arguments.length,values=Array(1<_len3?_len3-1:0),_key3=1;_key3<_len3;_key3++){values[_key3-1]=arguments[_key3]}var cssText=values.reduce(function(acc,v,idx){return acc+textFromCSSResult(v)+strings[idx+1]},strings[0]);return new CSSResult(cssText,constructionToken)};/**
    * Template tag which which can be used with LitElement's [[LitElement.styles |
    * `styles`]] property to set element styles. For security reasons, only literal
    * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
    * may be used inside a template string part.
    */_exports.css$1=_exports.css=css;var cssTag={__proto__:null,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
_exports.$cssTag=cssTag;(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");/**
                                                                                      * Sentinal value used to avoid calling lit-html's render function when
                                                                                      * subclasses do not implement `render`
                                                                                      */var renderNotImplemented={},LitElement=/*#__PURE__*/function(_UpdatingElement){babelHelpers.inherits(LitElement,_UpdatingElement);var _super5=_createSuper(LitElement);function LitElement(){babelHelpers.classCallCheck(this,LitElement);return _super5.apply(this,arguments)}babelHelpers.createClass(LitElement,[{key:"initialize",/**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */value:function initialize(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"initialize",this).call(this);this.constructor._getUniqueStyles();this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&babelHelpers.instanceof(this.renderRoot,window.ShadowRoot)){this.adoptStyles()}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */},{key:"createRenderRoot",value:function createRenderRoot(){return this.attachShadow({mode:"open"})}/**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */},{key:"adoptStyles",value:function adoptStyles(){var styles=this.constructor._styles;if(0===styles.length){return}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function(s){return s.cssText}),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(function(s){return babelHelpers.instanceof(s,CSSStyleSheet)?s:s.styleSheet})}else{// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=!0}}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"connectedCallback",this).call(this);// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */},{key:"update",value:function update(changedProperties){var _this10=this,templateResult=this.render();babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"update",this).call(this,changedProperties);// If render is not implemented by the component, don't call lit-html render
if(templateResult!==renderNotImplemented){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(function(s){var style=document.createElement("style");style.textContent=s.cssText;_this10.renderRoot.appendChild(style)})}}/**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */},{key:"render",value:function render(){return renderNotImplemented}}],[{key:"getStyles",/**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */value:function getStyles(){return this.styles}/** @nocollapse */},{key:"_getUniqueStyles",value:function _getUniqueStyles(){// Only gather styles once per class
if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){return}// Take care not to call `this.getStyles()` multiple times since this
// generates new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
var userStyles=this.getStyles();if(Array.isArray(userStyles)){// De-duplicate styles preserving the _last_ instance in the set.
// This is a performance optimization to avoid duplicated styles that can
// occur especially when composing via subclassing.
// The last item is kept to try to preserve the cascade order with the
// assumption that it's most important that last added styles override
// previous styles.
var addStyles=function addStyles(styles,set){return styles.reduceRight(function(set,s){return(// Note: On IE set.add() does not return the set
Array.isArray(s)?addStyles(s,set):(set.add(s),set))},set)},set=addStyles(userStyles,new Set),styles=[];// Array.from does not work on Set in IE, otherwise return
// Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
set.forEach(function(v){return styles.unshift(v)});this._styles=styles}else{this._styles=userStyles===void 0?[]:[userStyles]}// Ensure that there are no invalid CSSStyleSheet instances here. They are
// invalid in two conditions.
// (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
//     this is impossible to check except via .replaceSync or use
// (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
//     false)
this._styles=this._styles.map(function(s){if(babelHelpers.instanceof(s,CSSStyleSheet)&&!supportsAdoptingStyleSheets){// Flatten the cssText from the passed constructible stylesheet (or
// undetectable non-constructible stylesheet). The user might have
// expected to update their stylesheets over time, but the alternative
// is a crash.
var cssText=Array.prototype.slice.call(s.cssRules).reduce(function(css,rule){return css+rule.cssText},"");return unsafeCSS(cssText)}return s})}}]);return LitElement}(UpdatingElement);/**
                                  * Base element class that manages element properties and attributes, and
                                  * renders a lit-html template.
                                  *
                                  * To define a component, subclass `LitElement` and implement a
                                  * `render` method to provide the component's template. Define properties
                                  * using the [[`properties`]] property or the [[`property`]] decorator.
                                  */_exports.LitElement=LitElement;/**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   *
   * Note this property name is a string to prevent breaking Closure JS Compiler
   * optimizations. See updating-element.ts for more information.
   */LitElement.finalized=!0;/**
                                 * Reference to the underlying library method used to render the element's
                                 * DOM. By default, points to the `render` method from lit-html's shady-render
                                 * module.
                                 *
                                 * **Most users will never need to touch this property.**
                                 *
                                 * This  property should not be confused with the `render` instance method,
                                 * which should be overridden to define a template for the element.
                                 *
                                 * Advanced users creating a new base class based on LitElement can override
                                 * this property to point to a custom render method with a signature that
                                 * matches [shady-render's `render`
                                 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
                                 *
                                 * @nocollapse
                                 */LitElement.render=render$2;var litElement={__proto__:null,LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$litElement=litElement;var BaseElement=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(BaseElement,_LitElement);var _super6=_createSuper(BaseElement);function BaseElement(){var _this11;babelHelpers.classCallCheck(this,BaseElement);_this11=_super6.apply(this,arguments);_this11.debug=!1;return _this11}babelHelpers.createClass(BaseElement,[{key:"performUpdate",value:function(){var _performUpdate=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return new Promise(function(resolve){return requestAnimationFrame(function(){return resolve()})});case 2:return _context3.abrupt("return",babelHelpers.get(babelHelpers.getPrototypeOf(BaseElement.prototype),"performUpdate",this).call(this));case 3:case"end":return _context3.stop();}}},_callee3,this)}));function performUpdate(){return _performUpdate.apply(this,arguments)}return performUpdate}()},{key:"__logger",value:function __logger(logLevel,message){for(var _console,tagName=(this.tagName+"").toLowerCase(),_len4=arguments.length,restParam=Array(2<_len4?_len4-2:0),_key4=2;_key4<_len4;_key4++){restParam[_key4-2]=arguments[_key4]}(_console=console)[logLevel].apply(_console,["%c<%s>%c ".concat(message),"color: #4CAF50; font-size: 1.2em;",tagName,"color: inherit;font-size: 1em"].concat(restParam))}},{key:"log",value:function log(message){for(var _len5=arguments.length,restParam=Array(1<_len5?_len5-1:0),_key5=1;_key5<_len5;_key5++){restParam[_key5-1]=arguments[_key5]}this.__logger.apply(this,["log",message].concat(restParam))}},{key:"_log",value:function _log(message){if(this.debug){for(var _len6=arguments.length,restParam=Array(1<_len6?_len6-1:0),_key6=1;_key6<_len6;_key6++){restParam[_key6-1]=arguments[_key6]}this.log.apply(this,[message].concat(restParam))}}},{key:"_warn",value:function _warn(message){for(var _len7=arguments.length,restParam=Array(1<_len7?_len7-1:0),_key7=1;_key7<_len7;_key7++){restParam[_key7-1]=arguments[_key7]}this.__logger.apply(this,["warn",message].concat(restParam))}},{key:"_error",value:function _error(message){for(var _len8=arguments.length,restParam=Array(1<_len8?_len8-1:0),_key8=1;_key8<_len8;_key8++){restParam[_key8-1]=arguments[_key8]}this.__logger.apply(this,["error",message].concat(restParam))}},{key:"_l10nNumber",value:function _l10nNumber(number){return new Intl.NumberFormat(this.lang).format(number)}},{key:"_fire",value:function _fire(eventName,detail){var bubbles=2<arguments.length&&arguments[2]!==void 0?arguments[2]:!1;this._log("fire %s {%o}",eventName,detail);this.dispatchEvent(new CustomEvent(eventName,{detail:detail,bubbles:bubbles,composed:bubbles}))}}]);return BaseElement}(LitElement);_exports.BaseElement=BaseElement;__decorate([property({type:Boolean,reflect:!0})],BaseElement.prototype,"debug",void 0);var baseElement={__proto__:null,BaseElement:BaseElement};// export const baseStyle = css`
//   body {
//     margin: 0;
//     background-color: rgb(98, 0, 238);
//     font-family: "open Sans", "Tahoma";
//   }
//   p {
//     margin: 0;
//   }
//   .app {
//     margin: 100px auto;
//     width: 320px;
//   }
// `;
_exports.$baseElement=baseElement;var calendarBaseStyle=css(_templateObject_d1b7ac50f70311eba9769dd77e1add8c());_exports.calendarBaseStyle=calendarBaseStyle;var baseStyle={__proto__:null,calendarBaseStyle:calendarBaseStyle};_exports.$baseStyle=baseStyle;var ClassList=/*#__PURE__*/function(){function ClassList(element){babelHelpers.classCallCheck(this,ClassList);this.classes=new Set;this.changed=!1;this.element=element;var classList=(element.getAttribute("class")||"").split(/\s+/),_iterator6=_createForOfIteratorHelper(classList),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var cls=_step6.value;this.classes.add(cls)}}catch(err){_iterator6.e(err)}finally{_iterator6.f()}}babelHelpers.createClass(ClassList,[{key:"add",value:function add(cls){this.classes.add(cls);this.changed=!0}},{key:"remove",value:function remove(cls){this.classes.delete(cls);this.changed=!0}},{key:"commit",value:function commit(){if(this.changed){var classString="";this.classes.forEach(function(cls){return classString+=cls+" "});this.element.setAttribute("class",classString)}}}]);return ClassList}(),previousClassesCache=new WeakMap,classMap=directive(function(classInfo){return function(part){if(!babelHelpers.instanceof(part,AttributePart)||babelHelpers.instanceof(part,PropertyPart)||"class"!==part.committer.name||1<part.committer.parts.length){throw new Error("The `classMap` directive must be used in the `class` attribute "+"and must be the only part in the attribute.")}var committer=part.committer,element=committer.element,previousClasses=previousClassesCache.get(part);if(previousClasses===void 0){// Write static classes once
// Use setAttribute() because className isn't a string on SVG elements
element.setAttribute("class",committer.strings.join(" "));previousClassesCache.set(part,previousClasses=new Set)}var classList=element.classList||new ClassList(element);// Remove old classes that no longer apply
// We use forEach() instead of for-of so that re don't require down-level
// iteration.
previousClasses.forEach(function(name){if(!(name in classInfo)){classList.remove(name);previousClasses.delete(name)}});// Add or remove classes based on their classMap value
for(var name in classInfo){var value=classInfo[name];if(value!=previousClasses.has(name)){// We explicitly want a loose truthy check of `value` because it seems
// more convenient that '' and 0 are skipped.
if(value){classList.add(name);previousClasses.add(name)}else{classList.remove(name);previousClasses.delete(name)}}}if("function"===typeof classList.commit){classList.commit()}}});/**
   * Stores the ClassInfo object applied to a given AttributePart.
   * Used to unset existing values when a new ClassInfo object is applied.
   */_exports.classMap=classMap;var classMap$1={__proto__:null,classMap:classMap};_exports.$classMap=classMap$1;var MonthList=/*#__PURE__*/function(_BaseElement){babelHelpers.inherits(MonthList,_BaseElement);var _super7=_createSuper(MonthList);function MonthList(){var _this12;babelHelpers.classCallCheck(this,MonthList);_this12=_super7.call(this);_this12.activeMonthNumber=1;document.addEventListener("current-month-changed",_this12.onCurrentMonthChanged.bind(babelHelpers.assertThisInitialized(_this12)));return _this12}babelHelpers.createClass(MonthList,[{key:"disconnectedCallback",value:function disconnectedCallback(){document.removeEventListener("current-month-changed",this.onCurrentMonthChanged.bind(this));babelHelpers.get(babelHelpers.getPrototypeOf(MonthList.prototype),"disconnectedCallback",this).call(this)}},{key:"shouldUpdate",value:function shouldUpdate(){this._log("shouldUpdate");return Array.isArray(this.monthList)&&0<this.monthList.length}},{key:"render",value:function render(){var _this13=this;this._log("render");return html(_templateObject2_d1b7ac50f70311eba9769dd77e1add8c(),this.monthList.map(function(month,index){return html(_templateObject3_d1b7ac50f70311eba9769dd77e1add8c(),_this13.activeMonthNumber===index+1,function(){_this13.activeMonthNumber=index+1;_this13._fire("month-changed-to",index+1)},month.shortName?month.shortName:month.name)}))}},{key:"onCurrentMonthChanged",value:function onCurrentMonthChanged(event){this._log("onCurrentMonthChanged");event.stopPropagation();if(!event.detail)return;var _event=event;this.activeMonthNumber=_event.detail}}]);return MonthList}(BaseElement);_exports.MonthList=MonthList;MonthList.styles=css(_templateObject4_d1b7ac50f70311eba9769dd77e1add8c());__decorate([property({type:Array})],MonthList.prototype,"monthList",void 0);__decorate([property({type:Number,attribute:"active-month"})],MonthList.prototype,"activeMonthNumber",void 0);_exports.MonthList=MonthList=__decorate([customElement("month-list")],MonthList);var monthList={__proto__:null,get MonthList(){return MonthList}};_exports.$monthList=monthList;var YearList=/*#__PURE__*/function(_BaseElement2){babelHelpers.inherits(YearList,_BaseElement2);var _super8=_createSuper(YearList);function YearList(){var _this14;babelHelpers.classCallCheck(this,YearList);_this14=_super8.call(this);document.addEventListener("current-year-changed",_this14.onCurrentYearChanged.bind(babelHelpers.assertThisInitialized(_this14)));return _this14}babelHelpers.createClass(YearList,[{key:"disconnectedCallback",value:function disconnectedCallback(){document.removeEventListener("current-year-changed",this.onCurrentYearChanged.bind(this));babelHelpers.get(babelHelpers.getPrototypeOf(YearList.prototype),"disconnectedCallback",this).call(this)}},{key:"shouldUpdate",value:function shouldUpdate(){this._log("shouldUpdate");if(!(this.currentYear&&this.minYear&&this.maxYear)){return!1}return!0}},{key:"update",value:function update(changedProperties){this._log("update");if(changedProperties.has("currentYear")){this.calculateYearList()}babelHelpers.get(babelHelpers.getPrototypeOf(YearList.prototype),"update",this).call(this,changedProperties)}},{key:"render",value:function render(){var _this15=this;this._log("render");return html(_templateObject5_d1b7ac50f70311eba9769dd77e1add8c(),this.yearList.map(function(year){return html(_templateObject6_d1b7ac50f70311eba9769dd77e1add8c(),_this15.activeYear===year,function(){_this15.activeYear=year;_this15._fire("year-changed-to",year)},year)}))}},{key:"onCurrentYearChanged",value:function onCurrentYearChanged(event){this._log("onCurrentYearChanged");event.stopPropagation();if(!event.detail)return;var _event=event;this.currentYear=this.activeYear=_event.detail}},{key:"calculateYearList",value:function calculateYearList(){this._log("calculateYearList");var currentYear=this.currentYear,minYear=this.minYear,maxYear=this.maxYear,decade=currentYear-currentYear%10;// FIXME:
if(currentYear>maxYear||currentYear<minYear)return;if(currentYear===maxYear){decade=maxYear-10;this.yearList=Array.from({length:11},function(_item,index){return decade+index});return}if(10===maxYear-decade){this.yearList=Array.from({length:11},function(_item,index){return decade+index});return}if(decade+9>maxYear){this.yearList=Array.from({length:maxYear-currentYear+1},function(_item,index){return decade+index});return}this.yearList=Array.from({length:10},function(_item,index){return decade+index});this.activeYear=currentYear}}]);return YearList}(BaseElement);_exports.YearList=YearList;YearList.styles=css(_templateObject7_d1b7ac50f70311eba9769dd77e1add8c());__decorate([property({type:Number})],YearList.prototype,"currentYear",void 0);__decorate([property({type:Number})],YearList.prototype,"activeYear",void 0);__decorate([property({type:Number})],YearList.prototype,"maxYear",void 0);__decorate([property({type:Number})],YearList.prototype,"minYear",void 0);_exports.YearList=YearList=__decorate([customElement("year-list")],YearList);var yearList={__proto__:null,get YearList(){return YearList}};_exports.$yearList=yearList;var DecadeList=/*#__PURE__*/function(_BaseElement3){babelHelpers.inherits(DecadeList,_BaseElement3);var _super9=_createSuper(DecadeList);function DecadeList(){var _this16;babelHelpers.classCallCheck(this,DecadeList);_this16=_super9.call(this);_this16.decadeList=[];_this16.activeDecade=[];document.addEventListener("current-year-changed",_this16.onCurrentYearChanged.bind(babelHelpers.assertThisInitialized(_this16)));return _this16}babelHelpers.createClass(DecadeList,[{key:"disconnectedCallback",value:function disconnectedCallback(){document.removeEventListener("current-year-changed",this.onCurrentYearChanged.bind(this));babelHelpers.get(babelHelpers.getPrototypeOf(DecadeList.prototype),"disconnectedCallback",this).call(this)}},{key:"shouldUpdate",value:function shouldUpdate(){this._log("shouldUpdate");if(!(this.currentYear&&this.minYear&&this.maxYear)){return!1}return!0}},{key:"update",value:function update(changedProperties){this._log("update");if(changedProperties.has("minYear")||changedProperties.has("maxYear")){this.createDedcadeList(this.minYear,this.maxYear)}babelHelpers.get(babelHelpers.getPrototypeOf(DecadeList.prototype),"update",this).call(this,changedProperties)}},{key:"render",value:function render(){var _this17=this;this._log("render");var year=this.currentYear,decadeStart=year-year%10,targeIndex=this.decadeList.findIndex(function(item){return item[0]===decadeStart});// It will happen when the user select the maxYear
if(-1===targeIndex){targeIndex=this.decadeList.findIndex(function(item){return item[1]===decadeStart})}this.activeDecade=this.decadeList[targeIndex];if(0===targeIndex){return html(_templateObject8_d1b7ac50f70311eba9769dd77e1add8c(),this.decadeList.slice(0,3).map(function(decade){return html(_templateObject9_d1b7ac50f70311eba9769dd77e1add8c(),decade[0]===decadeStart,function(){_this17._fire("decade-changed-to",decade)},decade[0],decade[1])}))}if(targeIndex===this.decadeList.length-1){return html(_templateObject10_d1b7ac50f70311eba9769dd77e1add8c(),this.decadeList.slice(this.decadeList.length-3).map(function(decade){return html(_templateObject11_d1b7ac50f70311eba9769dd77e1add8c(),decade[0]===decadeStart||decade[1]===_this17.maxYear,function(){_this17._fire("decade-changed-to",decade)},decade[0],decade[1])}))}return html(_templateObject12_d1b7ac50f70311eba9769dd77e1add8c(),this.decadeList.slice(targeIndex-1,targeIndex+2).map(function(decade){return html(_templateObject13_d1b7ac50f70311eba9769dd77e1add8c(),decade[0]===decadeStart,function(){_this17._fire("decade-changed-to",decade)},decade[0],decade[1])}))}},{key:"updated",value:function updated(){this._log("updated");this._fire("decade-changed",this.activeDecade)}},{key:"onCurrentYearChanged",value:function onCurrentYearChanged(event){this._log("onCurrentYearChanged");event.stopPropagation();if(!event.detail)return;var _event=event;this.currentYear=_event.detail}},{key:"createDedcadeList",value:function createDedcadeList(minYear,maxYear){this._log("createDedcadeList");if(minYear+9>maxYear){this.decadeList.push([minYear,maxYear]);return}this.decadeList.push([minYear,minYear+9]);var decadeCount=Math.floor((maxYear-minYear)/10);if(1===decadeCount){this.decadeList[1]=[this.decadeList[0][0]+1,maxYear];return}for(var i=1;i<decadeCount;i++){var startCurrentDedcade=this.decadeList[i-1][1]+1,dedcade=[startCurrentDedcade,startCurrentDedcade+9];this.decadeList.push(dedcade)}var lastDecade=this.decadeList[this.decadeList.length-1];if(0===lastDecade[1]-lastDecade[0]){this.decadeList.splice(this.decadeList.length-1,1)}this.decadeList[this.decadeList.length-1][1]=maxYear}}]);return DecadeList}(BaseElement);_exports.DecadeList=DecadeList;DecadeList.styles=css(_templateObject14_d1b7ac50f70311eba9769dd77e1add8c());__decorate([property({type:Number})],DecadeList.prototype,"currentYear",void 0);__decorate([property({type:Number})],DecadeList.prototype,"minYear",void 0);__decorate([property({type:Number})],DecadeList.prototype,"maxYear",void 0);_exports.DecadeList=DecadeList=__decorate([customElement("decade-list")],DecadeList);var decadeList={__proto__:null,get DecadeList(){return DecadeList}};_exports.$decadeList=decadeList;var calendar=svg(_templateObject15_d1b7ac50f70311eba9769dd77e1add8c());_exports.calendar=calendar;var arrowForward=svg(_templateObject16_d1b7ac50f70311eba9769dd77e1add8c());_exports.arrowForward=arrowForward;var arrowBackward=svg(_templateObject17_d1b7ac50f70311eba9769dd77e1add8c());_exports.arrowBackward=arrowBackward;var clock=svg(_templateObject18_d1b7ac50f70311eba9769dd77e1add8c());_exports.clock=clock;var icon={__proto__:null,calendar:calendar,arrowForward:arrowForward,arrowBackward:arrowBackward,clock:clock};_exports.$icon=icon;var HeaderElement=/*#__PURE__*/function(_BaseElement4){babelHelpers.inherits(HeaderElement,_BaseElement4);var _super10=_createSuper(HeaderElement);function HeaderElement(){var _this18;babelHelpers.classCallCheck(this,HeaderElement);_this18=_super10.apply(this,arguments);_this18.title="";_this18.disableNavigation=!1;_this18.calendarActiveView="calendar";return _this18}babelHelpers.createClass(HeaderElement,[{key:"render",value:function render(){this._log("render: %s",this.calendarActiveView);return html(_templateObject19_d1b7ac50f70311eba9769dd77e1add8c(),this.disableNavigation,this.onPrevArrowClick,arrowBackward,this.onTitleClick,this.title,this.disableNavigation,this.onNextArrowClick,arrowForward)}},{key:"onTitleClick",value:function onTitleClick(){this._log("onTitleClick");switch(this.calendarActiveView){case"calendar":this._fire("show-month-list",void 0);break;case"monthList":this._fire("show-year-list",void 0);break;case"yearList":this._fire("show-decade-list",void 0);break;case"decadeList":this._fire("show-year-list",void 0);break;default:this._warn("Invalid view");break;}}},{key:"onPrevArrowClick",value:function onPrevArrowClick(){this._log("onPrevArrowClick");switch(this.calendarActiveView){case"calendar":this._fire("prev-month",void 0);break;case"monthList":this._fire("prev-year",void 0);break;case"yearList":case"decadeList":this._fire("prev-decade",void 0);break;default:this._warn("Invalid view");break;}}},{key:"onNextArrowClick",value:function onNextArrowClick(){this._log("onNextArrowClick");switch(this.calendarActiveView){case"calendar":this._fire("next-month",void 0);break;case"monthList":this._fire("next-year",void 0);break;case"yearList":case"decadeList":this._fire("next-decade",void 0);break;default:this._warn("Invalid view");break;}}}]);return HeaderElement}(BaseElement);// FIX THEME & CSS VARs
_exports.HeaderElement=HeaderElement;HeaderElement.styles=css(_templateObject20_d1b7ac50f70311eba9769dd77e1add8c());__decorate([property({type:String})],HeaderElement.prototype,"title",void 0);__decorate([property({type:Boolean,attribute:"disable"})],HeaderElement.prototype,"disableNavigation",void 0);_exports.HeaderElement=HeaderElement=__decorate([customElement("header-element")],HeaderElement);var header={__proto__:null,get HeaderElement(){return HeaderElement}};_exports.$header=header;var addLeadingZero=function addLeadingZero(number){// return  number < 10 ? '0' + number : number.toString();
return number.toString().padStart(2,"0")};_exports.addLeadingZero=addLeadingZero;var addLeadingZero$1={__proto__:null,addLeadingZero:addLeadingZero};_exports.$addLeadingZero=addLeadingZero$1;var dateNow=new Date,ClockElement=/*#__PURE__*/function(_BaseElement5){babelHelpers.inherits(ClockElement,_BaseElement5);var _super11=_createSuper(ClockElement);function ClockElement(){var _this19;babelHelpers.classCallCheck(this,ClockElement);_this19=_super11.apply(this,arguments);_this19.time="".concat(addLeadingZero(dateNow.getHours()),":").concat(addLeadingZero(dateNow.getMinutes()),":").concat(addLeadingZero(dateNow.getSeconds()));_this19.timeArray=_this19.time.split(":").map(function(item){return parseInt(item)});_this19.focusedInputIndex=-1;return _this19}babelHelpers.createClass(ClockElement,[{key:"shouldUpdate",value:function shouldUpdate(){this._log("shouldUpdate");return 2===this.time.split(":").length||3===this.time.split(":").length}},{key:"update",value:function update(changedProperties){this._log("update");if(changedProperties.has("time")){this.timeArray=this.time.split(":").map(function(item){return parseInt(item)})}babelHelpers.get(babelHelpers.getPrototypeOf(ClockElement.prototype),"update",this).call(this,changedProperties)}},{key:"render",value:function render(){var _this20=this;this._log("render");return html(_templateObject21_d1b7ac50f70311eba9769dd77e1add8c(),30*(this.timeArray[0]%12)+.5*this.timeArray[1]-90,6*this.timeArray[1]-90,6*this.timeArray[2]-90,addLeadingZero(this.timeArray[0]),this.onInputBlur,this.onKeydown,this.onInput,function(){_this20.focusedInputIndex=0},addLeadingZero(this.timeArray[1]),this.onInputBlur,this.onKeydown,this.onInput,function(){_this20.focusedInputIndex=1},3===this.timeArray.length?html(_templateObject22_d1b7ac50f70311eba9769dd77e1add8c(),addLeadingZero(this.timeArray[2]),this.onInputBlur,this.onKeydown,this.onInput,function(){_this20.focusedInputIndex=2}):"")}},{key:"onInputBlur",value:function onInputBlur(event){var _a,_b;this._log("onInputBlur");var inputValue=(null===(_a=event.target)||void 0===_a?void 0:_a.value).trim(),inputName=null===(_b=event.target)||void 0===_b?void 0:_b.name;this.updateInputValue(inputName,parseInt(""===inputValue?"0":inputValue))}},{key:"onKeydown",value:function onKeydown(event){var _a,_b;this._log("onKeydown");if(!([8,9,13,35,36,37,39,38,40,46].includes(event.keyCode)||/[0-9]/.test(event.key))){event.preventDefault();return}if(13===event.keyCode){if(2===this.focusedInputIndex){this.inputElementList[this.focusedInputIndex].blur()}else{this.inputElementList[this.focusedInputIndex+1].focus()}return}var inputValue=null===(_a=event.target)||void 0===_a?void 0:_a.value,inputName=null===(_b=event.target)||void 0===_b?void 0:_b.name,changeFactor=38===event.keyCode?1:40===event.keyCode?-1:0;if(0===changeFactor&&!this.validClockInput(inputName,inputValue+event.key)){if(8!==event.keyCode)event.preventDefault();return}if(0===changeFactor)return;this.updateInputValue(inputName,parseInt(""===inputValue?"0":inputValue)+changeFactor);this._fire("time-changed",{stringTime:"".concat(addLeadingZero(this.timeArray[0]),":").concat(addLeadingZero(this.timeArray[1]),":").concat(addLeadingZero(this.timeArray[2])),arrayTime:this.timeArray},!0)}},{key:"onInput",value:function onInput(event){var _a,_b;this._log("onInput");var inputValue=(null===(_a=event.target)||void 0===_a?void 0:_a.value).trim(),inputName=null===(_b=event.target)||void 0===_b?void 0:_b.name;if(2>inputValue.length)return;this.updateInputValue(inputName,parseInt(inputValue))}},{key:"updateInputValue",value:function updateInputValue(inputName,value){this._log("updateAllInputValues");switch(inputName){case"hour":if(23<value)value=0;else if(0>value)value=23;this.hourInputElement.value=addLeadingZero(value);this.timeArray[0]=value;break;case"minute":if(59<value)value=0;else if(0>value)value=59;this.minuteInputElement.value=addLeadingZero(value);this.timeArray[1]=value;break;case"second":if(59<value)value=0;else if(0>value)value=59;this.secondInputElement.value=addLeadingZero(value);this.timeArray[2]=value;break;}this.requestUpdate()}},{key:"validClockInput",value:function validClockInput(inputName,value){var integerValue=parseInt(""===value?"0":value);return"hour"===inputName&&24>integerValue&&-1<integerValue||("minute"===inputName||"second"===inputName)&&60>integerValue&&-1<integerValue}}]);return ClockElement}(BaseElement);_exports.ClockElement=ClockElement;ClockElement.styles=css(_templateObject23_d1b7ac50f70311eba9769dd77e1add8c());__decorate([property({type:String})],ClockElement.prototype,"time",void 0);__decorate([query("input[name=\"hour\"]")],ClockElement.prototype,"hourInputElement",void 0);__decorate([query("input[name=\"minute\"]")],ClockElement.prototype,"minuteInputElement",void 0);__decorate([query("input[name=\"second\"]")],ClockElement.prototype,"secondInputElement",void 0);__decorate([queryAll("input")],ClockElement.prototype,"inputElementList",void 0);_exports.ClockElement=ClockElement=__decorate([customElement("clock-element")],ClockElement);var clock$1={__proto__:null,get ClockElement(){return ClockElement}};_exports.$clock=clock$1;var WeekLabelList=/*#__PURE__*/function(_BaseElement6){babelHelpers.inherits(WeekLabelList,_BaseElement6);var _super12=_createSuper(WeekLabelList);function WeekLabelList(){var _this21;babelHelpers.classCallCheck(this,WeekLabelList);_this21=_super12.apply(this,arguments);_this21.useShortName=!1;return _this21}babelHelpers.createClass(WeekLabelList,[{key:"shouldUpdate",value:function shouldUpdate(){this._log("shouldUpdate");return Array.isArray(this.weekLabelList)&&0<this.weekLabelList.length}},{key:"render",value:function render(){var _this22=this;this._log("render");return html(_templateObject24_d1b7ac50f70311eba9769dd77e1add8c(),this.weekLabelList.map(function(week){return html(_templateObject25_d1b7ac50f70311eba9769dd77e1add8c(),_this22.useShortName?week.shortName:week.name)}))}}]);return WeekLabelList}(BaseElement);_exports.WeekLabelList=WeekLabelList;WeekLabelList.styles=css(_templateObject26_d1b7ac50f70311eba9769dd77e1add8c());__decorate([property({type:Array})],WeekLabelList.prototype,"weekLabelList",void 0);__decorate([property({type:Boolean,attribute:"short-name"})],WeekLabelList.prototype,"useShortName",void 0);_exports.WeekLabelList=WeekLabelList=__decorate([customElement("week-labels")],WeekLabelList);var weekLabels={__proto__:null,get WeekLabelList(){return WeekLabelList}};_exports.$weekLabels=weekLabels;var CalendarBaseElement=/*#__PURE__*/function(_BaseElement7){babelHelpers.inherits(CalendarBaseElement,_BaseElement7);var _super13=_createSuper(CalendarBaseElement);function CalendarBaseElement(){var _this23;babelHelpers.classCallCheck(this,CalendarBaseElement);_this23=_super13.apply(this,arguments);_this23.activeView="calendar";_this23.selectedDateList=[];_this23.shortWeekLabel=!0;_this23.rangePicker=!1;_this23.timePicker=!1;_this23.onlyShowCurrentMonthDays=!1;_this23.hideLastFadedRow=!1;_this23.highlightToday=!0;_this23.monthsDaysCount=[];_this23.monthList=[];_this23.calendarInitDate=[];_this23.calendarActiveDate=[];_this23.calendarGregorianInitDate=[];_this23.calendarOnScreenDate=[];_this23.selectedDayList=[];_this23.calendarWeekList=[];_this23.leapMonthIndex=11;_this23.minDateArray=[];_this23.maxDateArray=[];return _this23}babelHelpers.createClass(CalendarBaseElement,[{key:"shouldUpdate",value:function shouldUpdate(){if(!(this.initDate&&(3===this.initDate.split("-").length||3===this.initDate.split("/").length)&&this.minDate&&(3===this.minDate.split("-").length||3===this.minDate.split("/").length)&&this.maxDate&&(3===this.maxDate.split("-").length||3===this.maxDate.split("/").length))){this._warn("Invalid date format: %o",{initDate:this.initDate,minDate:this.minDate,maxDate:this.maxDate});return!1}return!0}},{key:"render",value:function render(){var _this24=this;this._log("render");var today=this.ifActiveDateExist()?this.calendarInitDate[2]:-1;return html(_templateObject27_d1b7ac50f70311eba9769dd77e1add8c(),"clock"===this.activeView,this.prevMonth,this.nextMonth,this.prevYear,this.nextYear,this.prevDecade,this.nextDecade,function(){_this24.activeView="monthList"},function(){_this24.activeView="yearList"},function(){_this24.activeView="decadeList"},"calendar"!==this.activeView,this.weekDayList,this.calendarWeekList.map(function(week,index){return html(_templateObject28_d1b7ac50f70311eba9769dd77e1add8c(),week.map(function(day){return _this24.getWeekDaysTemplate(day,index,today)}))}),"monthList"!==this.activeView,this.monthList,this.onMonthChangedTo,"yearList"!==this.activeView,this.calendarOnScreenDate[0],this.minDateArray[0],this.maxDateArray[0],this.onYearChangedTo,"decadeList"!==this.activeView,this.calendarOnScreenDate[0],this.minDateArray[0],this.maxDateArray[0],this.onDedcadeChangedTo,this.decadeChanged,"clock"!==this.activeView,this.timePicker?html(_templateObject29_d1b7ac50f70311eba9769dd77e1add8c(),function(){"clock"===_this24.activeView?_this24.activeView="calendar":_this24.activeView="clock"},"clock"===this.activeView?arrowBackward:clock):"")}},{key:"firstUpdated",value:function firstUpdated(changedProperties){babelHelpers.get(babelHelpers.getPrototypeOf(CalendarBaseElement.prototype),"firstUpdated",this).call(this,changedProperties);this._log("firstUpdated");this._fire("current-month-changed",this.calendarOnScreenDate[1],!0)}},{key:"updated",value:function updated(changedProperties){this._log("updated");if(changedProperties.has("activeView")){this.handleHeaderTitle()}// Prevent re-rendering when shortWeekLabel is changed
if(changedProperties.has("shortWeekLabel")){if(!this.shortWeekLabel){this.weekLabelsElement.removeAttribute("short-name")}else{this.weekLabelsElement.setAttribute("short-name","")}}if(2===this.selectedDateList.length){this.removeSomeClassFormDayElementList(["in-range-date-highlight","selected-date","range-edge-day","range-edge-day-start","range-edge-day-end"]);this.highlightInRangeDayList()}}},{key:"getWeekDaysTemplate",value:function getWeekDaysTemplate(day,index,today){// this._log('getCalendarWeekTemplate');
var notForThisMonth=0===index&&7<day||2<index&&15>day,classList={"calendar-day":!0,fade:0===index&&7<day||2<index&&15>day,"current-date-highlight":this.highlightToday&&today===day,"selected-date":!notForThisMonth&&this.selectedDateList[0]&&this.selectedDateList[0][2]===day&&this.calendarOnScreenDate[1]===this.selectedDateList[0][1]&&this.calendarOnScreenDate[0]===this.selectedDateList[0][0]};return html(_templateObject30_d1b7ac50f70311eba9769dd77e1add8c(),classMap(classList),!notForThisMonth?[this.calendarOnScreenDate[0],this.calendarOnScreenDate[1],day]:void 0,this.onDayClick,this.onlyShowCurrentMonthDays&&notForThisMonth?"":day)}},{key:"onDayClick",value:function onDayClick(event){var _a;this._log("onDayClick");var currentDate=null===(_a=event.currentTarget)||void 0===_a?void 0:_a.date;if(!currentDate)return;this._fire("date-changed",currentDate.join("-"));if(!this.rangePicker){event.currentTarget.classList.add("selected-date");this.selectedDateList=[currentDate]}else{this.selectedDateList.push(currentDate);event.currentTarget.classList.add("selected-date");if(2===this.selectedDateList.length){this.selectedDateList=babelHelpers.toConsumableArray(this.selectedDateList);this._log("onDayClick: %o",this.selectedDateList)}if(2<this.selectedDateList.length){this.removeSomeClassFormDayElementList(["in-range-date-highlight","selected-date","range-edge-day","range-edge-day-start","range-edge-day-end"]);this.selectedDateList=[]}}}},{key:"highlightInRangeDayList",value:function highlightInRangeDayList(){this._log("highlightInRangeDayList");if(this.selectedDateList[0][0]>this.selectedDateList[1][0]||this.selectedDateList[0][0]===this.selectedDateList[1][0]&&this.selectedDateList[0][1]>this.selectedDateList[1][1]||this.selectedDateList[0][0]===this.selectedDateList[1][0]&&this.selectedDateList[0][1]===this.selectedDateList[1][1]&&this.selectedDateList[0][2]>this.selectedDateList[1][2]){this.selectedDateList.reverse()}for(var calendarDayElementListArray=Array.from(this.calendarDayElementList),_i4=0,_calendarDayElementLi=calendarDayElementListArray,dayElement;_i4<_calendarDayElementLi.length;_i4++){dayElement=_calendarDayElementLi[_i4];if(!dayElement.date)continue;this.checkEdgeSelectedDate(dayElement);if(!this.isInRange(dayElement.date))continue;dayElement.classList.add("in-range-date-highlight")}}},{key:"checkEdgeSelectedDate",value:function checkEdgeSelectedDate(dayElement){// this._log('checkEdgeSelectedDate');
var rangeStartEdge=this.isEdgeSelectedDate(0,dayElement.date),rangeEndEdge=this.isEdgeSelectedDate(1,dayElement.date);// Example: [[1399, 7, 30], [1399, 7, 30]]
if(rangeStartEdge&&rangeEndEdge){dayElement.classList.add("range-edge-day");return}if(rangeStartEdge){dayElement.classList.add("range-edge-day","range-edge-day-start")}else if(rangeEndEdge){dayElement.classList.add("range-edge-day","range-edge-day-end")}}},{key:"isEdgeSelectedDate",value:function isEdgeSelectedDate(index,date){return this.selectedDateList[index][0]===date[0]&&this.selectedDateList[index][1]===date[1]&&this.selectedDateList[index][2]===date[2]}},{key:"isInRange",value:function isInRange(dayDate){// this._log('ifIsInRange');
return(this.selectedDateList[0][0]<=dayDate[0]&&this.selectedDateList[0][1]<dayDate[1]||this.selectedDateList[0][1]===dayDate[1]&&this.selectedDateList[0][2]<dayDate[2])&&(this.selectedDateList[1][0]>=dayDate[0]&&this.selectedDateList[1][1]>dayDate[1]||this.selectedDateList[1][1]===dayDate[1]&&this.selectedDateList[1][2]>dayDate[2])}},{key:"sortRangeSelectedDates",value:function sortRangeSelectedDates(selectedDates){if(!selectedDates)return[];this._log("sortRangeSelectedDates");var startDate=Date.parse(selectedDates[0].toString()),endDate=Date.parse(selectedDates[1].toString());return startDate>endDate?[selectedDates[1],selectedDates[0]]:selectedDates}},{key:"removeSomeClassFormDayElementList",value:function removeSomeClassFormDayElementList(classNameList){this._log("removeSomeClassFormDayElementList");Array.from(this.calendarDayElementList).map(function(dayElement){var _dayElement$classList;(_dayElement$classList=dayElement.classList).remove.apply(_dayElement$classList,babelHelpers.toConsumableArray(classNameList))})}},{key:"ifActiveDateExist",value:function ifActiveDateExist(){this._log("ifActiveDateExist");return this.calendarActiveDate[0]===this.calendarOnScreenDate[0]&&this.calendarActiveDate[1]===this.calendarOnScreenDate[1]}},{key:"calculateCalendarWeekList",value:function calculateCalendarWeekList(){this._log("calculateCalendarWeekList");this._fire("current-month-changed",this.calendarOnScreenDate[1],!0);this._fire("current-year-changed",this.calendarOnScreenDate[0],!0);this.removeSomeClassFormDayElementList(["selected-date"]);this.requestUpdate()}},{key:"prevMonth",value:function prevMonth(){this._log("prevMonth");if(0===this.calendarOnScreenDate[1]-1){if(this.calendarOnScreenDate[0]-1>this.minDateArray[0]){this.calendarOnScreenDate=[this.calendarOnScreenDate[0]-1,12,1]}else{this.calendarOnScreenDate=this.minDateArray}}else{this.calendarOnScreenDate=[this.calendarOnScreenDate[0],--this.calendarOnScreenDate[1],1]}this.calculateCalendarWeekList();this.handleHeaderTitle()}},{key:"nextMonth",value:function nextMonth(){this._log("nextMonth");if(12<this.calendarOnScreenDate[1]+1){if(this.calendarOnScreenDate[0]+1<this.maxDateArray[0]){this.calendarOnScreenDate=[this.calendarOnScreenDate[0]+1,1,1]}else{this.calendarOnScreenDate=this.maxDateArray}}else{this.calendarOnScreenDate=[this.calendarOnScreenDate[0],++this.calendarOnScreenDate[1],1]}this.calculateCalendarWeekList();this.handleHeaderTitle()}},{key:"prevYear",value:function prevYear(){this._log("prevYear");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]-1;if(this.calendarOnScreenDate[0]<=this.minDateArray[0]){this.calendarOnScreenDate[0]=this.minDateArray[0]}this.calculateCalendarWeekList();this.handleHeaderTitle()}},{key:"nextYear",value:function nextYear(){this._log("nextYear");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]+1;if(this.calendarOnScreenDate[0]>=this.maxDateArray[0]){this.calendarOnScreenDate[0]=this.maxDateArray[0]}this.calculateCalendarWeekList();this.handleHeaderTitle()}},{key:"prevDecade",value:function prevDecade(){this._log("prevDecade");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]-this.calendarOnScreenDate[0]%10-10;if(this.calendarOnScreenDate[0]<this.minDateArray[0]){this.calendarOnScreenDate[0]=this.minDateArray[0];return}this.calculateCalendarWeekList()}},{key:"nextDecade",value:function nextDecade(){this._log("nextDecade");this.calendarOnScreenDate[0]=this.calendarOnScreenDate[0]-this.calendarOnScreenDate[0]%10+10;if(this.calendarOnScreenDate[0]>this.maxDateArray[0]){this.calendarOnScreenDate[0]=this.maxDateArray[0];return}this.calculateCalendarWeekList()}},{key:"onMonthChangedTo",value:function onMonthChangedTo(event){this._log("onMonthChangedTo");this.calendarOnScreenDate[1]=event.detail;this.calculateCalendarWeekList();this.activeView="calendar"}},{key:"onYearChangedTo",value:function onYearChangedTo(event){this._log("onYearChangedTo");this.calendarOnScreenDate[0]=event.detail;this.activeView="monthList";this.calculateCalendarWeekList()}},{key:"decadeChanged",value:function decadeChanged(event){this._log("decadeChanged");if(!(this.headerElement&&["yearList","decadeList"].includes(this.activeView)))return;this.headerElement.title="".concat(event.detail[0],"-").concat(event.detail[1])}},{key:"onDedcadeChangedTo",value:function onDedcadeChangedTo(event){var _this25=this;this._log("onDedcadeChangedTo");this.calendarOnScreenDate[0]=event.detail[0];if(this.yearListElement){this.yearListElement.currentYear=event.detail[0]}requestAnimationFrame(function(){_this25.activeView="yearList";_this25.calculateCalendarWeekList()})}},{key:"handleHeaderTitle",value:function handleHeaderTitle(){var _a;this._log("handleHeaderTitle");if(!this.headerElement)return;switch(this.activeView){case"calendar":this.headerElement.calendarActiveView=this.activeView;this.headerElement.title="".concat(null===(_a=this.monthList[this.calendarOnScreenDate[1]-1])||void 0===_a?void 0:_a.name," ").concat(this.calendarOnScreenDate[0]);break;case"monthList":this.headerElement.calendarActiveView=this.activeView;this.headerElement.title=this.calendarOnScreenDate[0]+"";break;case"yearList":case"decadeList":this.headerElement.calendarActiveView=this.activeView;if(this.decadeListElement){this.headerElement.title="".concat(this.decadeListElement.activeDecade[0],"-").concat(this.decadeListElement.activeDecade[1])}break;default:this._warn("Invalid view");break;}}}]);return CalendarBaseElement}(BaseElement);_exports.$calendarBaseDefault=CalendarBaseElement;__decorate([property({type:String,attribute:"date"})],CalendarBaseElement.prototype,"initDate",void 0);__decorate([property({type:String,attribute:"min-date"})],CalendarBaseElement.prototype,"minDate",void 0);__decorate([property({type:String,attribute:"max-date"})],CalendarBaseElement.prototype,"maxDate",void 0);__decorate([property({type:String})],CalendarBaseElement.prototype,"activeView",void 0);__decorate([property({type:String,attribute:"active-date"})],CalendarBaseElement.prototype,"activeDate",void 0);__decorate([property({type:Array})],CalendarBaseElement.prototype,"selectedDateList",void 0);__decorate([property({type:String})],CalendarBaseElement.prototype,"onScreenDate",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"shortWeekLabel",void 0);__decorate([property({type:Boolean,attribute:"range-picker"})],CalendarBaseElement.prototype,"rangePicker",void 0);__decorate([property({type:Boolean,attribute:"time-picker"})],CalendarBaseElement.prototype,"timePicker",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"onlyShowCurrentMonthDays",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"hideLastFadedRow",void 0);__decorate([property({type:Boolean})],CalendarBaseElement.prototype,"highlightToday",void 0);__decorate([property({type:Array})],CalendarBaseElement.prototype,"monthsDaysCount",void 0);__decorate([property({type:Array})],CalendarBaseElement.prototype,"monthList",void 0);__decorate([query("week-labels")],CalendarBaseElement.prototype,"weekLabelsElement",void 0);__decorate([query("header-element")],CalendarBaseElement.prototype,"headerElement",void 0);__decorate([query("year-list")],CalendarBaseElement.prototype,"yearListElement",void 0);__decorate([query("decade-list")],CalendarBaseElement.prototype,"decadeListElement",void 0);__decorate([queryAll(".calendar-day")],CalendarBaseElement.prototype,"calendarDayElementList",void 0);var calendarBase={__proto__:null,default:CalendarBaseElement};_exports.$calendarBase=calendarBase;var convertStringToNumberArray=function convertStringToNumberArray(str,separator){if(!str.includes(separator))return[];var strArray=str.split(separator),numberArray=[],_iterator7=_createForOfIteratorHelper(strArray),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var item=_step7.value;numberArray.push(parseInt(item))}}catch(err){_iterator7.e(err)}finally{_iterator7.f()}return numberArray};_exports.convertStringToNumberArray=convertStringToNumberArray;var convertStringToNumberArray$1={__proto__:null,convertStringToNumberArray:convertStringToNumberArray};_exports.$convertStringToNumberArray=convertStringToNumberArray$1;var monthsDaysCount=[31,28,31,30,31,30,31,31,30,31,30,31];_exports.monthsDaysCount=monthsDaysCount;var weekDayList=[{name:"Sun",shortName:"S"},{name:"Mon",shortName:"M"},{name:"Tue",shortName:"T"},{name:"Wed",shortName:"W"},{name:"Thu",shortName:"T"},{name:"Fri",shortName:"F"},{name:"Sat",shortName:"S"}];_exports.weekDayList=weekDayList;var monthList$1=[{name:"January",shortName:"Jan",code:0},{name:"February",shortName:"Feb",code:3},{name:"March",shortName:"Mar",code:3},{name:"April",shortName:"Apr",code:6},{name:"May",shortName:"May",code:1},{name:"Jun",shortName:"Jun",code:4},{name:"July",shortName:"Jul",code:6},{name:"August",shortName:"Aug",code:2},{name:"September",shortName:"Sep",code:5},{name:"October",shortName:"Oct",code:0},{name:"November",shortName:"Nov",code:3},{name:"December",shortName:"Dec",code:5}];_exports.monthList=monthList$1;var gregorian={__proto__:null,monthsDaysCount:monthsDaysCount,weekDayList:weekDayList,monthList:monthList$1};_exports.$gregorian=gregorian;var GregorianCalendarElement=/*#__PURE__*/function(_CalendarBaseElement){babelHelpers.inherits(GregorianCalendarElement,_CalendarBaseElement);var _super14=_createSuper(GregorianCalendarElement);function GregorianCalendarElement(){var _this26;babelHelpers.classCallCheck(this,GregorianCalendarElement);_this26=_super14.call(this);_this26.leapMonthIndex=1;_this26.minDate="1900-1-1";_this26.maxDate="2200-1-1";_this26.minDateArray=convertStringToNumberArray(_this26.minDate,"-");_this26.maxDateArray=convertStringToNumberArray(_this26.maxDate,"-");_this26.monthList=monthList$1;_this26.monthsDaysCount=monthsDaysCount;_this26.weekDayList=weekDayList;return _this26}babelHelpers.createClass(GregorianCalendarElement,[{key:"update",value:function update(changedProperties){this._log("update");// Create array of initDate when it's changed
if(changedProperties.has("initDate")){if(new Date(this.initDate).getTime()>new Date("".concat(this.maxDateArray[0],"-").concat(this.maxDateArray[1],"-").concat(this.maxDateArray[2])).getTime()){this.initDate=this.maxDate}if(new Date(this.initDate).getTime()<new Date("".concat(this.minDateArray[0],"-").concat(this.minDateArray[1],"-").concat(this.minDateArray[2])).getTime()){this.initDate=this.minDate}this._log("update: %o",this.initDate);this.onScreenDate=this.initDate;var initDateArray=convertStringToNumberArray(this.initDate,"-");this.calendarInitDate=initDateArray;// We need a cloned array here
this.calendarOnScreenDate=initDateArray.slice(0);this.calendarActiveDate=initDateArray.slice(0);this.calendarWeekList=this.calculateCalendar()}if(changedProperties.has("activeDate")){this.calendarActiveDate=convertStringToNumberArray(this.activeDate,"/")}babelHelpers.get(babelHelpers.getPrototypeOf(GregorianCalendarElement.prototype),"update",this).call(this,changedProperties)}},{key:"leapYearCalculation",value:function leapYearCalculation(year){this._log("leapYearCalculation");var isLeap=0;if(0===year%4&&0!==year%100||0===year%400){isLeap=1}return isLeap}},{key:"calculateCalendar",value:function calculateCalendar(){this._log("calculateCalendar");var date=new Date("".concat(this.calendarOnScreenDate[0],"-").concat(this.calendarOnScreenDate[1],"-1")),currentMonthDaysCount=this.monthsDaysCount[this.calendarOnScreenDate[1]-1]+(this.calendarOnScreenDate[1]-1===this.leapMonthIndex?this.leapYearCalculation(this.calendarOnScreenDate[0]):0),tempYear=this.calendarOnScreenDate[0],previousMonthIndex=this.calendarOnScreenDate[1]-2;if(0>=previousMonthIndex){tempYear--;if(tempYear<this.minDateArray[0]){tempYear=this.minDateArray[0]}previousMonthIndex=11}var previousMonthDaysCount=this.monthsDaysCount[previousMonthIndex]+(previousMonthIndex===this.leapMonthIndex?this.leapYearCalculation(tempYear):0),startWeekAtIndex=date.getDay();this._log("startWeekAtIndex: %s",startWeekAtIndex);// console.log(startWeekAtIndex);
for(var totalCells=currentMonthDaysCount+startWeekAtIndex,calendar=[],week=Array.from({length:startWeekAtIndex},function(_v,k){return previousMonthDaysCount-startWeekAtIndex+k+1}),i=startWeekAtIndex+1,day;6>calendar.length;++i){day=i>totalCells?i-totalCells:i-startWeekAtIndex;if(0===i%7){week.push(day);calendar.push(week);week=[];if((this.onlyShowCurrentMonthDays||this.hideLastFadedRow)&&7*calendar.length>=totalCells)break;continue}week.push(day)}return calendar}// protected calculateSelectedDayList() {
//   this._log('calculateSelectedDayList');
//   let days: Array<number> = [];
//   let [onScreenYear, onScreenMonth]: Array<number> = this.calendarOnScreenDate;
//   this.selectedDateList.forEach(([selectedDateYear, selectedDateMonth, selectedDateDay]: Array<number>) => {
//     if (selectedDateYear === onScreenYear &&
//       selectedDateMonth === onScreenMonth)
//       days.push(selectedDateDay);
//   });
//   return days;
// };
},{key:"prevMonth",value:function prevMonth(){this._log("prevMonth");babelHelpers.get(babelHelpers.getPrototypeOf(GregorianCalendarElement.prototype),"prevMonth",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("-"))}},{key:"nextMonth",value:function nextMonth(){this._log("nextMonth");babelHelpers.get(babelHelpers.getPrototypeOf(GregorianCalendarElement.prototype),"nextMonth",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("-"))}},{key:"prevYear",value:function prevYear(){this._log("prevYear");babelHelpers.get(babelHelpers.getPrototypeOf(GregorianCalendarElement.prototype),"prevYear",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("-"))}},{key:"nextYear",value:function nextYear(){this._log("nextYear");babelHelpers.get(babelHelpers.getPrototypeOf(GregorianCalendarElement.prototype),"nextYear",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("-"))}},{key:"calculateCalendarWeekList",value:function calculateCalendarWeekList(){this._log("calculateCalendarWeekList");this.calendarWeekList=this.calculateCalendar();babelHelpers.get(babelHelpers.getPrototypeOf(GregorianCalendarElement.prototype),"calculateCalendarWeekList",this).call(this)}}]);return GregorianCalendarElement}(CalendarBaseElement);_exports.GregorianCalendarElement=GregorianCalendarElement;GregorianCalendarElement.styles=[calendarBaseStyle,css(_templateObject31_d1b7ac50f70311eba9769dd77e1add8c())];_exports.GregorianCalendarElement=GregorianCalendarElement=__decorate([customElement("gregorian-calendar-element")],GregorianCalendarElement);var gregorianCalendar={__proto__:null,get GregorianCalendarElement(){return GregorianCalendarElement}};_exports.$gregorianCalendar=gregorianCalendar;var monthsDaysCount$1=[31,31,31,31,31,31,30,30,30,30,30,29];_exports.monthsDaysCount$1=monthsDaysCount$1;var weekDayList$1=[{name:"\u0634\u0646\u0628\u0647",shortName:"\u0634"},{name:"\u06CC\u06A9 \u0634\u0646\u0628\u0647",shortName:"\u06CC"},{name:"\u062F\u0648\u0634\u0646\u0628\u0647",shortName:"\u062F"},{name:"\u0633\u0647 \u0634\u0646\u0628\u0647",shortName:"\u0633"},{name:"\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",shortName:"\u0686"},{name:"\u067E\u0646\u062C\u0634\u0646\u0628\u0647",shortName:"\u067E"},{name:"\u062C\u0645\u0639\u0647",shortName:"\u062C"}];_exports.weekDayList$1=weekDayList$1;var monthList$2=[{name:"\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",shortName:"",code:0},{name:"\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",shortName:"",code:3},{name:"\u062E\u0631\u062F\u0627\u062F",shortName:"",code:3},{name:"\u062A\u06CC\u0631",shortName:"",code:6},{name:"\u0645\u0631\u062F\u0627\u062F",shortName:"",code:1},{name:"\u0634\u0647\u0631\u06CC\u0648\u0631",shortName:"",code:4},{name:"\u0645\u0647\u0631",shortName:"",code:6},{name:"\u0622\u0628\u0627\u0646",shortName:"",code:2},{name:"\u0622\u0630\u0631",shortName:"",code:5},{name:"\u062F\u06CC",shortName:"",code:0},{name:"\u0628\u0647\u0645\u0646",shortName:"",code:3},{name:"\u0627\u0633\u0641\u0646\u062F",shortName:"",code:5}];_exports.monthList$1=monthList$2;var solar={__proto__:null,monthsDaysCount:monthsDaysCount$1,weekDayList:weekDayList$1,monthList:monthList$2};_exports.$solar=solar;var SolarCalendarElement=/*#__PURE__*/function(_CalendarBaseElement2){babelHelpers.inherits(SolarCalendarElement,_CalendarBaseElement2);var _super15=_createSuper(SolarCalendarElement);function SolarCalendarElement(){var _this27;babelHelpers.classCallCheck(this,SolarCalendarElement);_this27=_super15.call(this);_this27.leapMonthIndex=11;_this27.minDate="1300/1/1";_this27.maxDate="1500/1/1";_this27.minDateArray=convertStringToNumberArray(_this27.minDate,"/");_this27.maxDateArray=convertStringToNumberArray(_this27.maxDate,"/");_this27.monthList=monthList$2;_this27.monthsDaysCount=monthsDaysCount$1;_this27.weekDayList=weekDayList$1;return _this27}babelHelpers.createClass(SolarCalendarElement,[{key:"update",value:function update(changedProperties){this._log("update");if(changedProperties.has("minDate")){this.minDateArray=convertStringToNumberArray(this.minDate,"/")}if(changedProperties.has("maxDate")){this.maxDateArray=convertStringToNumberArray(this.maxDate,"/")}// Create array of initDate when it's changed
if(changedProperties.has("initDate")){var initDateArray=convertStringToNumberArray(this.initDate,"/");if(initDateArray[0]>this.maxDateArray[0]||initDateArray[0]===this.maxDateArray[0]&&initDateArray[1]>this.maxDateArray[1]||initDateArray[0]===this.maxDateArray[0]&&initDateArray[1]===this.maxDateArray[1]&&initDateArray[2]>this.maxDateArray[2]){this.initDate=this.maxDate}if(initDateArray[0]<this.minDateArray[0]||initDateArray[0]===this.minDateArray[0]&&initDateArray[1]<this.minDateArray[1]||initDateArray[0]===this.minDateArray[0]&&initDateArray[1]===this.minDateArray[1]&&initDateArray[2]<this.minDateArray[2]){this.initDate=this.minDate}this.onScreenDate=this.initDate;this.calendarInitDate=initDateArray;// We need a cloned array here
this.calendarOnScreenDate=initDateArray.slice(0);this.calendarActiveDate=initDateArray.slice(0);this.calendarWeekList=this.calculateCalendar()}if(changedProperties.has("activeDate")){this.calendarActiveDate=convertStringToNumberArray(this.activeDate,"/")}babelHelpers.get(babelHelpers.getPrototypeOf(SolarCalendarElement.prototype),"update",this).call(this,changedProperties)}},{key:"calculateCalendar",value:function calculateCalendar(){this._log("calculateCalendar");var newDate=this.convertToGregorian(this.calendarOnScreenDate[0],this.calendarOnScreenDate[1],1),date=new Date(newDate[0],newDate[1]-1,newDate[2]),currentMonthDaysCount=this.monthsDaysCount[this.calendarOnScreenDate[1]-1]+(this.calendarOnScreenDate[1]-1===this.leapMonthIndex?this.leapYearCalculation(this.calendarOnScreenDate[0]):0),tempYear=this.calendarOnScreenDate[0],previousMonthIndex=this.calendarOnScreenDate[1]-2;if(0>=previousMonthIndex){tempYear--;if(tempYear<this.minDateArray[0]){tempYear=this.minDateArray[0]}previousMonthIndex=11}var previousMonthDaysCount=this.monthsDaysCount[previousMonthIndex]+(previousMonthIndex===this.leapMonthIndex?this.leapYearCalculation(tempYear):0),startWeekAtIndex=date.getDay(),startWeekAtIndexInJalali=startWeekAtIndex+1;if(6<startWeekAtIndexInJalali){startWeekAtIndexInJalali=0}for(var totalCells=currentMonthDaysCount+startWeekAtIndexInJalali,calendar=[],week=Array.from({length:startWeekAtIndexInJalali},function(_v,k){return previousMonthDaysCount-startWeekAtIndexInJalali+k+1}),i=startWeekAtIndexInJalali+1,day;6>calendar.length;++i){day=i>totalCells?i-totalCells:i-startWeekAtIndexInJalali;if(0===i%7){week.push(day);calendar.push(week);week=[];if((this.onlyShowCurrentMonthDays||this.hideLastFadedRow)&&7*calendar.length>=totalCells)break;continue}week.push(day)}return calendar}},{key:"convertToGregorian",value:function convertToGregorian(year,month,day){this._log("convertToGregorian");var gregorianYear;if(979<year){gregorianYear=1600;year-=979}else{gregorianYear=621}var days=365*year+8*Math.floor(year/33)+(year%33+3)/4+78+day+(7>month?31*(month-1):30*(month-7)+186);gregorianYear+=400*Math.floor(days/146097);days%=146097;if(36524<Math.floor(days)){gregorianYear+=100*Math.floor(--days/36524);days%=36524;if(365<=days)days++}gregorianYear+=4*Math.floor(days/1461);days%=1461;gregorianYear+=Math.floor((days-1)/365);if(365<days)days=(days-1)%365;var gregorianDay=Math.floor(days+1),montDays=[0,31,0===gregorianYear%4&&0!==gregorianYear%100||0===gregorianYear%400?29:28,31,30,31,30,31,31,30,31,30,31],index=0;for(;12>=index;index++){if(gregorianDay<=montDays[index])break;gregorianDay-=montDays[index]}return[gregorianYear,index,gregorianDay]}},{key:"leapYearCalculation",value:function leapYearCalculation(year){this._log("Persian-calendar: leapYearCalculation");return-1<[1,5,9,13,17,22,26,30].indexOf(year%33)?1:0}},{key:"prevMonth",value:function prevMonth(){this._log("prevMonth");babelHelpers.get(babelHelpers.getPrototypeOf(SolarCalendarElement.prototype),"prevMonth",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}},{key:"nextMonth",value:function nextMonth(){this._log("nextMonth");babelHelpers.get(babelHelpers.getPrototypeOf(SolarCalendarElement.prototype),"nextMonth",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}},{key:"prevYear",value:function prevYear(){this._log("prevYear");babelHelpers.get(babelHelpers.getPrototypeOf(SolarCalendarElement.prototype),"prevYear",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}},{key:"nextYear",value:function nextYear(){this._log("nextYear");babelHelpers.get(babelHelpers.getPrototypeOf(SolarCalendarElement.prototype),"nextYear",this).call(this);this._fire("date-changed",this.calendarOnScreenDate.join("/"),!0)}},{key:"calculateCalendarWeekList",value:function calculateCalendarWeekList(){this._log("calculateCalendarWeekList");this.calendarWeekList=this.calculateCalendar();babelHelpers.get(babelHelpers.getPrototypeOf(SolarCalendarElement.prototype),"calculateCalendarWeekList",this).call(this)}}]);return SolarCalendarElement}(CalendarBaseElement);_exports.SolarCalendarElement=SolarCalendarElement;SolarCalendarElement.styles=[calendarBaseStyle,css(_templateObject32_d1b7ac50f70311eba9769dd77e1add8c())];_exports.SolarCalendarElement=SolarCalendarElement=__decorate([customElement("solar-calendar-element")],SolarCalendarElement);var solarCalendar={__proto__:null,get SolarCalendarElement(){return SolarCalendarElement}};_exports.$solarCalendar=solarCalendar;var previousValues=new WeakMap,ifDefined=directive(function(value){return function(part){var previousValue=previousValues.get(part);if(value===void 0&&babelHelpers.instanceof(part,AttributePart)){// If the value is undefined, remove the attribute, but only if the value
// was previously defined.
if(previousValue!==void 0||!previousValues.has(part)){var name=part.committer.name;part.committer.element.removeAttribute(name)}}else if(value!==previousValue){part.setValue(value)}previousValues.set(part,value)}});/**
                                       * For AttributeParts, sets the attribute if the value is defined and removes
                                       * the attribute if the value is undefined.
                                       *
                                       * For other part types, this directive is a no-op.
                                       */_exports.ifDefined=ifDefined;var ifDefined$1={__proto__:null,ifDefined:ifDefined};_exports.$ifDefined=ifDefined$1;var persianNumberArr=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],arabicNumberArr=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],fixPersianNumber=function fixPersianNumber(newString){var i=0;for(;10>i;i++){newString=newString.replace(persianNumberArr[i],i.toString()).replace(arabicNumberArr[i],i.toString())}return newString};_exports.fixPersianNumber=fixPersianNumber;var fixPersianNumber$1={__proto__:null,fixPersianNumber:fixPersianNumber};_exports.$fixPersianNumber=fixPersianNumber$1;var DatePicker=/*#__PURE__*/function(_BaseElement8){babelHelpers.inherits(DatePicker,_BaseElement8);var _super16=_createSuper(DatePicker);function DatePicker(){var _this28;babelHelpers.classCallCheck(this,DatePicker);_this28=_super16.apply(this,arguments);_this28.justTimePicker=!1;_this28.solar=!1;_this28.rangePicker=!1;_this28.timePicker=!1;// must be sorted past[index: 0] -> future[index: 1]
// 2D array -> [[2020, 2, 3]] || [[2020, 2, 3], [2020, 6, 1]] || []
_this28.selectedDateList=[];_this28.selectedTime=[];return _this28}babelHelpers.createClass(DatePicker,[{key:"update",value:function update(changedProperties){this._log("update");if(changedProperties.has("solar")){if(this.solar){this.initialDate=fixPersianNumber(new Date().toLocaleDateString("fa"));this.onScreenDate=this.initialDate;this.activeDate=this.initialDate}else{this.initialDate=new Date().toLocaleDateString("en-CA")}}babelHelpers.get(babelHelpers.getPrototypeOf(DatePicker.prototype),"update",this).call(this,changedProperties)}},{key:"render",value:function render(){var _this29=this;this._log("render");return html(_templateObject33_d1b7ac50f70311eba9769dd77e1add8c(),this.solar?html(_templateObject34_d1b7ac50f70311eba9769dd77e1add8c(),ifDefined(this.initialDate),this.rangePicker,this.timePicker,this.selectedDateList,function(event){_this29._log("current date is: %s",event.detail)},function(event){event.stopPropagation();_this29._log("current time is: %o",event.detail)}):html(_templateObject35_d1b7ac50f70311eba9769dd77e1add8c(),ifDefined(this.initialDate),this.rangePicker,this.timePicker,this.selectedDateList,function(event){_this29._log("current date is: %s",event.detail)},function(event){event.stopPropagation();_this29._log("current time is: %o",event.detail)}))}}]);return DatePicker}(BaseElement);_exports.DatePicker=DatePicker;DatePicker.styles=css(_templateObject36_d1b7ac50f70311eba9769dd77e1add8c());__decorate([property({type:Boolean})],DatePicker.prototype,"justTimePicker",void 0);__decorate([property({type:Boolean})],DatePicker.prototype,"solar",void 0);__decorate([property({type:Boolean,attribute:"range-picker"})],DatePicker.prototype,"rangePicker",void 0);__decorate([property({type:Boolean,attribute:"time-picker"})],DatePicker.prototype,"timePicker",void 0);__decorate([property({type:String,attribute:"date"})],DatePicker.prototype,"initialDate",void 0);__decorate([property({type:String,attribute:"active-date"})],DatePicker.prototype,"activeDate",void 0);__decorate([property({type:Array})],DatePicker.prototype,"selectedDateList",void 0);__decorate([property({type:Array})],DatePicker.prototype,"selectedTime",void 0);__decorate([property({type:String,attribute:!1})],DatePicker.prototype,"onScreenDate",void 0);_exports.DatePicker=DatePicker=__decorate([customElement("date-picker")],DatePicker);var datePicker={__proto__:null,get DatePicker(){return DatePicker}};_exports.$datePicker=datePicker});