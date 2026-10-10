export const business = {
  name: "Hewitt's Rocking H Trailer & ATV Repair",
  slogan: 'Built on Hard Work. Backed by Honest Repairs.',
  phone: '(218) 416-0801',
  email: 'josiahjames1231994@gmail.com',
  address: 'Viking, MN 56760',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

export const serviceList = [
  'ATV Repair',
  'UTV & Side-by-Side Repair',
  'Trailer Repair',
  'Engine Diagnostics',
  'Engine Repair & Rebuilds',
  'Electrical Repair',
  'Brake Service',
  'Suspension Repair',
  'Tires & Wheel Bearings',
  'Seasonal Maintenance',
  'General Repairs',
];

export const galleryItems = [
  {
    src: '/images/building-shop-extension.jpg',
    alt: 'Work on the shop extension',
    caption: 'Building the shop extension',
  },
  {
    src: '/images/shop-extension-ground-work.jpg',
    alt: 'Ground work for the shop extension',
    caption: 'Preparing the site for the shop extension',
  },
  {
    src: '/images/building-shop-extension-slab.jpg',
    alt: 'The concrete slab for the shop extension',
    caption: 'Laying the shop extension slab',
  },
  {
    src: '/images/shop-extension-framing.jpg',
    alt: 'Framing for the shop extension',
    caption: 'Framing the shop extension',
  },
  {
    src: '/images/IMG_20260804_160226.jpg',
    alt: 'The shop extension with house wrap installed and roof framing exposed',
    caption: 'Shop extension under construction',
  },
  {
    src: '/images/shop-extension-exterior-siding-in-progress.jpg',
    alt: 'Exterior siding being installed on the shop extension',
    caption: 'Siding the shop extension',
  },
  {
    src: '/images/shop-extension-interior-finishes.jpg',
    alt: 'Interior finishing work in the shop extension',
    caption: 'Finishing the shop extension interior',
  },
  {
    src: '/images/shop-extension-interior-panneling.jpg',
    alt: 'Paneling installed inside the shop extension',
    caption: 'Paneling the shop extension',
  },
  {
    src: '/images/IMG_20260804_160227 (1).jpg',
    alt: 'A workbench, tool cabinet, television, and air compressor in the shop',
    caption: 'A corner of the shop interior',
  },
  {
    src: '/images/finished-shop-interior-from-behind-desk.jpg',
    alt: 'The finished shop interior viewed from behind the desk',
    caption: 'Inside the finished shop',
  },
  {
    src: '/images/josiah-installing-a-safe-in-finished-shop.jpg',
    alt: 'Josiah installing a safe in the finished shop',
    caption: 'Finishing touches in the shop',
  },
  {
    src: '/images/josiah-talking-inside-shop.jpg',
    alt: 'Josiah talking inside the shop',
    caption: 'At work in the shop',
  },
  {
    src: '/images/josiah-outside-shop-winter.jpg',
    alt: 'Josiah standing outside the shop in winter',
    caption: 'Outside the shop in winter',
  },
  {
    src: '/images/josiah-talking-outside-shop-winter.jpg',
    alt: 'Josiah talking outside the shop in winter',
    caption: 'A winter day at the shop',
  },
  {
    src: '/images/starting-four-wheeler-repair.jpg',
    alt: 'A four-wheeler at the start of a repair',
    caption: 'Starting a four-wheeler repair',
  },
  {
    src: '/images/repairing-four-wheeler.jpg',
    alt: 'Repairing a four-wheeler in the shop',
    caption: 'Repairing a four-wheeler',
  },
  {
    src: '/images/repaired-four-wheeler-pulled-transmission.jpg',
    alt: 'A four-wheeler with its transmission removed during repair',
    caption: 'A four-wheeler repair in progress',
  },
  {
    src: '/images/pulled-engine-from-four-wheeler.jpg',
    alt: 'An engine removed from a four-wheeler during repair',
    caption: 'Four-wheeler engine repair',
  },
  {
    src: '/images/repaired-four-wheeler.jpg',
    alt: 'A repaired four-wheeler',
    caption: 'Four-wheeler repair',
  },
  {
    src: '/images/finished-four-wheeler-outside-shop.jpg',
    alt: 'A repaired four-wheeler outside the shop',
    caption: 'Ready to ride',
  },
  {
    src: '/images/repaired-atvs-utvs.jpg',
    alt: 'Repaired ATVs and UTVs',
    caption: 'ATVs and UTVs ready to ride',
  },
  {
    src: '/images/restored-polaris-snowmobile.jpg',
    alt: 'A restored Polaris snowmobile',
    caption: 'Restored Polaris snowmobile',
  },
  {
    src: '/images/trailers-waiting-to-be-restored.jpg',
    alt: 'Trailers waiting to be restored',
    caption: 'Trailers in line for restoration',
  },
  {
    src: '/images/restoring-trailer-josiah-removing-decking.jpg',
    alt: 'Josiah removing the decking from a trailer during its restoration',
    caption: 'Restoring a trailer',
  },
  {
    src: '/images/trailer-before-and-after-restore.jpg',
    alt: 'A trailer shown before and after restoration',
    caption: 'Trailer restoration before and after',
  },
  {
    src: '/images/refurbished-trailer.jpg',
    alt: 'A refurbished utility trailer',
    caption: 'Refurbished trailer',
  },
];

export function formatPhoneHref(value: string): string {
  const digits = value.replace(/\D/g, '');
  return `tel:+1${digits}`;
}

export function formatEmailHref(value: string): string {
  return `mailto:${value}`;
}
