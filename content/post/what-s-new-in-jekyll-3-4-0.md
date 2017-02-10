+++
Categories = []
banner = ""
date = "2017-02-10T09:06:16-05:00"
description = ""
draft = true
excerpt = ""
show_author = true
show_comments = true
show_signup = true
tags = []
title = "What’s new in Jekyll 3.4.0"
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
Jekyll 3.4.0 was release on the 27th of January with some noteworthy enhancements that id like to share with you.

So whats new? 

### Add connector param to ‘array_to_sentence_string’ filter

`array_to_sentence_string` Convert an array into a sentence.

What does this mean exactly?

**array** - The array of strings to join.
**connector** - The word that is placed between the last two words in the array. The default connector used is the word “and”.

Still with me?

Here is a real world example.

Let’s say we have the following tag’s in our post’s front matter.
```
Tags:
	- one
	- two
	- three
```

We can then create an `_include` file for our post’s tag’s using
```
{{ page.tags | array_to_sentence_string }}
``` 

Remember the default connector is “and”, so this will output our tags like so
```
one, two, and three
```

Easy right?

Now Jekyll 3.4.0 allows you to change the default connector to use other terms such as "or” like so.
```
{{ page.tags | array_to_sentence_string: 'or' }}
```

This will output
```
one, two, or three
```


### Adds Group By Expression filter (Note: Not finished)

The `group_by_exp` filter allows you to group an array's items using a Liquid expression.

Here a quick example that shows how to arrange site members by the year they graduated.

```
{{ site.members | group_by_exp:"item", "item.graduation_year | truncate: 3, \"\"" }}
```

```
[{"name"=>"201...", "items"=>[...]},{"name"=>"200...", "items"=>[...]}]
```

### Group an array of items by a property (Note: Not finished)
 
  input - the inputted Enumerable
  property - the property

  Returns an array of Hashes, each looking something like this:
   {"name"  => "larry"
   "items" => [...] } # all the items where `property` == "larry"
   
   
   
### Documentation updates (Note: Not finished)

Plugins page was update to show case more plugins.
http://jekyllrb.com/docs/plugins/



### Noteworthy warnings
If you have updated to ruby 2.4.0 you may have noticed the warnings “Bignum is deprecated” and “Fixnum is deprecated”. These warning come from the activesupport gem which is part of rails and will be fixed in an upcoming release. For now you can just ignore those warnings. You didn’t do anything wrong.


As always the Jekyll team have been hard a work updating the documentation so there has never been a better time to [learn Jekyll](https://jekyllrb.com/).


### Why do I use Jekyll? (Note: Not finished)
Save bandwidth
Loads much faster
No server needed
No expensive plugins
No security issues



### Dealing with non-techie Clients
A lot of clients ask for WordPress and it is often overkill for most websites. For years there wasn’t a good alternative.
As a developer, dealing with WordPress has always been a pain in the ass. There I said it. You spend most of your time managing and scaling servers, when you could instead be scaling your client list. About a year ago I wanted to achieve a better work-life balance so I decided to give static site generators a try. The biggest issue I faced so far with Jekyll, was developing websites for non-techie clients. Their need to constantly create and update content required a content management system.

### Introducing Forestry Remote
If you are a developer who is looking for a beautiful CMS that your clients will adore, I invite you to try [Forestry Remote](https://forestry.io/remote). Forestry Remote is fast, secure and simple to work with. It is automatically updated for your clients, so you can sleep at night knowing that hacked sites, outdated plugins and pesky WordPress updates are a thing of the past.

If you found this post helpful do consider joining the newsletter so that we can keep you posted. (Note: Maybe write about Forestry hosting)
