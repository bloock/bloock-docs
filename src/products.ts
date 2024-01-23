import {
  Cloud,
  Fingerprint,
  Key,
  Shield,
} from '@styled-icons/fluentui-system-regular';

export const PRODUCTS = [
  {
    title: 'Digital notarization',
    link: '/guides/integrity/overview',
    icon: Shield,
    lightImage: '/static/landing-page/hero/video-graphic.png',
    darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Obtain undeniable proof of your data integrity and existence, safeguarded in an unalterable, timeless record.',
  },
  {
    title: 'Digital signature',
    link: '/guides/authenticity/overview',
    icon: Key,
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Digitally sign smoothly from any device maintaining utmost security and control of your key materials.',
  },
  {
    title: 'Resilient datastorage',
    link: '/guides/availability/overview',
    icon: Cloud,
    lightImage: '/static/landing-page/hero/livestream-graphic.png',
    darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Guarantee your information remains accesible to any authorized party under any circumstance.',
  },
  {
    title: 'Digital identity',
    beta: true,
    link: '/guides/identity/overview',
    icon: Fingerprint,
    lightImage: '/static/landing-page/hero/chat-graphic.png',
    darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Provision privacy-first digital identities to enable secure and verifiable cross-platform authentications.',
  },
];
