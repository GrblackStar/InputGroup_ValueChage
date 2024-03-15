import { expect } from '@open-wc/testing';
import BoolBoundComponentsView from './bool-bound-components-view.js';

describe('BoolBoundComponentsView', () => {
  it('<app-bool-bound-components-view> is an instance of BoolBoundComponentsView', async () => {
    const element = document.createElement('app-bool-bound-components-view');
    expect(element).to.be.instanceOf(BoolBoundComponentsView);
  });
});
