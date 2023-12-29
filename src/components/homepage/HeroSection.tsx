import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  CloudBidirectionalRegular,
  FingerprintRegular,
  KeyRegular,
  LiveRegular,
  MicRegular,
  ShieldRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Digital notarization',
    link: '/guides/live-video/intro-video-conf',
    icon: ShieldRegular,
    lightImage: '/static/landing-page/hero/video-graphic.png',
    darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Obtain undeniable proof of your data integrity and existence, safeguarded in an unalterable, timeless record.',
  },
  {
    title: 'Digital signature',
    link: '/guides/voice-conf/intro-voice-conf',
    icon: KeyRegular,
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Digitally sign smoothly from any device maintaining utmost security and control of your key materials.',
  },
  {
    title: 'Resilient datastorage',
    link: '/guides/livestream/livestream-overview',
    icon: CloudBidirectionalRegular,
    lightImage: '/static/landing-page/hero/livestream-graphic.png',
    darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Guarantee your information remains accesible to any authorized party under any circumstance.',
  },
  {
    title: 'Digital identity',
    beta: true,
    link: '/guides/realtime-chat/intro-chat',
    icon: FingerprintRegular,
    lightImage: '/static/landing-page/hero/chat-graphic.png',
    darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Provision privacy-first digital identities to enable secure and verifiable cross-platform authentications.',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            Welcome to BLOOCK
          </h2>
          <p className="max-w-xl text-center text-text-400">
            The complete toolkit for cybersecurity-conscious companies to
            protect their information systems leveraging decentralized
            technologies.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
