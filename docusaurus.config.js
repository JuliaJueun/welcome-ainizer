module.exports = {
  title: 'Ainizers',
  tagline: 'Ainizer Showcase',
  url: 'https://master-welcome-ainizer-julia-jueun.endpoint.ainize.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'JuliaJueun', // Usually your GitHub org/user name.
  projectName: 'welcome-ainizer', // Usually your repo name.
  themeConfig: { 
    googleAnalytics: {
      trackingID: 'UA-120727651-12',
    },
    gtag: {
      trackingID: 'UA-120727651-12',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Ainizer logo',
        src: 'img/ainizers_logo.svg',
      },
      items: [
        {
          to: '/showcase',
          activeBasePath: 'showcase',
          label: 'Showcase',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: '/community/support',
          label: 'Community',
          position: 'left',
          activeBaseRegex: `/community/`,
        },
        {
          href: 'https://github.com/JuliaJueun/welcome-ainizer',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} JuliaJueun, Inc. Built with Docusaurus.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // ['@docusaurus/plugin-google-analytics'],
    // ['@docusaurus/plugin-google-gtag'],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        editUrl: 'https://github.com/JuliaJueun/welcome-ainizer',
        routeBasePath: 'community',
        // sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ]
};
