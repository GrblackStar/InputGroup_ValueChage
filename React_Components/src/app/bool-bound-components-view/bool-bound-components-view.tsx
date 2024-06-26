import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrRipple, IgrRippleModule, IgrSwitch, IgrSwitchModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './bool-bound-components-view.module.css';
import createClassTransformer from '../style-utils';
import { useState } from 'react';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrRippleModule.register();
IgrSwitchModule.register();

export default function BoolBoundComponentsView() {
  const navigate = useNavigate();
  const classes = createClassTransformer(styles);

  const [boolVariable, setBoolVariable] = useState(false);
  const handleChange = (event) => {
    setBoolVariable(event.checked);
  };

  const [readonlyInput, setreadonlyInput] = useState(false);
  const handleReadonlyChange = (event) => {
    setreadonlyInput(event.checked);
  };

  const boolToStringValue: string = boolVariable.valueOf().toString();

  return (
    <>
      <div className={classes("row-layout bool-bound-components-view-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <h4 className={classes("h4")}>
              <span>Component, bound to BOOL variable</span>
            </h4>
            <div style={{display: 'contents'}} onClick={() => navigate('/string-bound-components-view')}>
              <IgrButton variant="Contained" size="large" className={classes("button")}>
                <span>Previous</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate('/num-bound-components-view')}>
              <IgrButton variant="Contained" size="large" className={classes("button_1")}>
                <span>Next</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div className={classes("row-layout group_2")}>
            <div className={classes("column-layout group_3")}>
              <p className={classes("typography__body-1 text")}>
                <span>Value of the variable:</span>
              </p>
              <p className={classes("typography__body-1 text_1")}>
                <span>{boolToStringValue!}</span>
              </p>
            </div>
            <div className={classes("column-layout group_4")}></div>
            <div className={classes("column-layout group_5")}>
              <div className={classes("row-layout group_6")}>
                <p className={classes("typography__body-1 text_2")}>
                  <span>Two way bound components</span>
                </p>
              </div>
              <div className={classes("row-layout group_7")}>
                <div className={classes("column-layout group_8")}>
                  <IgrCheckbox labelPosition="after" checked={readonlyInput} change={handleReadonlyChange} className={classes("user-input")}>
                    <span>ReadOnly / Disabled</span>
                  </IgrCheckbox>
                  <IgrSwitch checked={boolVariable} change={handleChange} disabled={readonlyInput} className={classes("user-input")}>
                    <span>Disabled</span>
                  </IgrSwitch>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCheckbox labelPosition="after" checked={boolVariable} change={handleChange} disabled={readonlyInput} className={classes("checkbox")}>
                    <span>Disabled</span>
                  </IgrCheckbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
