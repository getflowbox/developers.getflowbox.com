---
id: install_analytics
title: 2. Install Analytics
---

## Install Flowbox Analytics (eCommerce)

Flowbox provides advanced analytics and insights for eCommerce sites. To get the full potential of analytics and insight some additional steps need to be performed.

:::note

Before you start, ensure that:
1. You have the Commerce product enabled and a Product List uploaded to Flowbox
2. You have collected posts with products connected in Moderate
3. You have the Checkout Script API Key. **Ask your Client Success Manager about this**

:::

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
