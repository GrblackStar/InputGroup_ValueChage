import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import DateBoundComponentsView from './date-bound-components-view';

test('renders DateBoundComponentsView component', () => {
    const wrapper = render(<DateBoundComponentsView />);
    expect(wrapper).toBeTruthy();
});