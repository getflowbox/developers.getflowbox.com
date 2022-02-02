// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'supported_platforms',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'install_widget',
        'install_analytics',
        'dynamic_tag_flows',
        'dynamic_product_flows',
      ],
    },
    {
      type: 'category',
      label: 'In-depth Knowledge',
      collapsed: false,
      items: [
        'localization',
        'analytics',
        'browsersupport',
        'performance',
        'csp',
      ],
    },
    'terminology',
  ],
  guides: [
    'guides/overview',
    {
      type: 'category',
      label: 'Ecommerce Integration',
      collapsed: false,
      items: [
        'guides/magento_plugin',
        'guides/magento',
        'guides/shopware',
        'guides/shopify',
      ],
    },
  ],
};

module.exports = sidebars;
