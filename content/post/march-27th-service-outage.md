+++
Categories = ""
banner = ""
date = "2017-03-27T21:25:39+00:00"
description = ""
draft = true
excerpt = ""
show_author = true
show_comments = true
show_signup = true
tags = ""
title = "March 27th Service Outage"
twitter_card = ""
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


As some of you may have noticed, Forestry was down for about 2.5 hours between 23:00 UTC March 27 until 01:30 UTC March 28. In the spirit of full disclosure I'd like to explain what happened and why.

Forestry is a Rails application and from time to time the number of migrations we have gets unwieldy. Being an application under rapid development, things are constantly changing and migrations are created sometimes daily. To keep this every growing list of files at bay we use a tool called

<a href="https://github.com/jalkoby/squasher">squasher</a> to squash our migrations into a single migration.

The way squasher works is by taking the current state of the database and adding it to a migration with a filename that reflects the most recent migration that has run. This is so that when the database is migrated, the squashed migration will not run. This migration shouldn't run because, as it turns out, it will delete your entire database. The create_table statements are suffixed with `force: :cascade` which drops the table and all the related tables and recreates them. I think you can see where I am going.

I ran squasher on our migrations in dry run mode (as I have done before) to ensure that everything looked ok. Dry run mode creates the new squashed migration so that it can be inspected. My mistake was that I forgot to delete the migration that the dry run created before I ran it for real. On the subsequent run squasher picked up on the new migration, which didn't have a record in the database because it had never been run. The new squashed migration now had a name that did not exist in our production database and so when it ran, wiped our entire production database clean. The migration was run in development, but it was on a clean database so the issue wasn't noticed. And frankly, I wasn't worried because "I've done this before".

But... this is why we have backups. Our production database runs on 
<a href="https://aws.amazon.com/rds/">Amazon&nbsp;RDS</a> in a multi-az deployment. By the time the issue was noticed, the changes had already propagated to the failover instance so we had to go back to a point-in-time restore. So we took the site offline and searched our logs to find the most recent successful API request (this was the longest part). Once we found that, it was just a few clicks (and some waiting) to get a restored copy of the database back up and running. All in all, we lost < 1min worth of data.

TLDR; Accidentally deleted our production database by way of a bad migration so we had to restore from a backup.