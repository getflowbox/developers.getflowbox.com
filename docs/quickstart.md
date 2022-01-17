---
id: quickstart
title: Quick Start
---

This guide will help you integrate Flowbox to your website in minutes.

## 1. Install Flowbox Widget
To display a Flow you've created in Flowbox you need to add a small snippet to your site's templates.

Start out by including the `flowbox.js`  script on your page. Copy this snippet and paste it in the `<head>` element

#### Embed snippet
```html
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
```

Then, you can go ahead and use the `window.flowbox` function to display your Flows. To render a Flow on your webpage, copy and paste this snippet wherever you want the Flow to show up

#### Embed init snippet
```html
<div id="js-flowbox-flow"></div>
<script>
  window.flowbox('init', {
    container: '#js-flowbox-flow',
    key: 'Your-Flow-Key',
  })
</script>
```

* The `container` property refers to an element on your page, in this case the div  element with id `js-flowbox-flow`.
* The `key` property is the [Flow key](/docs/terminology#flow-key).

## 2. Install Flowbox Analytics (eCommerce)

Flowbox provides advanced analytics and insights for eCommerce sites. To get the full potential of analytics and insight some additional steps need to be performed.

The Flowbox Checkout script needs to be implemented on your eCommerce site — preferably on a completed purchase confirmation screen presented to the user — to which you pass your API Key, a list of products, and an order ID.

```html
<script>
  !function(e, t) {
    var o = document.createElement("script");
    o.type = "text/javascript", o.readyState ? o.onreadystatechange = function() {
      ("loaded" === o.readyState || "complete" === o.readyState) && (o.onreadystatechange = null, t())
    } : o.onload = function() {
      t()
    }, o.src = e, document.getElementsByTagName("head")[0].appendChild(o)
  }("//connect.getflowbox.com/bzfy-checkout.js", function() {
    window.flowboxCheckout.checkout({
      apiKey: 'Your API Key',
      products: [{ id: 123, quantity: 1 }, { id: 456, quantity: 14 }],
      orderId: 100
    })
  });
</script>
```

:::caution

Make sure to replace the apiKey with the API key from your account.

Can't find your API key? - **Ask your Client Success Manager about this**

:::

The `window.flowboxCheckout.checkout` function takes three — **all required** — parameters.

* `apiKey` – Your Checkout Script API Key
* `products` – Anarray of products. The products are represented as Javascript Object with the properties `id`*(String or Number)* and `quantity` *(Number)*. e.g. `{ id: 1, quantity: 5 }`
* `orderId`  – A number indicating the ID of the order.

:::tip

We recommend that you make a test order to ensure correct installation

:::
