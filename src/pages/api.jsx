import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';
import useBreakpoint from '../lib/useBreakpoint';
import RunInPostmanButton from '../components/RunInPostmanButton';
import { Monitor } from 'react-feather';
import Link from '@docusaurus/Link';
import { APIIcon } from '../icons';
import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';

function APIElement({ layout = 'sidebar', currentVersion = 'v1' }) {
  return (
    <BrowserOnly>
      {() => {
        return (
          <div className={clsx('elements-container', layout)}>
            <StoplightProject
              // className="stacked"
              projectId={`cHJqOjIzMzUyNg`}
              basePath="/"
              router="hash"
              // layout={layout}
              hideExport
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

  const currentVersion = url.searchParams.get('v') || 'v1';

  return (
    <Layout
      title="API Reference"
      description="Dyte REST API Reference"
      noFooter
      wrapperClassName="api-reference"
    >
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
