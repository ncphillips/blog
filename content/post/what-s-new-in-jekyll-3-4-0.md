+++
Categories = ""
banner = "/images/jekyll-3.4.0-1.png"
date = "2017-02-10T09:06:16-05:00"
description = ""
draft = true
excerpt = ""
show_author = true
show_comments = true
show_signup = true
tags = ""
title = "What's new in Jekyll 3.4.0"
twitter_card = "/images/jekyll-3.4.0-2.png"
[[author]]
bio = "Marketer, Media buyer and Developer at desiredpersona.com"
img = "/images/colin-garvey.jpg"
name = "Colin Garvey "
twitter = "https://twitter.com/desiredpersona"
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
Jekyll 3.4.0 was release on the 27<sup>th</sup> of January with some noteworthy enhancements that id like to share with you.

So whats new?

## Add connector param to ‘array_to_sentence_string’ filter

*   **array** - The list of strings to join.
*   **string** - A string can be any text inside quotes. In this example I will use Jekyll tags.
*   **connector** - The word placed before the last word in the array. The default connector Jekyll uses is the word “and”.

Still with me?

Here is a real world example.

Let’s say we have the following tag’s in our post front matter.

```
tags:
	- one
	- two
	- three
```

We can then create an `_include` file for our post tag’s using

```
{{ page.tags | array_to_sentence_string }}
```

Remember the default connector is `and`, so this will output our tags like so

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

## Group By Expression filter (Note: Not finished)

The `group_by_exp` filter allows you to group an array's items using a Liquid expression.

Here's a quick example that shows how to arrange site members by the year they graduated.

```
{{ site.members | group_by_exp:"item", "item.graduation_year | truncate: 3, \"\"" }}
```

```
[{"name"=>"201...", "items"=>[...]},{"name"=>"200...", "items"=>[...]}]
```

## Group an array of items by a property (Note: Not finished)

input - the inputted Enumerable property - the property

Returns an array of Hashes, each looking something like this: {"name" => "larry" "items" => [...] } # all the items where `property` == "larry"

## Documentation updates (Note: Not finished)

- Jekyll’s plugin page now showcases the most [popular plugins
](http://jekyllrb.com/docs/plugins/#available-plugins/).

- The quick-start guide was updated so there’s never been a better time to [try Jekyll](https://jekyllrb.com/).

## Noteworthy warnings

If you have updated to ruby 2.4.0 you may have noticed the warnings “Bignum is deprecated” and “Fixnum is deprecated”. These warning come from the activesupport gem which is part of rails and will be fixed in an upcoming release. For now you can just ignore those warnings. You didn’t do anything wrong.

As always the Jekyll team have been hard a work updating the documentation so there has never been a better time to [learn Jekyll](https://jekyllrb.com/).