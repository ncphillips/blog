+++
Categories = []
date = "2016-08-31T11:49:00+00:00"
description = ""
draft = false
tags = []
title = "Why we built Forestry"

+++
My friend, Emily, needed a simple website for her restaurant.  She's a chef and didn't want to deal with the hassle of DNS, hosting, design, etc.  As a recovering freelancer, I offered to help. 

Normally, I would use WordPress for a site like this, but I was fed up with the headaches that comes with maintaining a WordPress site.  So, I took an evening and cranked out a simple 1-page static site.

My friend (and now partner), Jordan, asked me where I was going to host it.  I didn't know.  I wanted to throw it on S3, but didn't want to be tied to her S3 bucket for the rest of my life. And I knew Emily would never be able to navigate the nightmare-interface that is AWS.

![](/blog/forestryio/images/aws-console-puke.png)

We decided to built a pretty user-friendly interface that allowed us to easily host on S3 and hand everything over to Emily.

![](/blog/forestryio/images/admin1.png)

![](/blog/forestryio/images/cms2.png)
