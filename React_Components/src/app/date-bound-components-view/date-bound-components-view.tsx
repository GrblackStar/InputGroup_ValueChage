import { IgrButton, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from 'igniteui-react-inputs';
import { useNavigate } from 'react-router-dom';
import styles from './date-bound-components-view.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCalendarModule.register();
IgrRippleModule.register();
IgrDatePickerModule.register();

export default function DateBoundComponentsView() {
  const navigate = useNavigate();
  const classes = createClassTransformer(styles);
  const dateVariable: Date = new Date();

  /*
  const StyledDatePicker = ({ className, ...rest }) => (
    <div className={className}>
      <IgrDatePicker {...rest}></IgrDatePicker>
    </div>
  );

  //<StyledDatePicker className={classes("date-picker")} label="Date" value={dateVariable!}></StyledDatePicker>
  */

  return (
    <>
      <div className={classes("row-layout date-bound-components-view-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <h4 className={classes("h4")}>
              <span>Component, bound to DATE variable</span>
            </h4>
            <div style={{display: 'contents'}} onClick={() => navigate('/num-bound-components-view')}>
              <IgrButton variant="Contained" size="large" className={classes("button")}>
                <span>Previous</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate('/master-view')}>
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
                <span>{dateVariable!.toString()}</span>
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
                  <IgrDatePicker label="Date" value={dateVariable!}></IgrDatePicker>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCalendar hideHeader="Horizontal" value={dateVariable!} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
                </div>
                <div className={classes("column-layout group_10")}>
                  <IgrCalendar hideHeader="Horizontal" value={dateVariable!} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
