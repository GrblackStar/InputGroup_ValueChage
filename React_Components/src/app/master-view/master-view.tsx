import { IgrButton, IgrButtonModule, IgrCombo, IgrComboModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useGetCategories, useGetCustomers } from '../hooks/northwind-hooks';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';
import { useState } from 'react';

IgrButtonModule.register();
IgrComboModule.register();
IgrRippleModule.register();

export default function MasterView() {
  const navigate = useNavigate();
  const classes = createClassTransformer(styles);
  const customerArray = useGetCustomers();
  const categoryArray = useGetCategories();
  
  const [categoryObject, setCategoryObject] = useState(null);
  const handleChange = (component) => {
    const selectedCategory = component.value[0];
    setCategoryObject(selectedCategory);
  };

  const [customerOutputArray, setcustomerOutputArray] = useState(null);
  const handleMultipleSelectionChange = (component) => {
    const selectedElements= component.value;
    setcustomerOutputArray(selectedElements);
  }

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <h4 className={classes("h4")}>
              <span>Component, bound to OBJECT variable</span>
            </h4>
            <div style={{display: 'contents'}} onClick={() => navigate('/date-bound-components-view')}>
              <IgrButton variant="Contained" size="large" className={classes("button")}>
                <span>Previous</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate('/string-bound-components-view')}>
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
                <span>For Simple Combo</span>
              </p>
              <p className={classes("typography__body-1 text_1")}>
                <span>{categoryObject?.name}</span>
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
                  <p className={classes("typography__body-1 text_3")}>
                    <span>Simple Combo:</span>
                  </p>
                  <IgrCombo outlined="true" data={categoryArray} value={ [categoryObject] } closing={handleChange} label="Label/Placeholder" displayKey="description" singleSelect="true" className={classes("user-input")}></IgrCombo>
                  <IgrCombo outlined="true" data={categoryArray} value={ [categoryObject] } closing={handleChange} label="Label/Placeholder" displayKey="description" singleSelect="true" className={classes("user-input_1")}></IgrCombo>
                </div>
                <div className={classes("column-layout group_9")}>
                  <p className={classes("typography__body-1 text_3")}>
                    <span>Combo:</span>
                  </p>
                  <IgrCombo outlined="true" data={customerArray} value={customerOutputArray! ? customerOutputArray : []} closing={handleMultipleSelectionChange} label="Label/Placeholder" displayKey="customerID" autoFocusSearch="true" disableFiltering="true"  className={classes("user-input")}></IgrCombo>
                  <IgrCombo outlined="true" data={customerArray} value={customerOutputArray! ? customerOutputArray : []} closing={handleMultipleSelectionChange} label="Label/Placeholder" displayKey="customerID" autoFocusSearch="true" disableFiltering="true" className={classes("user-input_1")}></IgrCombo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
