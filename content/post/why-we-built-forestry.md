+++
Categories = []
date = "2016-08-31T11:49:00+00:00"
description = ""
draft = true
tags = []
title = "Why we built Forestry"

+++
My friend, Emily, needed a simple website for her restaurant.  She's a chef and didn't want to deal with the hassle of DNS, hosting, design, etc.  As a recovering freelancer, I offered to help. 

Normally, I would use WordPress for a site like this, but I was fed up with the headaches that comes with maintaining a WordPress site.  So, I took an evening and cranked out a simple 1-page static site.

## A Response to Amazon Web Services
My friend (and business partner), Jordan, asked me where I was going to host it but I didn't know.  I wanted to throw it on S3, but didn't want to be tied to her S3 bucket for the rest of my life. And I knew Emily would never be able to navigate the nightmare-interface that is AWS.

<img src="/blog/forestryio/images/aws-console-puke.png" alt="AWS interface">
 <p style="text-align: center; margin-bottom: 2em;">Amazon's cluttered UI (it reminds me of C-Panel).</p>

We decided to build a more user-friendly interface that allowed us to easily host sites on S3. So we could hand it off to Emily.

![](/blog/forestryio/images/admin1-1.png)
 <p style="text-align: center; margin-bottom: 2em;">Our system for  of hosting static sites S3</p>

*** 
## Feedback from HN

<img src="/blog/forestryio/images/cms2.png" class="small right">We shared this project on [Hackernews](https://news.ycombinator.com/item?id=10062939) and to our surprise, it got a lot of interest and went to the homepage.  What people were most excited for was this little CMS feature we had on the side.  It wasn't really built, but we described our plan with some screenshots and said it was "coming soon".

## Hosting Platform Vs CMS
We decided to run a simple test comparing the two directions we could take focus on Hosting or focus on a CMS.  Our guts told us there was a bigger need for a CMS and data backed that up (slightly).

![](/blog/forestryio/images/fb_cms2.png)
 <p style="text-align: center; margin-bottom: 2em;">StatikCMS - The ad for our fake CMS platform</p>
 
 ![](/blog/forestryio/images/fb_host.png)
 <p style="text-align: center; margin-bottom: 2em;">StatikHost - The ad for our fake hosting platform</p>
 
 
## Months of hard work
We focused on our favorite tools ([Jekyll](http://jekyllrb.com/) and [Hugo](http://gohugo.io/)), we worked like dogs for months and finally got a working MVP online.  So far we're getting a lot of great feedback from the dev community.
![](/blog/tmp/d20160901-17023-xgizl8/themes/hugo-blog-theme/static/images/screenshot.jpg)
