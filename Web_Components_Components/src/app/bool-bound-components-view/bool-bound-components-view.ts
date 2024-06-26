import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcCheckboxComponent, IgcRippleComponent, IgcSwitchComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcSwitchComponent, IgcCheckboxComponent);

@customElement('app-bool-bound-components-view')
export default class BoolBoundComponentsView extends LitElement {
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
      background-color: hsla(var(--ig-surface-500));
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
      width: 180px;
      min-width: 50px;
      min-height: 50px;
      max-width: 180px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 212px;
      min-width: 50px;
      min-height: 50px;
      max-width: 212px;
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
    .switch {
      margin: 0 80px 20px 0;
      width: max-content;
      height: max-content;
    }
    .user-input {
      width: max-content;
      height: max-content;
    }
    .checkbox {
      margin: 0 0 20px;
      width: max-content;
      height: max-content;
    }
  `;

  public InputBoolValueChange(event: any) {
	  this.boolVariable = event.detail;
  }

  @state()
  private boolVariable: boolean = false;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <h4 class="h4">
            Component, bound to BOOL variable
          </h4>
          <igc-button size="large" @click="${() => Router.go('/string-bound-components-view')}" class="button">
            Previous
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button size="large" @click="${() => Router.go('/num-bound-components-view')}" class="button_1">
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
              ${this.boolVariable}
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
              <div class="column-layout group_8">
                <igc-switch ?checked="${this.boolVariable}" @igcChange="${this.InputBoolValueChange}">
                  Label
                </igc-switch>
              </div>
              <div class="column-layout group_9">
                <igc-checkbox ?checked="${this.boolVariable}" @igcChange="${this.InputBoolValueChange}" labelPosition="after" class="checkbox">
                  Label
                </igc-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
