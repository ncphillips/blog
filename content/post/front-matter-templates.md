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


Does the following sound familiar? 
<span style="letter-spacing: 0.01em;">You set up a WP site, hand it off to a non-dev, show them how to edit stuff and then they point to some unused part of the UI and say:</span>
<blockquote>
<p>"What does this do?"</p>
</blockquote>

To which you reply:
<blockquote>
<p>"Oh, that thing? Just ignore it..."</p>
</blockquote>

A CMS often feels like a work-around. Like it's designed for some other purpose.  The UI has a bunch of extra features that we don't need and the features that we use are often not in the right place or don't look quite right. Devs can deal with this, but non-technical folks find it confusing.

<span style="letter-spacing: 0.01em;">Our goal is to build the dream CMS for developers. A CMS that's customizable and allows you to strip out non-essential clutter from your UI. &nbsp;
Today we're happy to announce the first step in this direction:&nbsp;
</span>
<a href="https://forestry.io/docs/setting-up-a-site/front-matter-templates/" style="background-color: white; letter-spacing: 0.01em;">Front Matter Templates</a>
<span style="letter-spacing: 0.01em;">
&nbsp;
(FMTs).&nbsp;</span>

If you have a page that makes use of a bunch of different fields (say a banner image, a gallery, etc.
<img src="/blog/images/front-matter-templates-1.jpg" alt="/blog/images/front-matter-templates-1.jpg">

That has all sorts of front matter like so:
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

Well now you can customize the layout by going to

<img src="/blog/images/front-matter-template.png" alt="/blog/images/front-matter-template.png">{:style="float: none;"}

<img src="/blog/images/gallery%20upload%20.png" alt="/blog/images/gallery upload .png">

<img src="/blog/images/add%20help%20text.png" alt="/blog/images/add help text.png">

Set fields to hidden:
<img src="/blog/images/hidden-field.gif" alt="/blog/images/hidden-field.gif">

Change the order of the fields on your page:
<img src="/blog/images/reorder-fields.gif" alt="/blog/images/reorder-fields.gif">