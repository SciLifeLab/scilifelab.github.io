---
layout: post
title: Coverage analysis for clinical sequencing
date: 2014-05-14 07:06:51
categories: tools
project: Chanjo
icon_img: chanjo/logo-48.png
code: https://github.com/robinandeer/chanjo
repo: robinandeer/chanjo
intro: Coverage analysis for clinical sequencing
poster_bg: chanjo/poster.jpg
poster_logo: chanjo/logo.png
---

## Intro

{% highlight bash %}
$ cat intervals.bed | chanjo annotate alignment.bam
#{"sample_id": "bavewira", ...}
1	10	15	interval-1	9.922	0.97231
2	45	55	interval-2	14.231	1.0
{% endhighlight %}

Chanjo adds two columns to each genomic interval (e.g. exon) describing average coverage and how many percent of bases that are covered at 10x reads; completeness.

To learn more about Chanjo and how you can use it to gain a better understanding of sequencing coverage you should start by [checking out the demo](https://chanjo.readthedocs.org/en/latest/introduction.html).

## Overview
Chanjo works on BAM alignment files and extracts interesting coverage related statistics. You use a BED-file to define which regions of the genome that you particularly care about. The output takes the shape of an extended BED-file.

An optional final step is to load results into a SQL database. This will aggregate data from exons to transcripts and genes. The database later work as an API to downstream tools like the [Chanjo Report](https://github.com/robinandeer/chanjo-report) generator.

## Documentation
The comprehensive [documentation][docs] has all the information you want; getting started guide, foolproof installation instructions, and in-depth overviews.

## Installation [![PyPI version][fury-image]][fury-url] [![Build Status][travis-image]][travis-url]
Complete instructions are available in the [docs][docs] but if you know what you are doing, Chanjo is installed by simply running:

{% highlight bash %}
$ pip install chanjo
{% endhighlight %}

Contributors
-------------
[Robin Andeer][portfolio] (<i class="icon-github"></i>[robinandeer][github], <i class="icon-twitter"></i>[robinandeer][twitter])

Luca Beltrame (<i class="icon-github"></i>[lbeltrame](https://github.com/lbeltrame))

John Kern ([kern3020](https://github.com/kern3020))

License
--------
MIT

[portfolio]: http://www.robinandeer.com "Robin's Portfolio"
[github]: https://github.com/robinandeer "Find Robin on GitHub"
[twitter]: http://twitter.com/robinandeer "Chat with Robin on Twitter"
[docs]: http://www.chanjo.co
[demo]: http://www.chanjo.co/en/latest/introduction.html#demo

[fury-url]: http://badge.fury.io/py/chanjo
[fury-image]: https://badge.fury.io/py/chanjo.png

[travis-url]: https://travis-ci.org/robinandeer/chanjo
[travis-image]: https://travis-ci.org/robinandeer/chanjo.png?branch=master
