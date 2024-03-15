import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcInputComponent, IgcRatingComponent, IgcRippleComponent, IgcSliderComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcInputComponent, IgcRatingComponent, IgcSliderComponent);

@customElement('app-num-bound-components-view')
export default class NumBoundComponentsView extends LitElement {
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
      width: 379px;
      height: 172px;
      min-width: 50px;
      min-height: 50px;
      max-width: 379px;
      max-height: 172px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 499px;
      min-width: 50px;
      min-height: 50px;
      max-width: 499px;
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
    .input {
      margin: 0 80px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .rating {
      margin: 0 0 30px;
      width: max-content;
      height: max-content;
    }
    .rating_1 {
      width: max-content;
      height: max-content;
    }
    .slider {
      height: max-content;
      min-width: 50px;
    }
  `;
  public InputNumber(event: any) {
	  this.numVariable = event.detail as number;
  }

  @state()
  private numVariable?: number;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <h4 class="h4">
            Component, bound to NUMERIC variable
          </h4>
          <igc-button size="large" @click="${() => Router.go('/bool-bound-components-view')}" class="button">
            Previous
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button size="large" @click="${() => Router.go('/date-bound-components-view')}" class="button_1">
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
              ${this.numVariable}
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
                <div class="column-layout group_8">
                  <igc-input type="number" value="${this.numVariable!}" @igcInput="${this.InputNumber}" label="Duration" ?outlined="${true}" class="input"></igc-input>
                </div>
                <igc-rating value="${this.numVariable!}" @igcInput="${this.InputNumber}" size="large" class="rating"></igc-rating>
                <igc-rating value="${this.numVariable!}" @igcInput="${this.InputNumber}" size="large" class="rating_1"></igc-rating>
              </div>
              <div class="column-layout group_9">
                <igc-slider value="${this.numVariable!}" @igcInput="${this.InputNumber}" min="0" max="100" step="10" ?discrete-track="${true}" class="slider"></igc-slider>
                <igc-slider value="${this.numVariable!}" @igcInput="${this.InputNumber}" min="0" max="100" step="10" ?discrete-track="${true}" class="slider"></igc-slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
