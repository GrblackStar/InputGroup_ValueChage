import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSlider, IgrSliderModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './num-bound-components-view.module.css';
import createClassTransformer from '../style-utils';

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
  const numVariable: number = 0;

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
                <span>{numVariable!}</span>
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
                    <IgrInput type="number" value={numVariable!.toString()} label="Duration" outlined="true" className={classes("input")}></IgrInput>
                  </div>
                  <IgrRating value={numVariable!} size="large" className={classes("rating")}></IgrRating>
                  <IgrRating value={numVariable!} size="large" className={classes("user-input")}></IgrRating>
                  <IgrRadioGroup alignment="horizontal" className={classes("user-input")}>
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
                  <IgrSlider value={numVariable!} min="0" max="100" step="10" discreteTrack="true" className={classes("slider")}></IgrSlider>
                  <IgrSlider value={numVariable!} min="0" max="100" step="10" discreteTrack="true" className={classes("slider")}></IgrSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
