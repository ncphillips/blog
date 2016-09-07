+++
Categories = []
banner = "/forestryio/images/gitlab-and-forestryio.png"
date = "2016-09-06T23:45:00+00:00"
description = "We're happy to announce our support for GitLab hosted sites"
draft = false
excerpt = ""
tags = []
title = "Forestry + GitLab "
[[author]]
bio = "CTO and Co-founder of <a href='https://forestry.io' title='Forestry.io CMS'>Forestry.io</a>. Backend developer, systems guy, father, builder of houses. "
img = "/forestryio/images/jordan-patterson-forestryio.png"
name = "Jordan Patterson"
twitter = "https://twitter.com/jpatterson"
[[suggested]]
link = "https://forestry.io/blog/post/why-we-built-forestry/"
title = "Why we built Forestry.io - Scott Gallant"
[[suggested]]
link = "https://forestry.io/blog/post/choose-static/"
title = "I can finally choose static - Michael Lee"
[[suggested]]
link = "https://forestry.io/blog/post/forestryio-techstars-2016/"
title = "Forestry.io + Techstars 2016 - Scott Gallant"

+++
![](/blog/forestryio/images/gitlab-and-forestryio-1.png)

We've been [GitLab](https://gitlab.com) users since their very first release in Oct of 2011 when I worked at a design agency and converted everything over from SVN to Git and used an internal GitLab installation.  I remember filing bugs and _ was quick to fix them. We had sensitive projects that we couldn't host on GitHub, yet we were able to manage all of our source code internally with GitLab. We loved it, and still do.

We've watched GitLab grow since their humble beginnings and become a dominant player in version control management. At Forestry, GitLab has been our most requested feature and we're happy to announce that as of today, you can sync your static site at GitLab.com syncing.

## Seting up a GitLab site
Select GitLab from the list of Git services.  Then Choose your repo and branch.
![](/blog/forestryio/images/gitlab--site-setup-1.png)

Forestry will import your site and automatically build a CMS
![](/blog/forestryio/images/importing-site.png)

If you're using GitLab pages and you just want Forestry to commit your CMS changes back to your GitLab repo, select **Commit to source repo**.  Alternatively you can have Forestry build and deploy your site (Amazon S3, FTP, etc). 
![](/blog/forestryio/images/Gitlab-hosting.png)