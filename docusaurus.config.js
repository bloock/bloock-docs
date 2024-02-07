const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'BLOOCK Docs',
  tagline: 'Streamlining secure information exchanges',
  url: 'https://docs.bloock.com',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  // SDKs
  {
    id: 'sdk-javascript',
    path: 'docs/sdks/javascript',
    routeBasePath: '/javascript',
  },
  {
    id: 'sdk-java',
    path: 'docs/sdks/java',
    routeBasePath: '/java',
  },
  {
    id: 'sdk-php',
    path: 'docs/sdks/php',
    routeBasePath: '/php',
  },
  {
    id: 'sdk-python',
    path: 'docs/sdks/python',
    routeBasePath: '/python',
  },
  {
    id: 'sdk-golang',
    path: 'docs/sdks/golang',
    routeBasePath: '/golang',
  },

  // Tools
  {
    id: 'tools-managed-api',
    path: 'docs/tools/managed-api',
    routeBasePath: '/managed-api',
  },
  {
    id: 'tools-identity-server',
    path: 'docs/tools/identity-server',
    routeBasePath: '/identity-server',
  },
  {
    id: 'tools-validproof',
    path: 'docs/tools/validproof',
    routeBasePath: '/validproof',
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: 'https://github.com/bloock/bloock-docs/tree/master/',
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  () => ({
    name: 'custom-webpack-loaders',
    configureWebpack: () => ({
      module: {
        rules: [
          {
            test: /\.source$/,
            type: 'asset/source',
          },
        ],
      },
    }),
  }),
];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const toolsHTML = fs.readFileSync('./src/snippets/tools.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  onBrokenLinks: 'warn',
  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js' }],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/bloock-docs-card.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/logo-blue.png',
          srcDark: '/logo/logo-white.png',
          alt: 'BLOOCK Docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            label: 'Guides',
            to: 'guides',
            className: 'guides-top-header',
          },
          {
            label: 'SDKs',
            type: 'dropdown',
            className: 'bloock-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'bloock-dropdown',
              },
            ],
          },
          {
            label: 'Tools',
            type: 'dropdown',
            className: 'bloock-dropdown',
            items: [
              {
                type: 'html',
                value: toolsHTML,
                className: 'bloock-dropdown',
              },
            ],
          },
          {
            label: 'Resources',
            type: 'dropdown',
            className: 'bloock-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: resourcesHTML,
                className: 'bloock-dropdown',
              },
            ],
          },
          {
            label: 'Support',
            to: 'https://bloock.com/contact',
          },

          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Book a demo',
            href: 'https://bloock.com/contact',
            position: 'right',
            className: 'navbar-book-demo',
          },
          {
            label: 'Sign Up',
            href: 'https://dashboard.bloock.com/signup',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
        ],
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: ['php', 'groovy', 'kotlin', 'java'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'VHCB9H9WU3',
        apiKey: '2bc36d0173e0ddc24ed8095eb00504ad',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
