import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation component', () => {
  render(<App />);
  const navElement = screen.getByText(/portnav/i); // Replace with a text you expect to find
  expect(navElement).toBeInTheDocument();
});
