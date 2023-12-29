import React from 'react';
import Link from '@docusaurus/Link';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';

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

function Links({ name, links }) {
  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href }) => (
          <Link
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
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Solutions" links={solutions} />
          <Links name="Company" links={company} />
        </div>

        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
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
            <Link href="https://www.bloock.com/legal" aria-label="Twitter">
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
