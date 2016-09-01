---
layout: post
title:  "I Really Liked Snowly Theme, So I Forked It"
date:   2015-08-29 18:17:16 +0000
categories: code
cover: snowlybygaltashma.png
author: Gal Tashma
---

First of all, I wanted to announce that I am moving from [bitterb.it](improving-snowly.html#) and from now on this site will be hosted on [galtashma.com](http://galtashma.com/posts/galtashma.com)

## Intro

I really liked the [Snowly theme](https://anchorthemes.com/theme/snowly) and was thinking of using it for my personal blog. I liked its simple look and feel but I was missing my own touch. Furthermore, I felt that i was missing two important features:

*   Home page did not contain recent blog posts
*   There was no page to show my work

All that lead me to forking the theme an making it my own.

By the way, apparently my modifications aren't enough to be submitted to the anchor showcase site (or any modifications). That site is not a theme showcase site, its a website showcase... I am even quite sure they didn't even bother to look at my site.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/galtashma">@galtashma</a> <a href="https://twitter.com/danoxide">@danoxide</a> looks great Gal! However we can’t accept sites that are based on someone else’s theme. Sorry.</p>&mdash; Anchor Showcase (@AnchorShowcase) <a href="https://twitter.com/AnchorShowcase/status/594888371316596736">May 3, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Home Page

![](https://raw.githubusercontent.com/bitterbit/Snowly/master/home_screenshot.png)

#### Posts Everywhere

I saw many questions around the web regarding adding posts-list to the home page, this is how I did it.  
The function `load_posts` asks the anchorcms lib to get the posts listings from the db and puts them in the registry, so they can be used later (only in that single http request).  
`shorten_article` makes sure we don't flood the home page with the full post. From your home page call `<?php load_posts(); ?>` and from there its all like normal.  
<script src="https://gist.github.com/bitterbit/a9b1a4287cc48a97e448.js"></script>

#### Colors

I wanted my homepage to be different, so the first thing I did was create this gorges color changing background. Here is the css behind that neat effect.  
<script src="https://gist.github.com/bitterbit/10dde34abffa9c6ab910.js"></script>

## Fixed a small xss

I saw that the snowly theme would allow an xss in some cases where the desired page was not found. This was caused by the lack of output sanitizing. Fixing this is really easy, just pass the result through `htmlspecialchars` function. 
<script src="https://gist.github.com/bitterbit/95c7038528ae4542e749.js"></script>
