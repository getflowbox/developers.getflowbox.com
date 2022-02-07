// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flowbox for Developers',
  tagline: 'All the tools you need to start integrating Flowbox',
  url: 'https://developers.getflowbox.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'getflowbox',
  projectName: 'developers.getflowbox.com',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-Z9DNTR61EM',
          anonymizeIP: true,
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [{
          routePath: '/api/',
          spec: 'openapi.yaml',
        }],
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        //title: 'Developer portal',
        logo: {
          alt: 'Flowbox',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'install_widget',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'guides/overview',
            position: 'left',
            label: 'Guides',
          },
          {
            to: 'api',
            position: 'left',
            label: 'API Reference',
          },
        ],
      },
      colorMode: {
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/install_widget',
              },
              {
                label: 'Guides',
                to: '/docs/guides/overview',
              },
              {
                label: 'Status',
                to: 'https://status.getflowbox.com',
              },
              {
                label: 'Academy',
                to: 'https://academy.getflowbox.com',
              },
              {
                label: 'Help',
                to: 'https://help.getflowbox.com',
              },
            ],
          },
          {
            title: 'Flowbox',
            items: [
              {
                label: 'About us',
                to: 'https://getflowbox.com/about-flowbox',
              },
              {
                label: 'Careers',
                to: 'http://careers.getflowbox.com/',
              },
              {
                label: 'Cookies',
                to: 'https://getflowbox.com/cookies/',
              },
              {
                label: 'Privacy Policy',
                to: 'https://getflowbox.com/privacy/',
              },
              {
                label: 'Terms of Service',
                to: 'https://getflowbox.com/terms/',
              },
              {
                label: 'Blog',
                to: 'https://news.cision.com/flowbox',
              },
              {
                label: 'Newsletter',
                to: 'https://getflowbox.com/newsletter/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/getflowbox/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/getflowbox',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/getflowbox',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/getflowbox',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flowbox.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
