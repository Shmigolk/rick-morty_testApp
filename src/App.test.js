import { render, screen } from '@testing-library/react';
import Favorites from './components/Favorites';

test('renders learn react link', () => {
  render(<Favorites />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
