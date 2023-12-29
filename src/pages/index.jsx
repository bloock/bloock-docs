import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';
import SDKs from '../components/homepage/SDKs';
import Link from '@docusaurus/Link';

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      <div>
        <div className="w-full bg-gradient-to-r from-primary-100 to-accent p-4 text-center font-medium text-white">
          Lorem ipsum dolor{' '}
          <Link
            to="/guides/integrity/overview"
            className="text-white underline"
          >
            sit amet.
          </Link>
        </div>
      </div>

      <HeroSection />

      <SDKs />

      <div className="z-0">
        <HelpSection className="-mb-48" />
      </div>

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
