import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';
import useBreakpoint from '../lib/useBreakpoint';
import RunInPostmanButton from '../components/RunInPostmanButton';
import { Monitor } from 'react-feather';
import Link from '@docusaurus/Link';
import { APIIcon } from '../icons';
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

function APIElement({ layout = 'sidebar', currentVersion = 'v1' }) {
  return (
    <BrowserOnly>
      {() => {
        return (
          <div className={clsx('elements-container', layout)}>
            <API
              className="stacked"
              apiDescriptionUrl={`https://raw.githubusercontent.com/bloock/managed-apis-docs/master/reference/Managed-API.yaml`}
              basePath="/"
              router="hash"
              layout={layout}
              hideSchemas
              hideInternal
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}

export default function Home() {
  const router = useHistory();
  const size = useBreakpoint();

  const location = router.location;

  const url = new URL(
    `https://docs.dyte.io${location.pathname}${location.search}`
  );

  const currentVersion = url.searchParams.get('v') || 'v2';

  return (
    <Layout
      title={`API ${
        currentVersion === 'v2' ? 'v2' : ''
      }Documentation | Dyte Docs`}
      description={
        currentVersion === 'v2'
          ? "Dive into Dyte's API v2 documentation, offering advanced features and functionalities."
          : "Explore the comprehensive API documentation provided by Dyte. Learn how to integrate and leverage Dyte's API."
      }
      noFooter
      wrapperClassName="api-reference"
    >
      <Head>
        {/* Load styles for Stoplight Elements */}
        <title></title>
        <link rel="preload" href="/assets/css/elements.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/elements.min.css" />
      </Head>

      <div className="flex flex-col items-center justify-center gap-4 border-b py-12 text-sm lg:hidden">
        <Monitor className="h-12 w-12" />
        This page is best viewed in a desktop browser.
      </div>

      <div className="header">
        <h1 className="mb-0 flex items-center gap-2 text-sm font-semibold lg:text-lg">
          <APIIcon className="hidden h-8 lg:block" />
          REST API
        </h1>
        <div className="aside">
          {currentVersion === 'v2' && (
            <Link
              href="/release-notes/rest-api"
              className="no-underline-links text-xs"
            >
              Release Notes
            </Link>
          )}
          {size === 'lg' && <RunInPostmanButton />}
        </div>
      </div>
      <APIElement
        layout={size === 'sm' ? 'stacked' : 'sidebar'}
        currentVersion={currentVersion}
      />
    </Layout>
  );
}
