import React from 'react'

export const pluginsLogos = [{
  img: 'shopify.png',
  alt: 'Shopify',
  url: 'https://apps.shopify.com/flowbox/'
}, {
  img: 'magento.png',
  alt: 'Adobe Commerce (Magento)',
  url: 'https://marketplace.magento.com/itonomy-module-flowbox.html'
}, {
  img: 'adobe.png',
  alt: 'Adobe Commerce (Magento)',
  url: 'https://marketplace.magento.com/itonomy-module-flowbox.html'
}, {
  img: 'shopware.png',
  alt: 'Shopware',
  url: 'https://store.shopware.com/en/dutch28174456071f/flowbox-for-shopware-6.html'
}, {
  img: 'bigcommerce.png',
  alt: 'BigCommerce',
  url: 'https://www.bigcommerce.com/'
}, {
  img: 'jetshop.png',
  alt: 'Jetshop',
  url: 'https://www.jetshop.se/partners/'
}, {
  img: 'woocommerce.png',
  alt: 'WooCommerce',
  url: 'https://woocommerce.com/'
}, {
  img: 'askas.png',
  alt: 'Askås',
  url: 'https://www.askas.se/sv/e-handelslosningar.html'
}, {
  img: 'spryker.png',
  alt: 'Spryker',
  url: 'https://spryker.com/en/technology-partner-category/social-media/'
}, {
  img: 'vue.png',
  alt: 'Vue Storefront',
  url: 'https://www.vuestorefront.io/'
}, {
  img: 'viskan.png',
  alt: 'VISKAN',
  url: 'https://www.viskan.com/'
}, {
  img: 'visma.png',
  alt: 'VISMA',
  url: 'http://visma.com/'
}, {
  img: 'vendre.png',
  alt: 'Vendre',
  url: 'http://support.vendre.io/i/appar-integration/socialt-marknadsforing/flowbox.html'
}]

export const EmbedIntegration1 = `
<head>
<title>My webpage</title>
<script>
  (function(d, id) {
    if (!window.flowbox) { var f = function () { f.q.push(arguments); }; f.q = []; window.flowbox = f; }
    if (d.getElementById(id)) {return;}
    var s = d.createElement('script'), fjs = d.scripts[d.scripts.length - 1]; s.id = id; s.async = true;
    s.src = 'https://connect.getflowbox.com/flowbox.js';
    fjs.parentNode.insertBefore(s, fjs);
  })(document, 'flowbox-js-embed');
</script>
</head>
`

export const EmbedIntegration2 = `
<div id="js-flowbox-flow"></div>
<script>
  window.flowbox('init', {
    container: '#js-flowbox-flow',
    key: 'Your-Flow-Key'
  })
</script>
`
