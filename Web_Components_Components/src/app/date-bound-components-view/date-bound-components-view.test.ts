import { expect } from '@open-wc/testing';
import DateBoundComponentsView from './date-bound-components-view.js';

describe('DateBoundComponentsView', () => {
  it('<app-date-bound-components-view> is an instance of DateBoundComponentsView', async () => {
    const element = document.createElement('app-date-bound-components-view');
    expect(element).to.be.instanceOf(DateBoundComponentsView);
  });
});
