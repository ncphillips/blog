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
Jekyll 3.4.0 was release on the 27<sup>th</sup> of January 2017 with some noteworthy enhancements that I'd like to share with you.

So what's new?

## Add connector param to ‘array_to_sentence_string’ filter

*   **array** - The list of strings to join.
*   **string** - A string can be any text inside quotes. In this example I will use Jekyll tags.
*   **connector** - The word placed before the last word in the array. The default connector Jekyll uses is the word “and”.

Still with me?

Here is a real world example.

Let’s say we have the following tags in our post front matter.

```
tags:
	- one
	- two
	- three
```

We can then create an `_include` file for our post tags using

```
{{ page.tags | array_to_sentence_string }}
```

Remember the default connector is `and`. This will output our tags like so

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

## Group an array's items using a Liquid expression filter

Jekyll previously allowed you to group your content by a given property using the `group_by` filter. As an example let’s group all site members working for each company.

*   **input** - Site members.
*   **property** - Company.

Our Jekyll site’s `_config.yml` includes the following members.

```
members:
- name: "Scott"
  company: "Forestry"
- name: "Jordan"
  company: "Forestry"
- name: "Parker"
  company: "Github"
```

Jekyll can apply the `group_by` filter with company as the parameter using

```
{{ site.members | group_by:"company" }}
```

Site members names are collected into an array which outputs the following information

```
{“name”=>”Forestry”, “items”=>[{“name”=>”Scott”, “company”=>”Forestry”}, {“name”=>”Jordan”, “company”=>”Forestry”}], “size”=>2}{“name”=>”Github”, “items”=>[{“name”=>”Parker”, “company”=>”Github”}], “size”=>1}
```

To make this information more useful, we can now create a list of members grouped by their company name

```
{% assign groups = site.members | group_by: "company" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>
    <ul>
    {% for item in group.items %}
        <li>{{item.name}}</li>
    {%endfor%}
    </ul>
{%endfor%}
```

This will output the following list of site members organised by the company they work for.

```
<h3>Forestry</h3>
<ul>
  <li>Scott</li>
  <li>Jordan</li>
</ul>
<h3>Github</h3>
<ul>
  <li>Parker</ul>
</ul>
```

Jekyll 3.4.0 introduced the `group_by_exp` filter which allows you to group an array of items using a Liquid expression like so

```
{{ site.members | group_by_exp:"items", "items.company" }}
```

This outputs the following information

```
{“name”=>”Forestry”, “items”=>[{“name”=>”Scott”, “company”=>”Forestry”}, {“name”=>”Jordan”, “company”=>”Forestry”}], “size”=>2}{“name”=>”Github”, “items”=>[{“name”=>”Parker”, “company”=>”Github”}], “size”=>1}
```

Using a Liquid expression we can now create a list of site members grouped by the company they work for

```

{% assign groups = site.members | group_by_exp: "items", "items.company" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>

    <ul>
    {% for item in group.items %}
        <li>{{item.name}}</li>
    {%endfor%}
    </ul>
{%endfor%}
```

This gives us the same output as earlier

```
<h3>Forestry</h3>
<ul>
  <li>Scott</li>
  <li>Jordan</li>
</ul>
<h3>Github</h3>
<ul>
  <li>Parker</ul>
</ul>
```

In conclusion we can also use the `group_by_exp` filter to output different information such as site members names if we change the Liquid expression.

```
{{ site.members | group_by_exp:"items", "items.name" }}
```

We can create a list of site members names like so

```
{% assign groups = site.members | group_by_exp: "items", "items.name" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>
{%endfor%}
```

Output:

```
<h3>Scott</h3>
<h3>Jordan</h3>
<h3>Parker</h3>
```

## Documentation updates

*   Jekyll’s plugin page now showcases the most [popular plugins](http://jekyllrb.com/docs/plugins/#available-plugins/) .

*   The quick-start guide was updated so there’s never been a better time to [try Jekyll](https://jekyllrb.com/).

## Jekyll warnings

*   Jekyll now notifies you when you have an error in an `_include` file. This should save you some time tracking down bugs.

*   Jekyll docs recommend ruby version 2.0 or above. If you have updated to ruby 2.4.0 you may have noticed the warnings “Bignum is deprecated” and “Fixnum is deprecated”. These warning come from the activesupport gem which is a Jekyll dependancy and will be fixed in an upcoming release. For now you can just ignore those warnings. You haven't done anything wrong.

Let me know if you found these tutorials helpful.