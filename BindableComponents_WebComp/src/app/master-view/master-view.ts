import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcCalendarComponent, IgcCheckboxComponent, IgcRadioComponent, IgcRadioGroupComponent, IgcSelectComponent, IgcSliderComponent, IgcSwitchComponent } from 'igniteui-webcomponents';

defineComponents(IgcCheckboxComponent, IgcSwitchComponent, IgcRadioGroupComponent, IgcRadioComponent, IgcSelectComponent, IgcCalendarComponent, IgcSliderComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 396px;
      min-width: 50px;
      min-height: 50px;
      max-width: 396px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 312px;
      min-width: 50px;
      min-height: 50px;
      max-width: 312px;
    }
    .user-input {
      width: max-content;
      height: max-content;
    }
    .radio {
      padding: 8px;
    }
    .select {
      height: max-content;
      min-width: min-content;
    }
    .slider {
      height: max-content;
      min-width: 50px;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .textarea {
      height: max-content;
      min-width: min-content;
    }
    .calendar {
      width: max-content;
      height: max-content;
      min-width: max-content;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      margin: 50px;
      height: max-content;
      min-width: min-content;
    }
  `;

  @state()
  private dateVar?: Date;

  @state()
  private stringVar?: string;

  @state()
  private boolVar: boolean = false;

  @state()
  private numVar?: number;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-checkbox labelPosition="after" checked="${this.boolVar}" class="user-input">
          Label
        </igc-checkbox>
        <igc-switch checked="${this.boolVar}" class="user-input">
          Label
        </igc-switch>
        <igc-radio-group alignment="horizontal" class="user-input">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
        <igc-select ?outlined="${true}" label="Label/Placeholder" value="${this.stringVar!}" class="select">
          <igc-select-item value="Option">
            Option
          </igc-select-item>
        </igc-select>
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
        <igc-slider value="${this.numVar!}" min="0" max="100" step="10" ?discrete-track="${true}" class="slider"></igc-slider>
        <span class="textarea">Textarea not yet available in WebComponents</span>
        <span class="date-picker">DatePicker not yet available in WebComponents</span>
      </div>
      <div class="column-layout group_1"></div>
      <div class="column-layout group_2">
        <p class="typography__body-1 text">
          String var
        </p>
        <p class="typography__body-1 text_1">
          ${this.stringVar}
        </p>
        <p class="typography__body-1 text">
          Date var
        </p>
        <p class="typography__body-1 text_1">
          ${this.dateVar}
        </p>
        <p class="typography__body-1 text">
          Bool var
        </p>
        <p class="typography__body-1 text_1">
          ${this.boolVar}
        </p>
        <p class="typography__body-1 text">
          Num var
        </p>
        <p class="typography__body-1 text_1">
          ${this.numVar}
        </p>
      </div>
    `;
  }
}
