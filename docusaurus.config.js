const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mana Lang',
  tagline: 'Dinosaurs are cool',
  url: 'https://mana-lang.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '0xF6',
  projectName: 'mana_lang',
  themeConfig: {
    navbar: {
      title: 'Mana Lang',
      logo: {
        alt: 'Mana Lang Logo',
        src: 'img/icon.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/0xF6/mana_lang',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Overviews/Guides',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API',
              to: '/docs/api',
            },
            {
              label: 'Language Specification',
              to: '/docs/api',
            },
            {
              label: 'Download',
              href: 'https://github.com/0xF6/mana_lang',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/0xF6/mana_lang',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        }
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} Mana Lang. MIT License`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['powershell', 'asm6502', 'wasm', 'csharp'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/0xF6/docs.mana-lang/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/0xF6/docs.mana-lang/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
