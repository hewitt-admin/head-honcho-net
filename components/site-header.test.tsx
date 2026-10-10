import { fireEvent, render, screen } from '@testing-library/react';
import SiteHeader from './site-header';

describe('SiteHeader', () => {
  it('shrinks while scrolling and restores its original size at the top', () => {
    render(<SiteHeader />);

    const header = screen.getByRole('banner');
    expect(header).toHaveAttribute('data-scrolled', 'false');

    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true });
    fireEvent.scroll(window);
    expect(header).toHaveAttribute('data-scrolled', 'true');

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    fireEvent.scroll(window);
    expect(header).toHaveAttribute('data-scrolled', 'false');
  });

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
