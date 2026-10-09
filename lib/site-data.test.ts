import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { business, formatEmailHref, formatPhoneHref, galleryItems } from './site-data';

describe('contact helpers', () => {
  it('formats phone numbers to a valid tel link', () => {
    expect(formatPhoneHref('(218) 416-0801')).toBe('tel:+12184160801');
  });

  it('formats email links to a valid mailto link', () => {
    expect(formatEmailHref(business.email)).toBe(`mailto:${business.email}`);
  });
});

describe('homepage images', () => {
  it('keeps every referenced image available in public assets', () => {
    const imagePaths = ['/images/shop-hero.jpg', ...galleryItems.map(({ src }) => src)];

    imagePaths.forEach((imagePath) => {
      expect(existsSync(join(process.cwd(), 'public', imagePath.slice(1))), `${imagePath} should exist`).toBe(true);
    });
  });
});
