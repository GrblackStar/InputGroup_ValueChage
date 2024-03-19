import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './string-bound-components-view.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function StringBoundComponentsView() {
  const navigate = useNavigate();
  const classes = createClassTransformer(styles);
  const stringVariable: string = null;

  return (
    <>
      <div className={classes("row-layout string-bound-components-view-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <h4 className={classes("h4")}>
              <span>Component, bound to STRING variable</span>
            </h4>
            <div style={{display: 'contents'}} onClick={() => navigate('/date-bound-components-view')}>
              <IgrButton variant="Contained" size="large" className={classes("button")}>
                <span>Previous</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate('/bool-bound-components-view')}>
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
                <span>{stringVariable!}</span>
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
                <div className={classes("column-layout group")}>
                  <p className={classes("typography__body-1 text_3")}>
                    <span>Input group</span>
                  </p>
                  <IgrInput value={stringVariable!} label="Label/Placeholder" outlined="true" className={classes("input")}></IgrInput>
                  <p className={classes("typography__body-1 text_4")}>
                    <span>Text Area</span>
                  </p>
                  <span className={classes("textarea")}>Textarea not yet available in React</span>
                </div>
                <div className={classes("column-layout group_8")}>
                  <div className={classes("column-layout group_9")}>
                    <p className={classes("typography__body-1 text_3")}>
                      <span>Select:</span>
                    </p>
                    <IgrSelect outlined="true" label="Label/Placeholder" placeholder={stringVariable!} value={stringVariable!} className={classes("select")}>
                      <IgrSelectItem value="Option">
                        <span>Option</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect outlined="true" label="Label/Placeholder" className={classes("select_1")}>
                      <IgrSelectItem value="Option">
                        <span>Option</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
