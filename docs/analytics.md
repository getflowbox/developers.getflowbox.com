---
id: analytics
title: Analytics (eCommerce)
---

Flowbox provides advanced analytics and insights for eCommerce sites. To get the full potential of analytics and insight some additional steps need to be performed.

1. You have the Commerce product enabled and a Product List uploaded to Flowbox
2. You have collected posts with products connected in Moderate
3. You have the Checkout Script API Key. **Ask your Client Success Manager about this**

### Installing the Checkout script

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

The `window.flowboxCheckout.checkout` function takes three — **all required** — parameters.

* `apiKey` – Your Checkout Script API Key
* `products` – Anarray of products. The products are represented as Javascript Object with the properties `id`*(String or Number)* and `quantity` *(Number)*. e.g. `{ id: 1, quantity: 5 }`
* `orderId`  – A number indicating the ID of the order.

### Verify the Checkout script

#### Verify product ID

Verify that the product ID matches the product ID used to identify products in Flowbox. We have, most likely, by now imported your Google Shopping feed to your Flowbox account. In the feed, there are most commonly a few different ID-attributes used to identify products when importing the Google Shopping feed.

The Checkout script needs to be configured with the same ID-format as is used to identify the products from the feed. To check what ID is being used follow these steps,

1. Go to the `Visual Marketing` tab in Flowbox.
2. Click on `Catalogs` (under `Commerce`) in the menu to access the catalog list
3. Click on the meatball (three-dot) menu next to the catalog marked as `Primary` and click on `Edit` ![Cataloglist Edit](/img/docs/cataloglist_edit.png)
4. Look under `Identifier` to see what ID-attribute is used to identify the products from the Google Shopping feed ![Catalog Settings](/img/docs/catalog_settings.png)

#### Check for errors when running the script on-site

1. When testing the script in your test environment, keep your browser console open and check for possible errors coming from `bzfy-checkout.js:1`
2. If you get an error message, make sure that you read it. It's usually enough to find out what might be causing it. Here is an example of what it could look like: ![Checkout error](/img/docs/checkouterror.png)

#### Verify request payload data

Verify that you have made the POST request with response code 200.

1. In your browser inspector, go to the Network tab
2. Click on the checkout request. If you cannot find a checkout request – Usually, it's named `analytics/` or `bzfy-checkout.js` , or search for anything related to `getflowbox` or `flowbox`: ![Checkout inspector](/img/docs/checkout_inspector.jpg)
3. Validate request method and status code
4. Go to the bottom of this request's `Headers` where you can see formed payload data from the checkout script (under `Request Payload` - as visible on screenshot above)
5. Verify that the payload contains **all the mandatory properties**
    * `apiKey`
    * `products`
    * `orderId`

### Some Dos and Don'ts

Make sure that the ID used in the checkout script corresponds to the product catalogs in your Flowbox account. Any mismatches will lead to an error.

**How to check that the ID corresponds to the product catalogs?**
Navigate to your Flowbox account -> Go to Catalogs tab (under Commerce tab) -> click the meatball (three-dot) menu next to your feed labeled as ‘primary’ feed -> Click Edit.

In the “Edit Catalog” window, check the applied **Category identifier** and make sure that the check-out script sends the value of the same attribute in products: line of our check-out script.

![Category Identifier](/img/docs/category_identifier.png)

Don't add any `"` or `'` in the products: line. Keep it similar to what is stated earlier in this article. Any syntax error can negatively impact the script.

:::caution

If you see an error message that states that the Flowbox checkout script could not load due to Content Security Policy, you will need to add Flowbox to your CDN whitelist. Read [here](/docs/quickstart#content-security-policy-csp-error) for how to do it.

:::
