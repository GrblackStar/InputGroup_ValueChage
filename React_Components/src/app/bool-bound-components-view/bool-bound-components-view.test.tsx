import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import BoolBoundComponentsView from './bool-bound-components-view';

test('renders BoolBoundComponentsView component', () => {
    const wrapper = render(<BoolBoundComponentsView />);
    expect(wrapper).toBeTruthy();
});