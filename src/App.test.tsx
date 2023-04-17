import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a welcome component', () => {
  render(<App />);
  const welcomeTextElement = screen.getByText(/welcome/i);
  expect(welcomeTextElement).toBeInTheDocument();
});
