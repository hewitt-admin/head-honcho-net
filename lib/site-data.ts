export const business = {
  name: "Hewitt's Rocking H Trailer & ATV Repair",
  slogan: 'Built on Hard Work. Backed by Honest Repairs.',
  phone: '(218) 416-0801',
  email: 'josiahjames1231994@gmail.com',
  address: 'Viking, MN 56760',
  reviewDestination:
    'https://www.google.com/maps/search/?api=1&query=Hewitt%27s+Rocking+H+Trailer+%26+ATV+Repair+Viking+MN+56760',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
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
    src: '/images/finished-four-wheeler-outside-shop.jpg',
    alt: 'A repaired four-wheeler outside the shop',
    caption: 'Ready to ride',
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
];

export const testimonials = [
  {
    quote:
      'They got our side-by-side dialed in quickly and explained exactly what needed to be done. Honest, fair, and reliable from start to finish.',
    name: 'Local rider',
  },
  {
    quote:
      'The trailer repair work was solid, and the communication was excellent. You can tell these guys care about doing the job right.',
    name: 'Weekend hauler',
  },
  {
    quote:
      'We brought in a machine with a stubborn electrical issue and they sorted it out without the runaround. Professional and easy to work with.',
    name: 'Customer',
  },
];

export function formatPhoneHref(value: string): string {
  const digits = value.replace(/\D/g, '');
  return `tel:+1${digits}`;
}

export function formatEmailHref(value: string): string {
  return `mailto:${value}`;
}
