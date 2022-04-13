import { render, screen } from '@testing-library/react';
import { Loading } from '.';

describe('Loading component', () => {
  it('should renders correctly', () => {
    render(<Loading />);

    const container = screen.getByTestId('loading');

    expect(container.childNodes.length).toBe(3);
  });
});
