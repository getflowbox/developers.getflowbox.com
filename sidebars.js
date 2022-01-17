// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'overview',
    'quickstart',
    'terminology',
    'supported_platforms',
    {
      type: 'category',
      label: 'Widget Integration Reference',
      collapsed: false,
      items: [
        'dynamic_flows',
        'localization',
        'analytics',
        'browsersupport',
        'performance',
        'csp',
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
        'guides/shopware',
        'guides/shopify',
      ],
    },
  ],
};

module.exports = sidebars;
