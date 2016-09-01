---
layout: post
title:  "Smooth Android View Pager"
date:   2014-04-12 00:26:00 +0300
categories: code
author: Gal Tashma
---

## Smooth ViewPager
While working with the android ViewPager I noticed that scrolling through pages within the code (not by touch) is not smooth and is too fast. I wanted my ViewPager to scroll smoothly. No answer on the web could fix the problem entirely so i decided to try and fix it myself.

To fix this problem I wrote the SmoothViewPager. It uses reflection to change the behavior of the default ViewPager.

While looking for a solution for the problem I stumbled upon JazzyViewPager by jfeinstein10. JazzyViewPager adds some cool animations to the classic ViewPager, I realy recommend using it!

<script src="https://gist.github.com/bitterbit/10494635.js"></script>