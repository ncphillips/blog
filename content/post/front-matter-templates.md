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
<blockquote>
<p>"What does this do?"</p>
</blockquote>

To which you sheepishly reply:
<blockquote>
<p>"Oh, that doesn't do anything...just ignore it."</p>
</blockquote>

A CMS often feels like a work-around. Like it's designed for some other purpose and isn't tailored to your site.  For example, some pages don't have a *body* section (like a blog post would have).  And when a non-technical person tries to edit that page, they find it confusing to see a giant WYSIWYG editor taking up 90% of the interface.

Our goal is to build the dream CMS for developers. A CMS that's customizable and allows you to strip out the non-essential clutter from your UI so you don't confuse your client or your teammates.

That's why we're happy to announce the first step in this direction:

<a href="https://forestry.io/docs/setting-up-a-site/front-matter-templates/">Front Matter Templates</a> (FMTs).

FMTs allow you to define and customize the presentation for your UI fields in

<a href="https://forestry.io">Forestry.io</a>.  This is useful if your pages have a variety of content and you want to customize the editing interface.

<img src="/blog/images/front-matter-templates-1.jpg" class="wider-than-text">

The above page makes use of all sorts of front matter, like so:
<pre data-md-type="spec"><code>---
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
</code></pre>

Now you can do things like:## Hide fields from your editors


<img src="/uploads/2017/02/13/hidden-field.gif" alt="/uploads/2017/02/13/hidden-field.gif" class="">
<p class=""><br></p>## Change the field type in the UI


<img src="/uploads/2017/02/13/field-type-1.gif" alt="/uploads/2017/02/13/field-type-1.gif">
<p class=""><br></p>
<h2 class="">Mark some fields as required
</h2>
<img src="/uploads/2017/02/13/required.gif" alt="/uploads/2017/02/13/required.gif" class="">
<p class=""><br></p>
<h2 class="">Reorder the fields in the UI</h2>
<img src="/uploads/2017/02/13/reorder-fields-1.gif" alt="/uploads/2017/02/13/reorder-fields-1.gif">
<p class=""><br></p>## Add help text


<img src="/uploads/2017/02/13/help-text.png" alt="/uploads/2017/02/13/help-text.png">
<p class=""><br></p>
<p class=""><br></p>
<p class="">Well now you can customize the layout by going to</p>

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

<img src="/blog/images/add%20help%20text.png" alt="/blog/images/add help text.png" class="">

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

<span class="image-wrapper media-wrapper" contenteditable="false"></span>