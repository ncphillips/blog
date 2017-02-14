+++
Categories = []
banner = "/images/code-bg-image-1-3.jpg"
description = ""
draft = true
excerpt = "The foundation for a hackable CMS"
show_author = true
show_comments = true
show_signup = true
tags = []
title = "Customize the UI with Front Matter Templates"
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
Does the following sound familiar?  You set up a WP site, hand it off to a non-dev, and then they point to some unused part of the UI and say:

> "What does this do?"

To which you sheepishly reply:

> "Oh, that doesn't do anything...just ignore it."

A CMS often feels like a work-around, designed for some other purpose.

## Front Matter Templates (FMTs)

FMTs allow you to customize the presentation of your UI fields in your CMS.

We're building a hackable CMS for Jekyll and Hugo sites. A CMS that allows you to strip out the non-essential clutter from your UI and [Front Matter Templates](https://forestry.io/docs/setting-up-a-site/front-matter-templates/) are the first step in this direction. This is handy if your pages use a lot of [front](https://jekyllrb.com/docs/frontmatter/) [matter](https://gohugo.io/content/front-matter/) fields.

## What you can do with FMTs

The following page makes use of a variety of front matter:

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

<img src="/blog/images/front-matter-templates-1.jpg" alt="Forestry front matter demo" class="wider-than-text">

    ---
    title: Astronomy
    layout: astronomy
    order: 5
    banner: /images/mars.jpg
    bio: Astronomy compels the soul to look upward...
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

<br><br>
With Front Matter Templates, you can do things like:

### Hide fields from your editors

![/uploads/2017/02/13/hidden-field.gif](/uploads/2017/02/13/hidden-field.gif)

### Change the field type in the UI

For example, change type from a list of tags to an image gallery. [See full list of available fields](https://forestry.io/docs/setting-up-a-site/front-matter-templates/#field-types).

![/uploads/2017/02/13/field-type-1.gif](/uploads/2017/02/13/field-type-1.gif)

### Required fields

![/uploads/2017/02/13/required.gif](/uploads/2017/02/13/required.gif)

### Reorder the fields in the UI

![/uploads/2017/02/13/reorder-fields-1.gif](/uploads/2017/02/13/reorder-fields-1.gif)

### Add help text

![/uploads/2017/02/13/help-text.png](/uploads/2017/02/13/help-text.png)

### Set default values and much more.

![/blog/images/default-values.png](/blog/images/default-values.png)

## What's Next?

This is just the beginning. Soon we'll be adding more field types and more customizability.

### Image resizing and cropping

![/blog/images/image-upload-4.gif](/blog/images/image-upload-4.gif)

### More advanced UI fields

Like color pickers, google map location picker, etc.

![/blog/images/color-picker-forestry.png](/blog/images/color-picker-forestry.png)

### Related fields

Select data from your elsewhere in your site. For example, choose a related post, or choose an author from a data file.

## Conclusion

[Front Matter Templates](https://forestry.io/docs/setting-up-a-site/front-matter-templates/) allow you to customize the presentation of the fields in your CMS.  You can set up a template to be used for a single page or for a collection of pages (posts, projects, etc).  Customize the UI so non-developers aren't confused.

As always, if you have any thoughts or feedback, we'd love to hear from you!
