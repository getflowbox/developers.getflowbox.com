---
id: quickstart
title: Quick Start
---

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

## Content Security Policy (CSP) Error

![CSP Error](/img/docs/csp_error.png)

Content Security Policy (CSP) is a W3C standard providing a layer of protection against Cross-Site Scripting (XSS). CSP policy allows blocking/allowing content from specified domains and avoiding the content coming from unapproved origin.

:::caution

If you see an error message that states that the Flowbox script could not load due to Content Security Policy, you will need to add Flowbox to your CDN whitelist.

:::

#### List of supported Domains
```
connect.getflowbox.com
*.getflowbox.com
cdn.flbx.io
*.flbx.io
```
