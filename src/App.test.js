import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const heading = screen.getByText(/sargent cylinders/i);
  expect(heading).toBeInTheDocument();
});
