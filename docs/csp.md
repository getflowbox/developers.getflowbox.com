---
id: csp
title: Content Security Policy (CSP) Error
---

Content Security Policy (CSP) is a W3C standard providing a layer of protection against Cross-Site Scripting (XSS). CSP policy allows blocking/allowing content from specified domains and avoiding the content coming from unapproved origin.

![CSP Error](/img/docs/csp_error.png)

:::caution

If you see an error message that states that the Flowbox script could not load due to Content Security Policy, you will need to add Flowbox to your CDN whitelist.

:::

#### List of supported Domains
```
connect.getflowbox.com
gateway.getflowbox.com
cdn.flbx.io

*.getflowbox.com
*.flbx.io
```
