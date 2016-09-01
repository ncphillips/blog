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

My friend (and business partner), Jordan, asked me where I was going to host it.  I didn't know.  I wanted to throw it on S3, but didn't want to be tied to her S3 bucket for the rest of my life. And I knew Emily would never be able to navigate the nightmare-interface that is AWS.

<img src="/blog/forestryio/images/aws-console-puke.png" alt="AWS interface">
 <p style="text-align: center; margin-bottom: 2em;">Amazon's cluttered UI (it reminds me of C-Panel).</p>

We decided to built a more user-friendly interface that allowed us to easily host sites on S3. So we could hand it off to Emily.

![](/blog/forestryio/images/admin1.png)
 <p style="text-align: center; margin-bottom: 2em;">Our version of managing hosting with S3</p>

We shared this project on [Hackernews](https://news.ycombinator.com/item?id=10062939) and to our surprise, it went to the homepage.  What people were most excited for was this little CMS feature we had on the side for static sites. 

![](/blog/forestryio/images/cms2.png)
 <p style="text-align: center; margin-bottom: 2em;">Our version of managing hosting with S3</p>