---
id: install_widget
title: 1. Install Widget
---

This guide will help you integrate the Flowbox widget to your website in minutes.

:::tip

If you're on one of the Flowbox [supported platforms](/docs/supported_platforms) we recommend you use the relevant platform-specific guides.

:::

## Install Flowbox Widget
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
