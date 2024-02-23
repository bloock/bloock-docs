import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black lg:p-24 lg:py-20 dark:bg-black dark:text-white',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">How can we help you?</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/calendar.svg"
              alt="Book a demo"
              width="48"
              height="48"
            />
            <h3 className="my-3">Book a Demo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Contact us for a demo. We are looking forward to connecting with
              you.
            </p>
            <Link
              href="https://bloock.com/contact"
              className="text-primary dark:text-primary-100"
            >
              Schedule a Call &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/customer.svg"
              alt="Support"
              width="48"
              height="48"
            />
            <h3 className="my-3">Support</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              BLOOCK&apos;s expert support team is always available to help.
              Connect for dedicated 1:1 support!
            </p>
            <Link
              href="https://bloock.com/contact"
              className="text-primary dark:text-primary-100"
            >
              Contact Us &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/chat.svg"
              alt="FAQs"
              width="48"
              height="48"
            />
            <h3 className="my-3">Technical support</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you have technical questions, chat live with developers in the
              official BLOOCK Discord server.
            </p>
            <Link
              href="https://discord.gg/9zhJmKaRDN"
              className="text-primary dark:text-primary-100"
            >
              Discord &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
