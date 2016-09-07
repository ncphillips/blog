+++
Categories = []
banner = "/forestryio/images/gitlab-and-forestryio.png"
date = "2016-09-06T23:45:00+00:00"
description = "We're happy to announce our support for GitLab hosted sites"
draft = false
excerpt = "GitLab support is here! Fire up a CMS for your GitLab-hosted Jekyll and Hugo sites! "
tags = []
title = "Forestry + GitLab "
twitter_card = "/forestryio/images/twitter-card-gitlab-forestry.png"
[[author]]
bio = "CTO and Co-founder of <a href='https://forestry.io' title='Forestry.io CMS'>Forestry.io</a>. Backend developer, systems guy, father, builder of houses. "
img = "/forestryio/images/jordan-patterson-forestryio.png"
name = "Jordan Patterson"
twitter = "https://twitter.com/jpatterson"
[[suggested]]
link = "https://forestry.io/blog/post/why-we-built-forestry/"
title = "Why we built Forestry - Scott Gallant"
[[suggested]]
link = "https://forestry.io/blog/post/choose-static/"
title = "I can finally choose static - Michael Lee"
[[suggested]]
link = "https://forestry.io/blog/post/forestryio-techstars-2016/"
title = "Forestry.io + Techstars 2016 - Scott Gallant"

+++
We've been [GitLab](https://gitlab.com) users since their very first release in Oct of 2011. I worked at a design agency and converted everything over from SVN to Git and used an internal GitLab installation. I remember submitting a few bugs and [Dmitriy](https://twitter.com/dzaporozhets) was quick to fix them. We loved GitLab then, and still do today.

We've watched GitLab grow since their humble beginnings and become a dominant player in the version control space. At Forestry, GitLab has been one of the most requested features and we're happy to announce that, you can sync your [GitLab.com](https://gitlab.com) static site with the [Forestry.io CMS](https://forestry.io).

## Seting up a GitLab site
Select GitLab from the list of Git services.  Then Choose your repo and branch.
![](/blog/forestryio/images/Gitlab-forestry.png)

Forestry will import your site and automatically build a CMS
![](/blog/forestryio/images/importing-site-1.png)

If you're using GitLab pages and you just want Forestry to commit your CMS changes back to your GitLab repo, select **Commit to source repo**.  Alternatively you can have Forestry build and deploy your site (Amazon S3, FTP, etc). 
![](/blog/forestryio/images/Gitlab-hosting.png)

Boom! You're ready to rock. 