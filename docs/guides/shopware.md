---
id: shopware
title: Shopware 5 & 6
---

:::important

Before you begin, make sure that you fulfill these requirements:

1. You have the Commerce product enabled and a Product List uploaded to Flowbox.
2. You have collected posts with products connected in Moderate.
3. You have your individual Checkout Script API key. Ask your Client Success Manager about this.

:::

## Plugin installation
In order to use the Flowbox plugin on [Shopware](https://store.shopware.com/en/dutch28174456071f/flowbox-for-shopware-6.html), you need to first install your plugin through Shopware's plugin manager.

Once installed, click on Configuration in the top menu, then `Plugin Manager` and select `Flowbox`.
![](/img/docs/shopware/1.png)

Scroll down to see the `Configuration` tab.
![](/img/docs/shopware/2.png)

**Settings here include:**

* Set the default language of the Flow for your shops.
* Showing the Flow on your product detail page.
* Setting your product identifier (Sku or Id). **Note: this has to match your product catalog uploaded to Flowbox.**
* Turn on the Flowbox checkout script option.
* Set the Flow position for your product pages, i.e., after cross-selling block.
* Add your Dynamic Product Feed Flow key.
* Add your API for the checkout script and set your identifier.

:::tip

Here's how you can find your [Flow key](/docs/terminology#flow-key)

:::

:::note

If your Shopware site relies on multiple extensions, plugins, and custom CSS, then there is a possibility that these could interfere with the Flowbox plugin. If you need additional help, please get in touch and we will connect you with our expert Shopware partners.

:::

## Implementing Static Flows
After installation and setup are completed, you can implement Flowbox on your website pages.

First, you need to go to `Shopping Experience` in Shopware. When you click on `Add` and select `Commerce`, you can drag the Flowbox element to the page where you want the Flow to be displayed.

Second, after clicking on the `Configuration Wheel`, you can add the [Flow key](/docs/terminology#flow-key) that you want to use.

_Below image shows Shopware 5 view:_
![](/img/docs/shopware/3.png)

## Dynamic Tag Flow
If you have set up [Dynamic Tag Flow(s) in Flowbox](https://help.getflowbox.com/en/articles/2821196-implementing-and-embedding-a-dynamic-tag-flow), you can now also 'enable filters' for your Flow by entering the Tags that you've created in your Flowbox account. These tags need to be entered in the `Tags` box, but you should only **add 1 tag per line!**

:::note

The first Tag will also be the primary Tag to be shown on this page. For example, when the Tag 'All' is entered first, this page will show all posts with this Tag by default. When the visitor clicks on another Tag they will see the content for this newly selected Tag. **Therefore, it is recommended to have an ‘All’ tag as the first tag.**

:::

In the ‘Tab Menu Tag’ you can set up the filter buttons. Here you can copy what you’ve done in the ‘Tag’ box above, to have a one-on-one copy of the Tags, or choose different names for the Tags used above.

_Below image shows Shopware 5 view:_
![](/img/docs/shopware/4.png)

## Dynamic Product Flow
To enable [Dynamic Product Flows](https://help.getflowbox.com/en/articles/2800675-implementing-and-embedding-a-dynamic-product-flow) on your product detail pages, you need to enable two settings in the Flowbox plugin settings in Shopware:

1. `Show Flow on product detail page` – Yes.<br/>This setting will enable the Flow to be displayed on the product detail pages.
2. `Dynamic Flow based on product ID` – Yes.<br/>Enabling this (in addition to the previous) setting makes sure that the Flow only shows user generated content of the product displayed on the product detail page.
![](/img/docs/shopware/5.png)

## Checkout script
To ensure that the checkout script is working properly in Shopware, you need to enable two settings in the Flowbox plugin configuration menu:

1. `Enable checkout integration` – Yes.<br/>This setting will enable the checkout script and tracking data will be shared to Flowbox.
2. `Flow API Key` – Add your individual Checkout Script API key. Ask your Client Success Manager about this.
![](/img/docs/shopware/6.png)

Remember to click `Save` once you’ve updated your configuration settings.

:::tip

We recommend that you make a test order to ensure correct installation

:::

[Conversion analytics](https://help.getflowbox.com/en/articles/5829853-website-analytics-conversion) should show up in Flowbox in 24 hours.
