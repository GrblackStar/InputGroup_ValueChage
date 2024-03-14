import { expect } from '@open-wc/testing';
import StringBoundComponentsView from './string-bound-components-view.js';

describe('StringBoundComponentsView', () => {
  it('<app-string-bound-components-view> is an instance of StringBoundComponentsView', async () => {
    const element = document.createElement('app-string-bound-components-view');
    expect(element).to.be.instanceOf(StringBoundComponentsView);
  });
});
