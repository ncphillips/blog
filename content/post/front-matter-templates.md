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
<span style="letter-spacing: 0.01em;">Does the following sound familiar? </span>

<span style="letter-spacing: 0.01em;">You set up a WP site, hand it off to a non-dev, show them how to edit stuff and then this happens:</span>

They point to some unused part of the UI and say:

> "What does this do?"

To which you reply:

> "Oh that doesn't do anything...just ignore it"

Our goal is to build the dream CMS for developers. A CMS that's customizable and allows you to strip out non-essential clutter from your UI.  <span style="letter-spacing: 0.01em;">Today we're announcing the foundation for this: </span>[Front Matter Templates](https://forestry.io/docs/setting-up-a-site/front-matter-templates/) <span style="letter-spacing: 0.01em;">(FMTs).</span>

If you have a page with  a complex layout.

![/blog/images/front-matter-templates-1.jpg](/blog/images/front-matter-templates-1.jpg)

That has a variety of front matter, like so:

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