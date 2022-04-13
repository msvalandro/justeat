import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('should renders correctly', () => {
    render(<Header />);

    const title = screen.getByText('just eat');

    expect(title).toBeInTheDocument();
  });
});
