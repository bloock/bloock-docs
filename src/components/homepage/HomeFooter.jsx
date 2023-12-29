import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';

const products = [
  {
    name: 'Digital notarization',
    href: 'https://www.bloock.com/data-integrity',
  },
  {
    name: 'Digital signature',
    href: 'https://www.bloock.com/data-authenticity',
  },
  {
    name: 'Resilient datastorage',
    href: 'https://www.bloock.com/data-availabilty',
  },
  {
    name: 'Digital identity',
    href: 'https://www.bloock.com/digital-identity',
  },
  {
    name: 'Pricing',
    href: 'https://www.bloock.com/pricing',
  },
];

const developers = [
  {
    name: 'Developer Portal',
    href: 'https://dashboard.bloock.com',
  },
  {
    name: 'Documentation',
    href: 'https://docs.bloock.com',
  },
  {
    name: 'Guides',
    href: '/guides',
  },
];

const solutions = [
  { name: 'Education', href: 'https://www.bloock.com/solutions-education' },
  { name: 'ESG', href: 'https://www.bloock.com/solutions-esg' },
  { name: 'Health', href: 'https://www.bloock.com/solutions-health-safety' },
];

const company = [
  { name: 'About Us', href: 'https://www.bloock.com/about' },
  { name: 'Blog', href: 'https://www.bloock.com/blog' },
  { name: 'Partners', href: 'https://www.bloock.com/partners' },
  { name: 'Contact Us', href: 'https://www.bloock.com/contact' },
  { name: 'FAQ', href: '/faq' },
];

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: 'none',
    description: 'All Systems Operational',
  });

  useEffect(() => {
    if (typeof StatusPage !== 'undefined') {
      // eslint-disable-next-line no-undef
      var sp = new StatusPage.page({ page: 'f2n3vcnqxjws' });
      sp.status({
        success: function (data) {
          setStatus({
            indicator: data.status.indicator,
            description: data.status.description,
          });
        },
      });
    }
  }, []);

  return (
    <Link
      href="https://bloock.statuspage.io/"
      className={clsx(
        'flex items-center gap-2 rounded-lg border border-transparent p-1 px-2 font-jakarta font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:bg-white hover:no-underline',
        className
      )}
      target="_blank"
    >
      <div
        className={clsx(
          'h-4 w-4 rounded-full bg-[#2DB002]',
          status.indicator === 'none' ? 'bg-[#2DB002]' : 'bg-yellow-500'
        )}
      ></div>
      <div>{status.description}</div>
    </Link>
  );
}

function Links({ name, links }) {
  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="text-base text-gray-700 hover:text-primary hover:no-underline"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <img
            src="/logo/logo-blue.png"
            alt="BLOOCK"
            className="h-9 w-auto lg:h-12"
          />
          <BrowserOnly>
            {() => {
              return <Status className="lg:hidden" />;
            }}
          </BrowserOnly>
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Solutions" links={solutions} />
          <Links name="Company" links={company} />
        </div>

        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <BrowserOnly>
            {() => {
              return <Status className="hidden lg:flex" />;
            }}
          </BrowserOnly>

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link
              href="https://www.bloock.com/legal"
              className="text-inherit hover:text-black hover:underline"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="https://www.bloock.com/legal"
              className="text-inherit hover:text-black hover:underline"
            >
              Terms of Service
            </Link>
            &bull;
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} Bloock Hub SL
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/bloock"
              aria-label="BLOOCK GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/bloock"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://twitter.com/bloocktech"
              aria-label="Twitter"
              className="h-7 w-7"
            >
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://www.youtube.com/@bloock8564"
              aria-label="BLOOCK YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
