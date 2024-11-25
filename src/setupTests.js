import { render, screen } from '@testing-library/react';
import AnimatedRoutes from './App'; // Import AnimatedRoutes component

test('renders navigation component', () => {
  render(<AnimatedRoutes />); // Render the AnimatedRoutes component
  const navElement = screen.getByText(/portnav/i); // Check for the text or content in Portnav component
  expect(navElement).toBeInTheDocument();
});
