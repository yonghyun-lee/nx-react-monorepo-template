import { render } from '@testing-library/react';

import UiComponent from './ui-component';

describe('UiComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponent />);
    expect(baseElement).toBeTruthy();
  });
});
