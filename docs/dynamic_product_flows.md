---
id: dynamic_product_flows
title: 4. Dynamic Product Flows
---

Flowbox supports dynamic flows based on Product. Read on to learn how to start using them today.

## Dynamic Product Flow

Product Flows are a great way to dynamically extend your regular Flows by pulling in posts connected to a product.

Let's start with the prerequisities. For Dynamic Flows for product posts to work you need to have posts with products connected through Flowbox's Commerce function.

You then add the embed script to your HTML source the same as for static Flows, with one small change; you also pass in a productId  when calling the init method:

```html
<script>
  window.flowbox('init', {
    container: '#js-flowbox-flow',
    key: 'Your-Flow-Key',
    productId: 'product-1234' // Display posts that have `product-1234` connected
  })
</script>
```

**Properties:***

* The `key` property is the [Flow key](/docs/terminology#flow-key).
* The `productId` property is the ID of the product you want the Flow to filter on.

### Setting up the Flow dynamically

Because the Dynamic Flow function is made with the express purpose of displaying related posts in mind, you will also benefit the most from them by setting them up dynamically. One way of doing this is adding this to a template in your CMS or Ecommerce system. This will vary greatly depending on which platform you're using, but most have separate templates for product pages.

Here's an example on how the window.flowbox('init')  could look in a platform that uses handlebars-style templating:

```html
<script>
window.flowbox('init', {
  container: '#js-flowbox-flow',
  key: 'Your-Flow-Key',
  productId: {{ $product->id }} // Product-ID must be a string in the final output. See example in snippet above.
})
</script>
```

:::tip
Hopefully, this can give you a hint on how to implement Dynamic Flows in your specific platform.
:::

### Introducing sequences to Dynamic Product Flows

Flowbox now gives users full control over fallback content in Flows on product pages. You can customize sequences of content which will be served, in their respective order, after the product specific content – based on almost all the fields available in your product catalog. Read more [here](https://help.getflowbox.com/en/articles/5015677-enhance-your-dynamic-product-flows).

### Preview your Dynamic Product Flow

When you create a new Dynamic Product Flow, you can preview directly in the Flow settings to see exactly how it would look on that product page, and see what content will be served, including category fallback and fallback.

In order to preview the Dynamic Product Flow, you need to:

1. First, create/set up your Dynamic Product Flow.
2. Then click to open the Flow's Settings menu in the top right-hand corner.
3. Enter the product identifier/search for your product in the `Preview Product` field.
4. Flowbox will automatically load a preview of the Flow showing your tagged content and any fallback content.

![](/img/docs/dynamic_product_flow_preview.gif)

:::note

Posts tagged with products in Flowbox are always displayed in order of 'most recent' unless you have enabled our [AI algorithm Flowscore](https://help.getflowbox.com/en/articles/4474422-about-flowscore) to automatically sort content based on engagement.

As an example - you have 2 posts that you wish to tag with the same product.

* Post A was originally posted online in the last hour. You tag this post first.
* Post B was shared online yesterday. You tag this post second.

These posts will now be sorted based on which was posted most recently. Even though you tagged the product(s) in Post B last, since Post A was collected by Flowbox more recently, Post A will always show up first in your Dynamic Product Flow.

:::
