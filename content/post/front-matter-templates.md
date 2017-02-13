+++
Categories = []
banner = "/images/code-bg-image-1-3.jpg"
description = "The foundation for a hackable CMS"
draft = true
excerpt = ""
show_author = true
show_comments = true
show_signup = true
tags = []
title = "Front Matter Templates"
twitter_card = "/blog/forestryio/images/code-bg-image-1-3.jpg"
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
Does the following sound familiar?  You set up a WP site, hand it off to a non-dev, show them how to edit stuff and then they point to some unused part of the UI and say:

> "What does this do?"

To which you sheepishly reply:

> "Oh, that doesn't do anything...just ignore it."

A CMS often feels like a work-around. Like it's designed for some other purpose.  The UI has a bunch of extra features that we don't need and the features that we use are often not in the right place or don't look quite right. Devs can deal with this, but non-technical folks find it confusing.

Our goal is to build the dream CMS for developers. A CMS that's customizable and allows you to strip out non-essential clutter from your UI.   Today we're happy to announce the first step in this direction:

[Front Matter Templates](https://forestry.io/docs/setting-up-a-site/front-matter-templates/){:style="background-color: white; letter-spacing: 0.01em;"} (FMTs).

If you have a page that makes use of a bunch of different fields (say a banner image, a gallery, etc.<span class="image-wrapper media-wrapper" contenteditable="false"></span>

![/blog/images/front-matter-templates-1.jpg](/blog/images/front-matter-templates-1.jpg)

That has all sorts of front matter like so:

    ---
    title: Astronomy
    layout: astronomy
    order: 5
    bio: Astronomy compels the soul to look upward...
    banner: /images/mars.jpg
    images:
    - "/images/rover2.png"
    - "/images/earth.jpg"
    - "/images/rocket.jpg"
    - "/images/aurora.jpg"
    - "/images/nebula.jpg"
    - "/images/rover.jpg"
    - "/images/galaxy.jpg"
    - "/images/rover3.png"
    email: astronomy@gmail.com
    phone: (555) 555-5555
    permalink: /astronomy/

    ---

    Astronomy compels the soul to look upward, and leads us from this world to another.

    Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.

Well now you can customize the layout by going to

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

![/blog/images/front-matter-template.png](/blog/images/front-matter-template.png){:style="float: none;"}![/blog/images/gallery upload .png](/blog/images/gallery%20upload%20.png) ![/blog/images/add help text.png](/blog/images/add%20help%20text.png)

Set fields to hidden:<span class="image-wrapper media-wrapper" contenteditable="false"></span>

![/blog/images/hidden-field.gif](/blog/images/hidden-field.gif)

Change the order of the fields on your page:<span class="image-wrapper media-wrapper" contenteditable="false"></span>

![/blog/images/reorder-fields.gif](/blog/images/reorder-fields.gif)