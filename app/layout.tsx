import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: "Hewitt's Rocking H Trailer & ATV Repair",
  description:
    'Dependable ATV, UTV, side-by-side, and trailer repair in Viking, Minnesota. Honest work, fair pricing, and repairs you can trust.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hewitt's Rocking H Trailer & ATV Repair",
    description:
      'Dependable ATV, UTV, side-by-side, and trailer repair in Viking, Minnesota. Honest work, fair pricing, and repairs you can trust.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
