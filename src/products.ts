import {
  Cloud,
  Fingerprint,
  Key,
  Shield,
} from '@styled-icons/fluentui-system-regular';

export const PRODUCTS = [
  {
    title: 'Digital notarization',
    link: '/guides/products/integrity/overview',
    icon: Shield,
    lightImage: '/static/landing-page/hero/banner_integrity.png',
    darkImage: '/static/landing-page/hero/banner_integrity_dark.png',
    text: 'Obtain undeniable proof of your data integrity and existence, safeguarded in an unalterable, timeless record.',
  },
  {
    title: 'Key management',
    link: '/guides/products/key/overview',
    icon: Key,
    lightImage: '/static/landing-page/hero/banner_authenticity.png',
    darkImage: '/static/landing-page/hero/banner_authenticity_dark.png',
    text: 'Digitally sign smoothly from any device maintaining utmost security and control of your key materials.',
  },
  {
    title: 'Resilient datastorage',
    link: '/guides/products/availability/overview',
    icon: Cloud,
    lightImage: '/static/landing-page/hero/banner_availability.png',
    darkImage: '/static/landing-page/hero/banner_availability_dark.png',
    text: 'Guarantee your information remains accesible to any authorized party under any circumstance.',
  },
  {
    title: 'Digital identity',
    beta: true,
    link: '/guides/products/identity/overview',
    icon: Fingerprint,
    lightImage: '/static/landing-page/hero/banner_identity.png',
    darkImage: '/static/landing-page/hero/banner_identity_dark.png',
    text: 'Provision privacy-first digital identities to enable secure and verifiable cross-platform authentications.',
  },
];
