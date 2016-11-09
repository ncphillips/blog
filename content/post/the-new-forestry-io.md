+++
Categories = []
banner = "forestryio/images/new-forestry-io-cms.png"
date = "2016-11-01T19:36:26-04:00"
description = "V2 of Forestry.io is live! We redesigned the UI, built a new editor and now you can deploy Forestry to your domain with your own branding."
draft = false
excerpt = ""
show_author = true
show_comments = true
show_signup = true
tags = []
title = "The New Forestry.io"
twitter_card = "/forestryio/images/og.jpg"
[[author]]
bio = "CEO and Co-founder of <a href='https://forestry.io' title='Forestry.io CMS'>Forestry.io</a>. Web developer, recovering freelancer."
img = "/images/Scott_Gallant.jpg"
name = "Scott Gallant"
twitter = "https://twitter.com/scottgallant"
[[suggested]]
link = ""
title = ""
[[suggested]]
link = ""
title = ""
[[suggested]]
link = ""
title = ""

+++
We're happy to announce some huge improvements to [Forestry.io](http://Forestry.io), our CMS for Jekyll and Hugo sites.

Before I outline what's new, I want to thank everyone who has been testing this while it was in beta (you know who you are). Your help was crucial and we're going to continue to build an awesome CMS that you love. 👊

## What's new:

### New Editor

We totally rebuilt our WYSIWYG editor (inspired by Medium.com).

*   Flip between Markdown (or HTML) and WYSIWYG.
*   Drag and drop images
*   Highlight text to change formatting
*   Clean and simple interface

Here's a screenshot of the post I'm writing (how meta).

![](/blog/forestryio/images/forestry-io-editor.png)

Thanks to [@envygeeks](https://envygeeks.io/) for all of his hard work on this.

### ReDesigned UI

Our UI has been completely redesigned and is now mobile friendly.  We're not going to stop until this is the slickest CMS on the planet. Thanks to [Nichlas](https://twitter.com/nichlaswa) for his amazing design chops here. I designed V1 of Forestry and I'm happy to say that Nichlas has warped us to level 3.

![](/blog/forestryio/images/new-forestry-io-cms-3.png)

### Forestry Remote

Forestry Remote is a single html file that you drop into your static site and it allows you to access your CMS from mysite.com/admin/. We think this is pretty cool. It's like WordPress, but instead of 100's of PHP files, it's just a single HTML file that doesn't require any updates. With Remote, you can also customize the branding and replace the Forestry logo with your own. Thanks to Nolan who flawlessly guided this project.

### Automic Building and Deploying

You can tell Forestry to watch Jekyll or Hugo repo and build your site when you commit to that repo. Forestry can also deploy your built site to your host (S3, FTP, Git branch, etc). Like continuous integration for static sites.

### Billing Updates

We changed our pricing to build a better, more sustainable service. Forestry will be free to use for personal projects (1 user), but we'll be charging medium and larger teams. Also, soon you'll be able to set up client billing if you want your client to handle the payment. Peter, has been crushing this with his coding skills.

### What's next?

*   Hosting - we're building a hosting platform on top of a blazing-fast, global CDN. If you're a paying Forestry customer, you can host with us for no additional cost.
*   Better control over the UI
    *   Support for new front matter fields like photo galleries
    *   Customize the CMS interface
    *   Support for Jekyll nav menus (Hugo already supports this)
*   Media gallery and image editing
*   Support for more static site generators

We're super excited to get this into your hands. We're absolutely convinced this is the future of the web and we're dead-set on making the best tools for it. As always, let us know what you'd like to see improved.
