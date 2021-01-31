import { render, screen } from '@testing-library/react';
import App from './App';

test('Projects', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard/i);
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});
