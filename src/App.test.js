import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Enviar button', () => {
  render(<App />);
  const enviarButton = screen.getByRole('button', { name: /enviar/i });
  expect(enviarButton).toBeInTheDocument();
});
