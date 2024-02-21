import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcComboComponent, IgcInputComponent } from 'igniteui-webcomponents';
import { CustomersType } from '../models/northwind/customers-type';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { financialService } from '../services/Financial-service';
import { northwindService } from '../services/Northwind-service';

defineComponents(IgcComboComponent, IgcInputComponent);

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
    .date-picker {
      height: max-content;
      min-width: 120px;
      flex-shrink: 0;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    this.northwindCustomers = northwindService.getData('CustomersType');
    this.financialBoxOfficeRevenue = financialService.getData('BoxOfficeRevenueType');
  }

  @state()
  private dateVar?: Date;

  @state()
  private customerObject?: CustomersType;

  @state()
  private northwindCustomers: CustomersType[] = [];

  @state()
  private financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  public datePickerValueChange(event: any) {
    this.dateVar = new Date(event.TBD);
  }

  public singleSelectComboIgcChange(event: any) {
    this.customerObject = event.detail.newValue[0] as CustomersType;
  }

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-combo ?outlined="${true}" .data="${this.northwindCustomers}" label="Label/Placeholder" display-key="customerID" ?single-select="${true}" @igcChange="${this.singleSelectComboIgcChange}" class="user-input"></igc-combo>
      <igc-input value="${this.customerObject?.customerID}" label="Label/Placeholder" ?outlined="${true}" class="user-input"></igc-input>
    `;
  }
}
