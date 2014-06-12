---
layout: post
project: "Cluster Flow"
intro: "Simple pipelines for bioinformatics"
title: "Automate and standardise bioinformatics analyses on cluster environments"
date: 2014-06-10 11:26:23
categories: Pipelines
icon: "icon-flow-tree"
code: "https://github.com/ewels/clusterflow/"
stars: 7
poster: "clusterflow/poster.jpg"
---

{% highlight bash %}
$ cf --genome GRCh37 fastq_bowtie *fq.gz
{% endhighlight %}

# What is Cluster Flow?
Cluster Flow is a command-line program which uses common cluster managers to run analysis pipelines. It currently supports GRIDEngine (SGE), LSF and SLURM, plus it should be fairly easy to port to others.

Benefits of using Cluster Flow:

* Routine analyses are very quick to run
* Pipelines use identical parameters, standardising analysis and making results more reproducable
* Integrated parallelisation tools help prevent your cluster becoming overloaded
* All commands and output is logged in files for future reference
* Intuitive commands and a comprehensive manual make Cluster Flow easy to use
* Very easy to get up and running (in theory at least!)

How Cluster Flow differs from other pipeline tools:

* Very lightweight and flexible
* Pipelines and configurations can easily be generated on a project-specific basis if required
* New modules and pipelines are super easy to write (see video tutorial)

# Installation
Cluster Flow is hosted on GitHub: [https://github.com/ewels/clusterflow/](https://github.com/ewels/clusterflow/)

Full [installation instructions](http://ewels.github.io/clusterflow/installation/) can be found in the documentation.

# Documentation
You can read the full documentation at [http://ewels.github.io/clusterflow/](http://ewels.github.io/clusterflow/)

There are also two introductory videos that you can find on YouTube:

* [Usage / Installation Tutorial](http://youtu.be/b2g_zQiz9ys) - How to configure and run Cluster Flow
* [Advanced Tutorial](http://youtu.be/aBHOcsA2M6w) - How to write your own pipelines and modules

# Contributors
[Phil Ewels](http://phil.ewels.co.uk "Phil's Homepage") (<i class="icon-github"></i>[ewels](http://ewels.github.io/ "Find Phil on GitHub"), 
<i class="icon-twitter"></i>[tallphil](http://twitter.com/tallphil "Find Phil on GitHub"))

Written whilst working at the [Babraham Institute](http://www.babraham.ac.uk/), maintained at [SciLifeLab](http://www.scilifelab.se/)

# Licence
GPL v3