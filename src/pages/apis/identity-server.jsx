import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import useBreakpoint from '../../lib/useBreakpoint';
import { Monitor } from 'react-feather';
import { APIIcon } from '../../icons';
import { API } from '@stoplight/elements';

function APIElement({ layout = 'sidebar', url }) {
  return (
    <BrowserOnly>
      {() => {
        return (
          <div className={clsx('elements-container', layout)}>
            <API
              className="stacked"
              apiDescriptionUrl={url}
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
  const size = useBreakpoint();

  return (
    <Layout
      title={`Identity Server Documentation | BLOOCK Docs`}
      description="Explore the comprehensive API documentation provided by BLOOCK. Learn how to integrate and leverage BLOOCK's Identity Server."
      noFooter
      wrapperClassName="api-reference"
    >
      <Head>
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
          Identity Server API
        </h1>
      </div>
      <APIElement
        layout={size === 'sm' ? 'stacked' : 'sidebar'}
        url={`https://raw.githubusercontent.com/bloock/managed-apis-docs/master/reference/Identity-Managed-API.yaml`}
      />
    </Layout>
  );
}
