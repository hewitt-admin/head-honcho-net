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
    src: '/images/shop-hero.jpg',
    alt: 'Exterior view of Hewitt\'s Rocking H shop and service building',
    caption: 'The shop and service building',
  },
  {
    src: '/images/addition.jpg',
    alt: 'Construction and expansion work at the service building',
    caption: 'Building the new addition',
  },
  {
    src: '/images/repair-bench.jpg',
    alt: 'Equipment under repair on the shop bench',
    caption: 'Machines in the shop',
  },
  {
    src: '/images/finished-work.jpg',
    alt: 'Finished repair work ready for customer pickup',
    caption: 'Finished repairs',
  },
  {
    src: '/images/shop-interior.jpg',
    alt: 'Interior of the Rocking H repair shop and workspace',
    caption: 'Inside the shop',
  },
  {
    src: '/images/tools.jpg',
    alt: 'Workshop tools and equipment used for trailer and ATV repairs',
    caption: 'Equipment and tools',
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
