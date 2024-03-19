import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrRipple, IgrRippleModule, IgrSwitch, IgrSwitchModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './bool-bound-components-view.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrRippleModule.register();
IgrSwitchModule.register();

export default function BoolBoundComponentsView() {
  const navigate = useNavigate();
  const classes = createClassTransformer(styles);
  const boolVariable: boolean = false;

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
                <span>{boolVariable}</span>
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
                  <IgrSwitch checked="boolVariable" className={classes("switch")}>
                    <span>Label</span>
                  </IgrSwitch>
                  <IgrSwitch checked="boolVariable" className={classes("user-input")}>
                    <span>Label</span>
                  </IgrSwitch>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCheckbox labelPosition="after" checked="boolVariable" className={classes("checkbox")}>
                    <span>Label</span>
                  </IgrCheckbox>
                  <IgrCheckbox labelPosition="after" checked="boolVariable" className={classes("user-input")}>
                    <span>Label</span>
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
