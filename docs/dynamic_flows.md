---
id: dynamic_flows
title: Dynamic Flows
---

Flowbox supports dynamic flows based on Product or Tags. Read on to learn how to start using them today.

## Dynamic Tag Flow

Tag Flows are a great way to dynamically extend your regular Flows.  The two most common types of Dynamic Tag Flows are **Filter Tag Flows** (with buttons at the top) or **Category Tag Flows** (where all content sharing one or many tags is displayed).

**Some examples of Filter Tag Flows:**
* [Nelly.com](https://nelly.com/se/instagram/) – filter by product type
* [Zeb.be](https://www.zeb.be/nl/zebsquad) – filter by Influencer
* [Jotex](https://www.jotex.se/inspiration/jotexstyle) – filter by room

**Some examples of Category Tag Flows:**
* [Villages Clubs du Soleil: Summer Flow](https://www.villagesclubsdusoleil.com/fr/nos-destinations/ete/sejour-a-la-montagne/montgenevre) or [Winter Flow](https://www.villagesclubsdusoleil.com/fr/nos-destinations/hiver/sejour-a-la-montagne/montgenevre) showing off a destination
* [SQ Lab: Mountain biking category](https://www.sq-lab.com/en/area-of-use/mtb/) vs. [road bike category](https://www.sq-lab.com/en/area-of-use/road/)
* [ArtDeco eye makeup](https://www.artdeco.com/en/products/eyes) vs. [nails](https://www.artdeco.com/en/products/nails)

:::note

In order to create a Dynamic Flow based on tags, you need to first have collected posts with [tags added in Moderate](https://help.getflowbox.com/en/articles/4786576-how-to-tag-posts).

:::

### Filter Tag Flow embed script with buttons

Start out by including the `flowbox.js` script on your page. Copy this snippet and paste it in the `<head>` element:

```html
<head>
<title>My webpage</title>
<script>
  (function(d, id) {
    if (!window.flowbox) { var f = function () { f.q.push(arguments); }; f.q = []; window.flowbox = f; }
    if (d.getElementById(id)) {return;}
    var s = d.createElement('script'), fjs = d.scripts[d.scripts.length - 1]; s.id = id; s.async = true;
    s.src = ' https://connect.getflowbox.com/flowbox.js';
    fjs.parentNode.insertBefore(s, fjs);
  })(document, 'flowbox-js-embed');
</script>
</head>
```

Then, you can go ahead and use the `window.flowbox`` function to display your Flows. To render a Filter Tag Flow on your webpage, copy and paste the snippet below wherever you want the Flow to show up.

:::note

As you can see, this code snippet example includes the buttons as well. If you want to copy and paste this code, you can easily edit `data-tag` and `title` in the `<button>` tag.

:::

```html
<div>
 <div class="tags" style="display: flex;
 justify-content: center;
 margin-bottom: 50px;
 cursor: pointer;">
 <button style="margin: 5px;" data-tag="">All</button>
 <button style="margin: 5px;" data-tag="football-shoes" class="active">Football Shoes</button>
 <button style="margin: 5px;" data-tag="workout-clothes">Workout Clothes</button>
 <button style="margin: 5px;" data-tag="football">Football</button>
</div>
<div id="js-flowbox-flow"></div>
</div>
<script>
 window.flowbox('init', {
   container: '#js-flowbox-flow',
   key: 'YOUR FLOW KEY',
 })
</script>
<script>
function updateFlow (tag) {
 window.flowbox('update', {
   key: 'YOUR FLOW KEY',
   tags: [tag],
 })
}

const buttons = document.querySelectorAll('button[data-tag]');

function clearButtonClasses () {
 for (const button of buttons) {
   button.classList.remove('active')
 }
}

for (const button of buttons) {
 button.addEventListener('click', () => {
   updateFlow(button.dataset.tag)
   clearButtonClasses()
   button.classList.add('active')
 })
</script>
```

* The **buttons** refer to the tag buttons at the top of the Flow. A tag button is created in this way: `<button style="margin: 5px;" data-tag="TAG" class="active">NAME OF BUTTON</button>`. **Note: the tag name in the script must match the tag in Flowbox**.
If you wish to create an ‘All’ button, then leave the TAG field empty, like this: `<button style="margin: 5px;" data-tag="" class="active">ALL</button>`.
* The `container` property refers to an element on your page, in this case the div element with id js-flowbox-flow .
* The `key` property is the [Flow key](/docs/terminology#flow-key).

Here you can see the Dynamic Tag Flow that we just created in action:
![](/img/docs/dynamic_flow.png)


### Interactive example – switching between Tags

Check out this [article to view another interactive example](http://help.getflowbox.com/en/articles/4884731-switching-between-tags-in-a-tag-flow) of switching tags in a Tag Flow!

### Preview your Dynamic Tag Flow

When you create a new Dynamic Tag Flow, you can preview directly in the Flow settings to see exactly how it would look on site, and see what content will be served.

In order to preview the Dynamic Tag Flow, you need to:

1. First, create/set up your Dynamic Tag Flow.
2. Then click to open the Flow's Settings menu in the top right-hand corner.
3. Enter the tag(s) in the `Preview tags` field.
4. Choose between `Any` or `All`.
    1. `Any` will serve all posts tagged with any of your selected tags. I.e., if you select the tags 'football-shoes', 'football' and 'Zlatan', you will see all posts that have any of these tags, or a combination of them.
    2. `All` will only serve posts tagged with 'all' of your selected tags. I.e., if you select the tags 'football-shoes', 'football' and 'Zlatan', you will see only see posts that have all three of these tags.
5. That's it! Flowbox will automatically load a preview of the Flow showing your tagged content.

![](/img/docs/preview_dynamic_flow.png)

:::note

Tagged posts in Flowbox are always displayed in order of 'most recently tagged' unless you have enabled our [AI algorithm Flowscore](https://help.getflowbox.com/en/articles/4474422-about-flowscore) to automatically sort content based on engagement.

As an example - you have 2 posts that you wish to apply the same tag for.

* Post A was originally posted online in the last hour. You tag this post first.
* Post B was shared online yesterday. You tag this post second.

These posts will now be sorted based on which you tagged most recently, even if Post A was originally shared first, Post B will always show up first in your Dynamic Tag Flow.

:::

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
