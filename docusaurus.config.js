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
  {
    id: 'cli',
    path: 'docs/cli',
    routeBasePath: '/cli',
  },
  {
    id: 'plugin-sdk',
    path: 'docs/plugin-sdk',
    routeBasePath: '/plugin-sdk',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Community packages
  {
    id: 'community-packages',
    path: 'docs/community-packages',
    routeBasePath: '/community-packages',
  },

  // Web UI Kits
  {
    id: 'ui-kit',
    path: 'docs/ui-kit',
    routeBasePath: '/ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'react-ui-kit',
    path: 'docs/react-ui-kit',
    routeBasePath: '/react-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'angular-ui-kit',
    path: 'docs/angular-ui-kit',
    routeBasePath: '/angular-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Web Core
  {
    id: 'web-core',
    path: 'docs/web-core',
    routeBasePath: '/web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  // React Web Core
  {
    id: 'react-web-core',
    path: 'docs/react-web-core',
    routeBasePath: '/react-web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Mobile Core
  {
    id: 'android-core',
    path: 'docs/android-core',
    routeBasePath: '/android-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'flutter-core',
    path: 'docs/flutter-core',
    routeBasePath: '/flutter-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'ios-core',
    path: 'docs/ios-core',
    routeBasePath: '/ios-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'rn-core',
    path: 'docs/rn-core',
    routeBasePath: '/rn-core',
    versions: {
      current: {
        label: '0.5.x',
      },
    },
  },

  // Mobile UI Kits
  {
    id: 'android',
    path: 'docs/android',
    routeBasePath: '/android',
    versions: {
      current: {
        label: '0.14.x',
      },
    },
  },
  {
    id: 'flutter',
    path: 'docs/flutter',
    routeBasePath: '/flutter',
    versions: {
      current: {
        label: '0.7.x',
      },
    },
  },
  {
    id: 'ios',
    path: 'docs/ios',
    routeBasePath: '/ios',
    versions: {
      current: {
        label: '1.33.x',
      },
    },
  },
  {
    id: 'react-native',
    path: 'docs/rn-ui-kit',
    routeBasePath: '/react-native',
    versions: {
      current: {
        label: '1.4.x',
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: 'https://github.com/bloock/docs/tree/main/',
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

const plugins = [tailwindPlugin, ...docs_plugins, webpackPlugin];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],
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
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
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
            label: 'REST API',
            to: '/api/',
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
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
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
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
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
