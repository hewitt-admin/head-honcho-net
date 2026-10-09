import { business, formatEmailHref, formatPhoneHref } from './site-data';

describe('contact helpers', () => {
  it('formats phone numbers to a valid tel link', () => {
    expect(formatPhoneHref('(218) 416-0801')).toBe('tel:+12184160801');
  });

  it('formats email links to a valid mailto link', () => {
    expect(formatEmailHref(business.email)).toBe(`mailto:${business.email}`);
  });
});
