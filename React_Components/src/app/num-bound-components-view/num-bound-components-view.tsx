import { IgrButton, IgrButtonModule, IgrCheckbox, IgrInput, IgrInputModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSlider, IgrSliderModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './num-bound-components-view.module.css';
import createClassTransformer from '../style-utils';
import { useState } from 'react';

IgrButtonModule.register();
IgrInputModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrSliderModule.register();

export default function NumBoundComponentsView() {
  const navigate = useNavigate();
  const classes = createClassTransformer(styles);

  const [numVariable, setNumVariable] = useState('');
  const handleChange = (event) => {
    setNumVariable(event.value);
  };

  const [readonlyInput, setreadonlyInput] = useState(false);
  const handleReadonlyChange = (event) => {
    setreadonlyInput(event.checked);
  };
  
  return (
    <>
      <div className={classes("row-layout num-bound-components-view-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <h4 className={classes("h4")}>
              <span>Component, bound to NUMERIC variable</span>
            </h4>
            <div style={{display: 'contents'}} onClick={() => navigate('/bool-bound-components-view')}>
              <IgrButton variant="Contained" size="large" className={classes("button")}>
                <span>Previous</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate('/date-bound-components-view')}>
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
                <span>{numVariable! || 0}</span>
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
                  <div className={classes("column-layout group_8")}>
                    <IgrInput type="number" value={numVariable!.toString()} readonly={readonlyInput} disabled={readonlyInput} change={handleChange} label="Duration" outlined="true" className={classes("input")}></IgrInput>
                  </div>
                  <IgrCheckbox labelPosition="after" checked={readonlyInput} change={handleReadonlyChange} className={classes("user-input")}>
                    <span>ReadOnly / Disabled</span>
                  </IgrCheckbox>
                  <IgrRating value={numVariable!} change={handleChange} readonly={readonlyInput} disabled={readonlyInput} size="large" className={classes("rating")}></IgrRating>
                  <IgrRadioGroup value={numVariable!} change={handleChange} readonly={readonlyInput} disabled={readonlyInput} alignment="horizontal" className={classes("user-input")}>
                    <IgrRadio value="1" className={classes("radio")}>
                      <span>Label</span>
                    </IgrRadio>
                    <IgrRadio value="2" className={classes("radio")}>
                      <span>Label</span>
                    </IgrRadio>
                    <IgrRadio value="3" className={classes("radio")}>
                      <span>Label</span>
                    </IgrRadio>
                  </IgrRadioGroup>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrSlider value={numVariable!} input={handleChange} disabled={readonlyInput} min="0" max="100" step="10" discreteTrack="true" className={classes("slider")}></IgrSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
