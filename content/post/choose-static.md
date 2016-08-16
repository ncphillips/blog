+++
Categories = []
banner = "images/forestry.jpg"
date = "2016-08-02T01:06:00+00:00"
draft = true
excerpt = "When it comes to the Internet, content is king. And it is king for a reason. A site that has well written content concisely tells the story behind a brand, helps to inform customers about a business's products or services and helps guide a user navigate to their desired destination on your site."
tags = []
title = "I can finally choose static"
[[author]]
bio = "You can find me having conversations in 140 characters as <a href=\"https://twitter.com/michaelsoolee\">@michaelsoolee on Twitter</a>, sharing my knowledge of front-end development on <a href=\"http://codepen.io/michaellee\">CodePen</a> and helping others level up their programming skills on <a href=\"https://www.codehive.io/michaellee\">CodeHive</a>."
img = "/images/michaellee.jpg"
name = "Michael Lee"
twitter = "https://twitter.com/michaelsoolee"

+++
I can finally choose static.
When it comes to the Internet, content is king. And it is king for a reason. A site that has well written content concisely tells the story behind a brand, helps to inform customers about a business's products or services and helps guide a user navigate to their desired destination on your site.

I've worked with many different organizations in helping decide on the technology that would be used to publish content onto their sites. When it came down to making a decision on which publishing platform to go with, the one deal breaker that would quickly slim down the choices was that multiple, non-technical users would need to be able to publish content.

I've been writing on my personal site for several years using a static-site generator called Jekyll. It’s my go-to choice for publishing content on my site. What a static-site generator does is simply takes text files — think plain .txt or even markdown files — wraps them in a template and converts them into static HTML pages.

If you've never used a static-site generator, you might be wondering at this point, what are the benefits of using a static-site generator over a more traditional content management system (CMS) like Wordpress or Drupal?

## The Good

Let me list a few of the benefits that has me hooked on static-site generators:


- **There is no database**, since all your posts are simple text files, there is no need for a database. No database means, you don't have to worry about data corruption and transporting of your data is a lot easier. Heck you can even stick your text files up on Dropbox and you'll have them with you all the time.

- **Don't have to worry about viruses.** Your site is generated entirely on your machine or your host server. For this reason, there is no outdated code to worry about or the need to worry about downloading the latest version of a plugin. Just publish and rest easy at night.

- **Overhead cost to host is cheap.** Since all you're hosting are static assets, the cost to host is super cheap. I'm currently hosting on Digital Ocean, a service that provides VPS hosting run on SSDs, so it is blazing fast. Cost to host per month, just $5 dollars. And that includes SSL since I use [letsencrypt](https://letsencrypt.org/) on the server. If $5 is still steep, you could even host your site on Amazon's AWS and your monthly bill will be cents. You read that right, cents! Pair that with their CDN service and you've got yourself a killer hosting solution. And if that’s still too much, save your spare change for pizza and host your site on [GitHub ](https://pages.github.com/)[P](https://pages.github.com/)[ages](https://pages.github.com/), completely free!
## The Not So Good

Are you saying, hey that sounds awesome! Sign me up? Well before you jump the gun and hail static-site generators as your go-to content management solution, let me share some of the roadblocks for static-site generators and afterwards share how these roadblocks are quickly fading with a happy ending.


- **Friction to produce content.** As awesome as static-site generators are, there is friction to creating content. On a traditional publishing platform, you simply log in, click a few buttons and you're presented with a text box to write your content and hit publish.


  With static-site generators, you have to create a file that will be used for your page or blog post, after writing your content, you'll have to build the entire website and then push up your site to your host. If you're versioning your site — you are versioning your site right...? — that adds a few more steps; you have to commit your post, push it to the repository and then have your host server build your site.


- **Technical by nature.** As you can see in my first point above, you have to be a little tech savvy to run a site with a static-site generator. But you're saying the main content creators aren't technically savvy at all...they're writers and marketers. The learning curve is too steep to get them onboard with using a static-site generator.


- **It isn't sexy.** To be honest, as someone using a static-site generator, I'll tell you compared to the traditional CMS options, they just aren't sexy. I'm mainly in my command-line or text editor of choice, both of which are great for coding and stuff. But isn't so conducive to writing.

## The Happy Ending

Sorry to burst your bubble a little with the not so good list of things about static-site generators, but like I said earlier, there really is a happy ending. As the title of this post states, I can finally choose static, and I'm going to tell you why I'm excited about this and why I can finally (still) choose static even with the list of not so good things.

Forestry. Forestry is a CMS for your statically generated sites. Your immediate thoughts might be, great another layer that I need to add to my tech stack. Well hold your horses, let me share with you what you gain from using Forestry. First you gain the benefits I listed above (here's the link to the list if you need a reminder) for static-site generators, second it remedies the "not so good" things about static-site generators and if you've already got a statically generated site, the folks behind Forestry have made it über easy to integrate with Forestry.

<img style="width 200px;float: right;" src="/blog/images/draft-publish.gif" style="float: right; margin: 10px;">


- **No more friction to produce.** With Forestry much like a traditional CMS, users login and are presented with a way to create pages and posts. Once the content is written, they can either save a draft or publish with a click of a button. In the background, Forestry commits the necessary changes to your repo (if you’re using GitHub or Bitbucket) and will deploy your compiled site to your host.

- **Simple by nature.** If the content creators have ever used any modern content management system, they'll feel right at home. WYSIWYG editor? Check. Asset upload? Check.

- **Oh so sexy.** Let these screenshots do the talking here. Just eye-candy. Want more? Take [Forestry](https://forestry.io) for a test drive.

<img style="width 200px;float: right;" src="/blog/images/screenshot.jpg">


So the next time you're faced with setting up a website or a blog and you don't want to go with the traditional CMS options. You can finally choose the much better technology choice of going with a static-site generator for you, but choose a user-friendly **and** sexy CMS for your content producers with [Forestry](https://forestry.io)[.io](https://forestry.io).
