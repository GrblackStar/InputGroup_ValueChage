import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import StringBoundComponentsView from './string-bound-components-view';

test('renders StringBoundComponentsView component', () => {
    const wrapper = render(<StringBoundComponentsView />);
    expect(wrapper).toBeTruthy();
});