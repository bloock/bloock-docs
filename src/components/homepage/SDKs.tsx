import Link from '@docusaurus/Link';
import React from 'react';

function SDK({ icon, to, name }: { icon: string; name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mt-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        SDK Documentation
      </span>

      <h3 className="mb-7 text-4xl">
        Build the way you want in the language you want!
      </h3>

      <div className="my-5">
        <h4 className="mb-2 text-2xl">Core SDK</h4>

        <p className="mb-6 text-text-400">
          Every BLOOCK product in a{' '}
          <span className="font-semibold">all in one</span> SDK so you can build
          faster.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="JS"
            to="/javascript"
            icon="/static/landing-page/sdk-icons/js.png"
          />
          <SDK
            name="Java"
            to="/java"
            icon="/static/landing-page/sdk-icons/java.png"
          />
          <SDK
            name="PHP"
            to="/php"
            icon="/static/landing-page/sdk-icons/php.svg"
          />
          <SDK
            name="Python"
            to="/python"
            icon="/static/landing-page/sdk-icons/python.png"
          />
          <SDK
            name="Golang"
            to="/golang"
            icon="/static/landing-page/sdk-icons/golang.svg"
          />
        </div>
      </div>

      <div className="my-5">
        <h4 className="mb-2 text-2xl">Tools</h4>

        <p className="mb-6 text-text-400">
          Build <span className="font-semibold">even faster</span> with our
          prebuilt and self-hosted components.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="Managed API"
            to="/managed-api"
            icon="/static/landing-page/sdk-icons/server.svg"
          />
          <SDK
            name="Identity Server"
            to="/identity-server"
            icon="/static/landing-page/sdk-icons/server.svg"
          />
          <SDK
            name="ValidProof"
            to="/validproof"
            icon="/static/landing-page/sdk-icons/react.png"
          />
        </div>
      </div>
    </section>
  );
}
