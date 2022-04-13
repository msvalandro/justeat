import { render } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('should renders correctly', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).not.toBeNull();
  });
});
