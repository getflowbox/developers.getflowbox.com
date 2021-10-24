// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'overview',
    'terminology',
    {
      type: 'category',
      label: 'Widget Integration',
      collapsed: false,
      items: [
        'quickstart',
        'localization',
        'analytics',
        'browsersupport',
        'performance',
      ],
    },
  ],
  guides: [
    'guides/overview',
    {
      type: 'category',
      label: 'Ecommerce Integration',
      collapsed: false,
      items: [
        'guides/magento',
        'guides/salesforce',
        'guides/shopify',
      ],
    },
  ],
};

module.exports = sidebars;
