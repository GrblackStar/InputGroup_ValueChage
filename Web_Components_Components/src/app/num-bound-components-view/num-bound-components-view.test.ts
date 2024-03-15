import { expect } from '@open-wc/testing';
import NumBoundComponentsView from './num-bound-components-view.js';

describe('NumBoundComponentsView', () => {
  it('<app-num-bound-components-view> is an instance of NumBoundComponentsView', async () => {
    const element = document.createElement('app-num-bound-components-view');
    expect(element).to.be.instanceOf(NumBoundComponentsView);
  });
});
