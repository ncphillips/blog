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

A CMS often feels like a work-around. Like it's designed for some other purpose and isn't tailored to your site.  For example, some pages don't have a _body_ section (like a blog post would have).  And when a non-technical person tries to edit that page, they find it confusing to see a giant WYSIWYG editor taking up 90% of the interface.

Our goal is to build the dream CMS for developers. A CMS that's customizable and allows you to strip out the non-essential clutter from your UI so you don't confuse your client or your teammates.

That's why we're happy to announce the first step in this direction: [Front Matter Templates](https://forestry.io/docs/setting-up-a-site/front-matter-templates/) (FMTs).

FMTs allow you to define and customize the presentation for your UI fields in your CMS.  This is useful if your pages have a variety of content defined in your [front](https://jekyllrb.com/docs/frontmatter/) [matter](https://gohugo.io/content/front-matter/).

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

![](/blog/images/front-matter-templates-1.jpg){:.wider-than-text}

The above page makes use of the following front matter:

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

With Front Matter Templates, you can do things like:

## Hide fields from your editors

![/uploads/2017/02/13/hidden-field.gif](/uploads/2017/02/13/hidden-field.gif)

## Change the field type in the UI

For example, going from tags to an image gallery. [See full list of available fields](https://forestry.io/docs/setting-up-a-site/front-matter-templates/#field-types).

![/uploads/2017/02/13/field-type-1.gif](/uploads/2017/02/13/field-type-1.gif)

## Required fields

![/uploads/2017/02/13/required.gif](/uploads/2017/02/13/required.gif)

## Reorder the fields in the UI

![/uploads/2017/02/13/reorder-fields-1.gif](/uploads/2017/02/13/reorder-fields-1.gif)

## Add help text

![/uploads/2017/02/13/help-text.png](/uploads/2017/02/13/help-text.png)

## Set default values and much more.

![/blog/images/default-values.png](/blog/images/default-values.png)

## What's Next?

This is just the beginning. Soon we'll be adding more field types and more customizability.

### Image resizing and cropping

![/blog/images/image-upload-4.gif](/blog/images/image-upload-4.gif)

### More advanced UI fields

Like color pickers, google map location picker, etc. 

![/blog/images/color-picker-forestry.png](/blog/images/color-picker-forestry.png)

### Related fields

Link to a related post, or choose an author from an author data file.