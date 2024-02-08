import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);

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
    .input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
      flex-shrink: 0;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  @state()
  private boolvar: boolean = false;

  @state()
  private inputValue?: string;

  @state()
  private dATEVAR?: Date;

  public inputIgcInput(event: any) {
	  this.inputValue = event.detail as string;
  }

  public datePickerValueChange(event: any) {
	  this.dATEVAR = event.TBD as Date;
  }

  render() {
	  return html`
		  <link rel='stylesheet' href='../../ig-theme.css'>
		  <igc-input label="Label/Placeholder" ?outlined="${true}" @igcInput="${this.inputIgcInput}" class="input"></igc-input>
		  <p class="typography__body-1 text">
			  ${this.inputValue}
		  </p>
		  <igc-input value="${this.inputValue!}" label="Label/Placeholder" ?outlined="${true}" class="input"></igc-input>
		  <span @ValueChange="${this.datePickerValueChange}" class="date-picker">DatePicker not yet available in WebComponents</span>
	  `;
  }
}