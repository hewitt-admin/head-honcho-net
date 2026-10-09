import { fireEvent, render, screen } from '@testing-library/react';
import SiteHeader from './site-header';

describe('SiteHeader', () => {
  it('opens and closes the mobile navigation menu', () => {
    render(<SiteHeader />);

    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
    const nav = screen.getByRole('navigation', { name: /primary navigation/i });

    expect(nav).toHaveAttribute('data-open', 'false');

    fireEvent.click(toggleButton);
    expect(nav).toHaveAttribute('data-open', 'true');

    fireEvent.click(toggleButton);
    expect(nav).toHaveAttribute('data-open', 'false');
  });
});
