---
id: performance
title: Performance Guide
---

Flowbox constantly strive to provide the leanest and most optimized experience to reduce loading times and to not impact the load of the rest of the page.

### Code-splitting

In order to optimize load times, we have begun to split up our code into various bundles so that they can be loaded on demand.

This “code-splitting” or “chunking” method can be used to achieve smaller bundles and control resource load prioritization which, can have a significant impact on load time. (More info here: https://webpack.js.org/guides/code-splitting/)

Our bundles are currently split as follows:

#### One for each theme (single, card, carousel, grid)

This way, we only load the bundle for the relevant theme you are using.

#### One for the gate module

We subsequently load the bundle for the gate on opening as opposed to on rendering the flow.

#### One for each language translation

Again, here we only load the relevant bundle for the required language.

#### The final bundles

They make up the rest of the necessary shared code required for the embed script to work.

### Image loading time

We are constantly updating, optimizing in and improving our content handling platform. Some recent updates include:

* Flow(s) and images are served lazy loaded, meaning the container and its images are only loaded when they come into view, to optimize loading time and performance.

* Image files are served in the modern webP format, instead of jpg. This means that they are optimized to serve the best size for your customers' device type, screen size and resolution, and weigh significantly less than as jpg files. As you can see below, the WebP format offers 25 – 35% smaller file sizes with the exact same quality as jpg files.

![WebP JPEG Comparison](/img/docs/webp_comparison.png)

* We have switched from gzip to the more efficient Brotli compression method, which has reduced our embed script by 8-10%.

* We are also undertaking ongoing optimizations such as removing dependencies, removing excess code and caching.

:::tip
All of these recent updates are implemented across the whole platform and all existing Flows. We carry out continuous improvements and all embed optimizations are automatically rolled out without interruptions.
:::

### Ways to help further optimize Flow loading times
The team at Flowbox is continuously looking to optimize the embed loading times. If wish to further reduce the size of the Flow on your site, then these are some actions you can take:

#### Reduce the elements
We recommend avoiding any unnecessary CSS or style elements, as this can affect the weight of the embed.

#### Prioritize images over video
A Flow populated with video files is going to be significantly heavier than one with just image files. Keep that in mind.

#### Disable autoplay
If you have a lot of video content in your Flows (see point above), then this is going to impact the loading time of your Flow. We would recommend turning off autoplay. This will help reduce the loading time; and rest assured, your customers will always be able to see your videos playing in the gate once they click on it.

### Future outlook and a comment on Google’s Core Web Vitals
Core Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

Google’s [latest update](https://developers.google.com/search/blog/2021/04/more-details-page-experience), scheduled to begin rolling out in August 2021, will see ‘page experience’ affecting ranking. Page experience is a set of signals that measure how users perceive the experience of interacting with a web page beyond its pure information value.

Whilst this is a big update, it is important to note that this is designed to be a complimentary assessment factor.

As [Google explains](https://developers.google.com/search/docs/guides/page-experience#signals):

> “...page experience will join the **hundreds of signals** that Google considers when generating Search results.
>
> While page experience is important, Google still seeks to rank pages with the best information overall, even if the page experience is subpar. **Great page experience doesn't override having great page content** [emphasis added].”

Additionally, John Mueller, Webmaster Trends Analyst at Google recently [gave this statement](https://www.searchenginejournal.com/google-site-traffic-core-web-vitals/397294/#close):

> “So just because your website is faster with regards to Core Web Vitals than some competitors doesn’t necessarily mean that come [implementation date] you will jump to position number one in the search results.
>
> We still require that relevance is something that should be kind of available on the site. It should make sense for us to show the site in the search results because, as you can imagine, a really fast website might be one that’s completely empty. But that’s not very useful for users.
>
> It’s useful to keep that in mind when it comes to Core Web Vitals. It is something that users notice. It is something that we will start using for ranking. But it’s not going to change everything completely.
>
> So it’s not going to… destroy your site and remove it from the index if you have it wrong. It’s not going to catapult you from page ten to number one position if you get it right.
>
> **And the other thing is that relevance is still by far much more important** [emphasis added].”
