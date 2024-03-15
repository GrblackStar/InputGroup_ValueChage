import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcComboComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import { CustomersType } from '../models/northwind/customers-type';
import { CategoriesType } from '../models/northwind/categories-type';
import { northwindService } from '../services/Northwind-service';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcComboComponent);

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
      margin: 0 80px 0 0;
      width: 395px;
      min-width: 50px;
      min-height: 50px;
      max-width: 395px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 411px;
      min-width: 50px;
      min-height: 50px;
      max-width: 411px;
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
      margin: 0 0 50px 20px;
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      margin: 30px 0 50px 20px;
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      width: 991px;
      height: max-content;
      min-width: min-content;
      max-width: 991px;
    }
    .text_4 {
      margin: 0 0 30px;
      height: max-content;
      min-width: min-content;
    }
    .text_5 {
			margin: 0 0 10px 20px;
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
    .user-input {
      margin: 0 0 50px;
      height: max-content;
      min-width: min-content;
    }
    .user-input_1 {
      height: max-content;
      min-width: min-content;
    }
  `;

  constructor() {
    super();
    this.categoryArray = northwindService.getData('CategoriesType');
    this.customerArray = northwindService.getData('CustomersType');
  }

  @state()
  private categoryArray: CategoriesType[] = [];

  @state()
  private categoryObject?: CategoriesType;

  @state()
  private customerArray: CustomersType[] = [];

  @state()
  private customerOutputArray: CustomersType[] = [];

  public singleSelectComboIgcChange(event: any) {
    this.categoryObject = event.detail.newValue[0] as CategoriesType;
  }

  public comboIgcChange(event: any) {
		this.customerOutputArray = event.detail.newValue as CustomersType[];
	}

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <h4 class="h4">
            Component, bound to OBJECT variable
          </h4>
          <igc-button size="large" @click="${() => Router.go('/date-bound-components-view')}" class="button">
            Previous
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button size="large" @click="${() => Router.go('/string-bound-components-view')}" class="button_1">
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
              For Simple Combo
            </p>
            <p class="typography__body-1 text_1">
              ${this.categoryObject?.name}
            </p>
            <p class="typography__body-1 text_2">
							For Combo
						</p>
						${this.customerOutputArray?.map((item) => html`
							<p class="typography__body-1 text_5">
								${item.customerID}
							</p>
						`)}
          </div>
          <div class="column-layout group_4"></div>
          <div class="column-layout group_5">
            <div class="row-layout group_6">
              <p class="typography__body-1 text_3">
                Two way bound components
              </p>
            </div>
            <div class="row-layout group_7">
              <div class="column-layout group_8">
                <p class="typography__body-1 text_4">
                  Simple Combo:
                </p>
                <igc-combo ?outlined="${true}" label="Label/Placeholder" .value="${this.categoryObject! ? [this.categoryObject!] : []}" display-key="description" ?single-select="${true}" .data="${this.categoryArray}" @igcChange="${this.singleSelectComboIgcChange}"  class="user-input"></igc-combo>
                <igc-combo ?outlined="${true}" label="Label/Placeholder" .value="${this.categoryObject! ? [this.categoryObject!] : []}" display-key="description" ?single-select="${true}" .data="${this.categoryArray}" @igcChange="${this.singleSelectComboIgcChange}"  class="user-input_1"></igc-combo>
              </div>
              <div class="column-layout group_9">
                <p class="typography__body-1 text_4">
                  Combo:
                </p>
                <igc-combo ?outlined="${true}" label="Label/Placeholder" .value="${this.customerOutputArray}" display-key="customerID" .autoFocusSearch="${true}" ?disable-filtering="${true}" @igcChange="${this.comboIgcChange}" .data="${this.customerArray}" class="user-input"></igc-combo>
                <igc-combo ?outlined="${true}" label="Label/Placeholder" .value="${this.customerOutputArray}" display-key="customerID" .autoFocusSearch="${true}" ?disable-filtering="${true}" @igcChange="${this.comboIgcChange}" .data="${this.customerArray}" class="user-input"></igc-combo>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
