---
id: shopify
title: Shopify
---

:::important

Before you begin, make sure that you fulfill these requirements:

1. You have the Commerce product enabled and a Product List uploaded to Flowbox.
2. You have collected posts with products connected in Moderate.
3. You have your individual Checkout Script API key. Ask your Client Success Manager about this.

:::

## Plugin installation
1. Log into your Shopify account. Go to the Apps section, [search for Flowbox](https://apps.shopify.com/flowbox-1?surface_detail=flowbox&surface_inter_position=1&surface_intra_position=3&surface_type=search) and install the app from Shopify by clicking on 'Install app'.
2. That’s it! Now once installed, you’ll be able to set up your Flows and Checkout script and implement them in your store.
![](/img/docs/shopify/1.png)

## Implementing Flowbox
After installation and setup are completed, you can implement Flowbox on your Shopify Store pages.

First, you need to click on the installed app and you’ll see the Flowbox application landing page.
![](/img/docs/shopify/2.png)

When you click on `Configure Flow` in your Flowbox app, you can create five different types of Flows:
1. **Static Flow** – typically used on the [home page and/or a community page](https://help.getflowbox.com/en/articles/2801504-get-inspired-by-other-customers).
2. **Dynamic Tag Flow** – perfect for an Instashop or category pages.
3. **Dynamic Tag Flow with filtering options** – the filtering options will enable visitors to switch what content they see, and works very well for Inspiration pages where you want to showcase a lot of content.
4. **Dynamic Product Flow** – create shoppable galleries on your product pages.
5. **Dynamic Product Flow in gallery** – serve content dynamically based on a product. But instead of being its own element on the product page, the content will be automatically incorporated in the product gallery/slider.

## Configuring a Static Flow
To create a Static Flow, you need to click on `Static Flow` and follow these next steps:

1. Click on `Next`.
![](/img/docs/shopify/3.png)

2. A new box `Configure Static Flow` will appear.
![](/img/docs/shopify/4.png)

3. Enter your Static Flow name (you can choose any name but note it cannot have any spaces) and then click on `Next`.
![](/img/docs/shopify/5.png)

4. Insert the Flowbox [Flow key](/docs/terminology#flow-key), and then click on `Next`.
![](/img/docs/shopify/6.png)

5. The next step is to enter your Locale. You can start typing the language you want and the dropdown menu will offer you possible locales and regions. [Click here for a full list of supported regions](/docs/localization) in Flowbox.
![](/img/docs/shopify/7.png)

6. Once you’ve chosen the necessary Locale you can click the `Create Flow` button. You can add multiple locales at this point and the plugin will create a new Flow for each one.
![](/img/docs/shopify/8.png)

7. Your Static Flow will appear under the Shopify Active Flows in the Static Flows section.
![](/img/docs/shopify/9.png)

8. Now it’s time to customize your Static Flow and add it to your Shopify pages.

### Managing a Static Flow in Shopify
1. First, you need to open your Shopify store in order to manage your Flows. Once you’ve logged in, go to `Online Store` and click on `Themes`.
![](/img/docs/shopify/10.png)
2. Click on `Customize` to edit your site.
![](/img/docs/shopify/11.png)

3. Now you are on the `Home Page`.
![](/img/docs/shopify/12.png)

4. To add the Flow to your Shopify store, click on `Add section`, and from the dropdown menu, select your Flow.
![](/img/docs/shopify/13.png)
![](/img/docs/shopify/14.png)

5. You’ll now see your Flowbox content displayed in the store.
![](/img/docs/shopify/15.png)

## Configuring Dynamic Tag Flow
The steps to set up a Dynamic Tag Flow are the same as described above for a Static Flow:

* Open the Flowbox application landing page and select `Dynamic Tag Flow`.
* Enter the Dynamic Tag Flow name (any name, minus spaces).
* Insert the [Flow key](/docs/terminology#flow-key).
* Enter [locale](/docs/localization) information.
* And click on the `Create Flow` button.

Your new Dynamic Tag Flow will appear under the Shopify Active Flows in the Dynamic Tag Flows section.
![](/img/docs/shopify/16.png)

Now you can go into your Shopify store to customize and add your Dynamic Tag Flow.

### Managing your Dynamic Tag Flow in Shopify
1. Open your Shopify app to manage any Flow by selecting `Online Store` and clicking on `Themes`.
![](/img/docs/shopify/17.png)

2. Click on `Customize` to edit your page.
![](/img/docs/shopify/18.png)

3. Now you are on the `Home Page`.
![](/img/docs/shopify/19.png)

4. To add the Flow to your Shopify App click on `Add section` and choose your Flow from the dropdown menu.
![](/img/docs/shopify/20.png)
![](/img/docs/shopify/21.png)

5. Your new Dynamic Tag Flow will now appear in the left-hand sidebar.
6. Now you can customize your Dynamic Tag Flow:
  * You can determine whether you prefer the tagOperator to be set to 'all' or 'any'.
  * You can determine visibility options, in case you only want to display the Flow on a single product and/or collection.

If you want the Tag Operator to be set to `All`, then you have to include the tags you want to be fetched in the free text field.

As an example, if you set the tag: 'food' and press save, Shopify will fetch **ALL** Flowbox posts which include the tag **'food'**.
![](/img/docs/shopify/22.png)

You can add one another tag, ‘nature’, and save this change. Now it will fetch ALL posts which include the tags **‘food’** and **‘nature’**.
![](/img/docs/shopify/23.png)

If you change tagOperator to `ANY` this will mean that Shopify will fetch **ANY** post that has the tag **‘food’** or **‘nature’** or a combination of these tags.
![](/img/docs/shopify/24.png)

### Dynamic Tag Flow with filtering options
The steps to set up a Dynamic Tag Flow with filtering options are the same as described above for a Dynamic Tag Flow:

* Open the Flowbox application landing page and select `Dynamic Tag Flow with filtering options`.
* Enter the Dynamic Tag Flow name (any name, minus spaces).
* Insert the [Flow key](/docs/terminology#flow-key)
* Enter [locale](/docs/localization) information.
* And click on the `Create Flow` button.

Your new Dynamic Tag Flow with filtering options will appear under the Shopify Active Flows in the Dynamic Tag Flows with filtering options section.

![](/img/docs/shopify/25.png)

Now you can go into your Shopify store to customize and add your Dynamic Tag Flow.

### Managing your Dynamic Tag Flow with filtering options in Shopify
1. Open your Shopify app to manage any Flow by selecting `Online Store` and clicking on `Themes`.
![](/img/docs/shopify/26.png)

2. Click on `Customize` to edit your page.
![](/img/docs/shopify/27.png)

3. Now you are on the `Home Page`.
![](/img/docs/shopify/28.png)

4. To add the Flow to your Shopify App click on `Add section` and choose your Flow from the dropdown menu.
![](/img/docs/shopify/29.png)
![](/img/docs/shopify/30.png)

5. Your new Dynamic Tag Flow with filtering options will now appear in the left-hand sidebar.

6. To add the filter buttons to your Dynamic Tag Flow, you will first need to add a new section from the main menu on the left-hand side.
![](/img/docs/shopify/31.png)

7. Click to add `tag` and `filter`.
![](/img/docs/shopify/32.png)

8. If you want to display filter buttons for the tags ‘food’ and ‘nature’, click on ‘Tag’ in the menu and you’ll now be able to add the ‘Tag Name’ and 'Button Label’ on the right-hand side.
![](/img/docs/shopify/33.png)

* `Tag name` – the tag label in this field must match the tag in Flowbox, in order to display the correct posts.
* `Tag Button label` –   insert your preferred button name which will be displayed in your Flow.
![](/img/docs/shopify/34.png)
![](/img/docs/shopify/35.png)

:::note
`Tag name` & `Tag button label` can have the same value or you can pass a different `Tag button label` name from your `Tag name`.
:::

For example, you can use the Tag Button Label `Nature` (to display posts tagged with `Nature`) and use the Tag name `Cool Nature` in the frontend.
![](/img/docs/shopify/36.png)

Every time you want to add a new tag you have to do it through the menu in the left-hand sidebar.
![](/img/docs/shopify/37.png)

You can also easily edit the look of your filter buttons. You can edit the background and text color, as well as create a highlight color for the `Active state`.
![](/img/docs/shopify/38.png)

To delete a `Tag` or `Filter`, simply click on `Remove block`, and it will be removed.
![](/img/docs/shopify/39.png)

## Configure a Dynamic Product Flow
To set up the Dynamic Product Flow you need to go back to the Flowbox plugin.

In order to configure a Dynamic Product Flow, you will need to carry out the same steps as for a Static Flow and Dynamic Tag Flow, with the exception of one extra step `Select Identifier`:

* Open the Flowbox application landing page and select `Dynamic Product Flow`.
* Enter the Dynamic Product Flow name (any name, minus spaces).
* Insert the [Flow key](/docs/terminology#flow-key)
* Enter [locale](/docs/localization) information.
* Select your Identifier from the dropdown menu.
![](/img/docs/shopify/40.png)

:::note
Make sure to choose the same identifier used on the import of product catalogs to Flowbox.
:::

After you have selected the Identifier, you can click on the `Configure Flow` button.

Your Dynamic Product Flow will appear under the Shopify Active Flows in the Dynamic Product Flows section.
![](/img/docs/shopify/41.png)

Now you can log in to your Shopify app to customize your Dynamic Product Flow.

### Managing a Dynamic Product Flow in Shopify App
You can now add this Flow as a section on your product page. The Flowbox plugin will automatically get the product id from the product page you are on, in order to show your custom Product Flow.
![](/img/docs/shopify/42.png)

You can also manually select a product or collection for your Product Flow, in case you only want to display the Flow on a single product and/or collection.
![](/img/docs/shopify/43.png)

:::note
By selecting a product on the right-hand side, the Flow will be visible for this product only.
:::

### Configuring Dynamic Product Flow in product gallery
To set up the Dynamic Product Flow in gallery you need to go back to the Flowbox App.

In order to configure a Dynamic Product Flow in gallery, you will need to carry out the same steps as for a Dynamic Product Flow':

* Open the Flowbox plugin landing page and select `Dynamic Product Flow`.
* Enter the Dynamic Product Flow name (any name, minus spaces).
![](/img/docs/shopify/44.png)
* Insert the [Flow key](/docs/terminology#flow-key)
* Enter [locale](/docs/localization) information.
* Select your Identifier from the dropdown menu.
![](/img/docs/shopify/40.png)

:::note
Make sure to choose the same identifier used on the import of product catalogs to Flowbox.
:::

After you have selected the Identifier, you can click on the `Configure Flow` button.

Your Dynamic Product Flow in gallery will appear under the Shopify Active Flows in the Dynamic Product Flows in gallery section.
![](/img/docs/shopify/45.png)

Now you can log in to your Shopify app to customize your Dynamic Product Flow in gallery.

### Managing a Dynamic Product Flow in gallery in Shopify App
You can now add this Flow as a section on your product page.
![](/img/docs/shopify/46.png)

The Flowbox plugin will automatically take the product ID and insert your tagged content from Flowbox and place it into the gallery view (slider) of the product itself.
![](/img/docs/shopify/47.png)

![](/img/docs/shopify/48.png)

In the menu on the left-hand side you can customize the look and feel of your Flowbox content. You can choose the number of posts you want to display in the gallery and decide if you want to add social credits and likes.

In comparison to the image above, you can see now the Instagram handle and likes at the top. You can change the background color and move this bar to the bottom if you wish. If you want to hide the social credit and likes, then you can set the font color as transparent.
![](/img/docs/shopify/49.png)

If you want to remove the Flowbox posts from your gallery then you can remove the section from Shopify. This will not remove your product feed images (non-Flowbox content).

## Embedding and implementing the Checkout script

1. First, in the Flowbox plugin start page, click on the `Configure Checkout Script` button.
![](/img/docs/shopify/50.png)

2. Enter your API key and your Identifier.
![](/img/docs/shopify/51.png)
:::note
The Identifier must be the same as specified in your uploaded product catalog in Flowbox. For Item Group ID see our note below.
:::

3. Click on `Configure`.
4. You will now see a Checkout script in the box. Click to copy this script.
![](/img/docs/shopify/52.png)

5. Now log into your Shopify admin panel and click on `Setting > Checkout > Additional scripts`. Paste your Checkout script.
![](/img/docs/shopify/53.png)

6. And that’s it! Now your Checkout script is fully configured.


:::warning
If you are planning on using Item Group ID as the main identifier when importing your product catalog to Flowbox, furthermore as a parameter in our different scripts, you should be aware of potential limitations with the Flowbox app for Shopify – given that Shopify doesn’t natively support Item Group ID as of today. Please contact support or your dedicated Client Success Manager to discuss a workable solution.
:::
