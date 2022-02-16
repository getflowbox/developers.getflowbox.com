---
id: cookies
title: Cookies
---

# What is a cookie?

A cookie is a message in the form of a small text file that a website places on a visitor’s device in order to store information about that visitor. The cookies enable us to detect your device the next time you visit our website so that we can optimize your experience based on your online behavior.

## Why does Flowbox use cookies?

Flowbox uses different categories of cookies to enhance your experience and make your visit on our website as pleasant as possible.

We may use these technologies to collect information about how you use the Service, for example which pages you go to most often and if you get error messages from certain pages.

## Disabling cookies

In some scenarios, such as User declining Consent to Cookies the variable `allowCookies` can be used to control the use of cookies.

```html
<div id="js-flowbox-flow"></div>
<script>
  window.flowbox('init', {
    container: '#js-flowbox-flow',
    key: 'Your-Flow-Key',
    allowCookies: false,
  })
</script>
```

* The `allowCookies` property is a boolean that can be used to control if cookies are to be set or not. `false` means that Cookies should **not** be set whereas `true` is the default and means that cookies **should** be set.

## Conversion Tracking
When a customer interacts with your site where Flowbox is used, a cookie is created.

Once the [Flowbox analytics tracking system script](/docs/analytics) is added to your checkout page, Flowbox collects data to provide advanded analytics.

:::tip

Check out the Data in the Analytics section of the Flowbox platform where you can monitor and evaluate data on customer engagement, conversions rate, and more!

:::

# List of cookies beeing used with Flowbox

| Name       | Domain            | Expiration | Description |
| ---------- | ----------------- | ---------- | ----------- |
| `_flowbox` | .getflowbox.com   | 2 years    |  This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each Flowbox Flow and is used to calculate visitor, session and and purchasing data for analytics reports. |
| `_flbx`<br/>`_flbxReport${postPermalink}` | .getflowbox.com | 1 month | Whenever a user reports a post using our report button, we generate a cookie in order to avoid a user generating several reports on the same post. |

