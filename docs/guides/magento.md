---
id: magento
title: Magento 2 - Generic
---

Flowbox is partnered with leading ecommerce platform Magento, to offer a first-class visual marketing experience for ecom sites.

:::tip

There is a Flowbox plugin available for Magento 2.0, which we strongly recommend to get the full Flowbox experience. Click [here](/docs/guides/magento_plugin) for that guide.

:::

### Embedding Flowbox Flows

The first step to embedding Flows in Magento 2 is including the `flowbox.js` script in the HTML `<head>` section in order to call the function across your site.

In order to do this, follow these steps:
1. Log into your Magento account. **Note: make sure you have full permission levels to access the admin settings**
2. Navigate to Admin Panel, click on `Content`, then `Configuration` ![](/img/docs/magento2/image1.png)
3. Choose the store view that you want the head tag to be changed on or select Global to change it on every store view ![](/img/docs/magento2/image12.png)
4. Scroll down to the ‘HTML Head’ section ![](/img/docs/magento2/image3.png)
5. In the Scripts and Style Sheets field, add the [embed snippet](/docs/install_widget) ![](/img/docs/magento2/image9.png)
5. Once you’ve added your script, click on the `Save Configuration` button
6. It is always recommended to [flush the cache](#flush-the-cache) in Magento after each update

### Flush the cache
To flush the cache,  go back to the Admin Panel, click on `System` then `Cache Management`.

![](/img/docs/magento2/image2.png)

Click on the orange `Flush Magento Cache` button. When completed, you will see a success message pop up on the screen.

![](/img/docs/magento2/image8.png)

### Embed a Static Flow in a Page

It’s very easy to embed a Static Flow on a Page in Magento 2. This would be a great way to create a Community and/or Inspiration page to show off your followers and link to products.

1. Go to the Admin Panel and click on `Content`, then `Pages` ![](/img/docs/magento2/image7.png)
2. Click on `Add New Page` ![](/img/docs/magento2/image10.png)
3. **Important step!** Make sure you enable the page (green toggle), before clicking on `Content` to edit the page ![](/img/docs/magento2/image6.png)
4. Once in Content view, click on `Show/Hide Editor` to be able to embed the script ![](/img/docs/magento2/image11.png)
5. Now you can paste the [embed init snippet](/docs/install_widget) into the main text box ![](/img/docs/magento2/image13.png)
6. Once you’ve completed step 5, click on the orange `Save` button. **Note:** Magento recommends [flushing the cache](#flush-the-cache) after each update.

### Embed a Dynamic Flow in a Page

It’s very easy to embed a Dynamic Flow on a Page in Magento 2. This is a great way to pull in and show off lots of content with different tags in one space.

1. Go to the Admin Panel and click on `Content`, then `Pages` ![](/img/docs/magento2/image7.png)
2. Click on `Add New Page` ![](/img/docs/magento2/image10.png)
3. **Important step!** Make sure you enable the page (green toggle), before clicking on `Content` to edit the page ![](/img/docs/magento2/image6.png)
4. Once in Content view, click on `Show/Hide Editor` to be able to embed the script ![](/img/docs/magento2/image11.png)
5. Now you can paste your script into the main text box:
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

* The `buttons` refer to the tag buttons at the top of the Flow. A tag button is created in this way: `<button style="margin: 5px;" data-tag="TAG" class="active">NAME OF BUTTON</button>`.

  **Note: the tag name in the script must match the tag in Flowbox**. If you wish to create an `All` button, then leave the TAG field empty, like this:  `<button style="margin: 5px;" data-tag="" class="active">ALL</button>`
* The `container` property refers to an element on your page, in this case the div  element with id `js-flowbox-flow`.
* The `key` property is the [Flow key](/docs/terminology#flow-key).

Once you’ve pasted the code, updated your buttons with your text and tags, and inserted your Flow key, click on the orange `Save` button. **Note:** Magento recommends [flushing the cache](#flush-the-cache) after each update.

Here you can see the Dynamic Tag Flow that we just created in action:
![](/img/docs/magento2/image2.gif)

:::note

All updates and edits to your Flowbox Flow (content, styling, tags) need to be made in your Flowbox Admin account.

:::
