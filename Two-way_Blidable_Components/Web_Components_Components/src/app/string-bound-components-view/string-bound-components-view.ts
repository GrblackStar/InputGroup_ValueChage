import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcInputComponent, IgcSelectComponent);

@customElement('app-string-bound-components-view')
export default class StringBoundComponentsView extends LitElement {
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
      min-width: 50px;
      min-height: 50px;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      background-color: hsla(var(--ig-gray-200));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 1436px;
      height: 96px;
      min-width: 50px;
      min-height: 50px;
      max-width: 1436px;
      max-height: 96px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 1437px;
      height: 803px;
      min-width: 50px;
      min-height: 50px;
      max-width: 1437px;
      max-height: 803px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 334px;
      min-width: 50px;
      min-height: 50px;
      max-width: 334px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 138px;
      min-width: 50px;
      min-height: 50px;
      max-width: 138px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 962px;
      min-width: 50px;
      min-height: 50px;
      max-width: 962px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      height: 83px;
      min-width: 50px;
      min-height: 50px;
      max-height: 83px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      height: 714px;
      min-width: 50px;
      min-height: 50px;
      max-height: 714px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 449px;
      min-width: 50px;
      min-height: 50px;
      max-width: 449px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 415px;
      height: 349px;
      min-width: 50px;
      min-height: 50px;
      max-width: 415px;
      max-height: 349px;
    }
    .h4 {
      margin: 20px 0 0 20px;
      width: 976px;
      height: max-content;
      min-width: min-content;
      max-width: 976px;
    }
    .text {
      margin: 20px;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      margin: 0 0 0 20px;
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      width: 991px;
      height: max-content;
      min-width: min-content;
      max-width: 991px;
    }
    .text_3 {
      margin: 0 0 30px;
      height: max-content;
      min-width: min-content;
    }
    .text_4 {
      margin: 50px 0 30px;
      height: max-content;
      min-width: min-content;
    }
    .textarea {
      margin: 0 50px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .button {
      margin: 30px 70px 0 0;
      width: 153px;
      height: max-content;
      min-width: 153px;
      max-width: 153px;
      flex-shrink: 0;
    }
    .button_1 {
      margin: 30px 0 0;
      width: 153px;
      height: max-content;
      min-width: 153px;
      max-width: 153px;
      flex-shrink: 0;
    }
    .input {
      margin: 0 50px 0 0;
      width: 336px;
      height: max-content;
      min-width: min-content;
      max-width: 336px;
    }
    .select {
      height: max-content;
      min-width: min-content;
    }
    .select_1 {
      margin: 50px 0 0;
      height: max-content;
      min-width: min-content;
    }
  `;

  @state()
  private stringVariable?: string;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <h4 class="h4">
            Component, bound to STRING variable
          </h4>
          <igc-button size="large" @click="${() => Router.go('/date-bound-components-view')}" class="button">
            Previous
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button size="large" @click="${() => Router.go('/bool-bound-components-view')}" class="button_1">
            Next
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="row-layout group_2">
          <div class="column-layout group_3">
            <p class="typography__body-1 text">
              Value of the variable:
            </p>
            <p class="typography__body-1 text_1">
              ${this.stringVariable}
            </p>
          </div>
          <div class="column-layout group_4"></div>
          <div class="column-layout group_5">
            <div class="row-layout group_6">
              <p class="typography__body-1 text_2">
                Two way bound components
              </p>
            </div>
            <div class="row-layout group_7">
              <div class="column-layout group">
                <p class="typography__body-1 text_3">
                  Input group
                </p>
                <igc-input value="${this.stringVariable!}" label="Label/Placeholder" ?outlined="${true}" class="input"></igc-input>
                <p class="typography__body-1 text_4">
                  Text Area
                </p>
                <span class="textarea">Textarea not yet available in WebComponents</span>
              </div>
              <div class="column-layout group_8">
                <div class="column-layout group_9">
                  <p class="typography__body-1 text_3">
                    Select:
                  </p>
                  <igc-select ?outlined="${true}" label="Label/Placeholder" class="select">
                    <igc-select-item value="Option">
                      Option
                    </igc-select-item>
                  </igc-select>
                  <igc-select ?outlined="${true}" label="Label/Placeholder" class="select_1">
                    <igc-select-item value="Option">
                      Option
                    </igc-select-item>
                  </igc-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
