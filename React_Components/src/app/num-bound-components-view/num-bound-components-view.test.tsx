import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import NumBoundComponentsView from './num-bound-components-view';

test('renders NumBoundComponentsView component', () => {
    const wrapper = render(<NumBoundComponentsView />);
    expect(wrapper).toBeTruthy();
});