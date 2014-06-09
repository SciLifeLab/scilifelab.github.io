scilifelab.github.io
====================

Web portal for open source (research) projects at SciLifeLab

Submit a pull request if you want to add a project to the site.

Setup (optional)
-----------------
It is recommended (but not required) to setup [Jekyll][jekyll] so that you can view the resulting website as you compose your project page.

You first need ruby [installed][ruby install] on your system.

Next we install our ruby dependencies.

```bash
    $ bundle install
    $ cd _sass && bourbon install && cd -
```

Now you should be prepared to serve the site locally.

```bash
    $ jekyll server --watch
```

The ``--watch`` option will watch for changes to file and recompile the static assets automatically. Quite handy when you are writing your project page or altering SASS files.


Adding a project page
----------------------
Each project page is defined in a Jekyll post (markdown + YAML) and optionally a few assets. To add a new project page to the repository/site do the following.

1. Duplicate the template file

You'll find it in the ``_posts`` directory. Name your copy ``<year>-<month>-<day>-<project name>.markdown``.

2. Edit the YAML properties at the top of the file

3. Special assets (optional)
There are a list of special assets that *optionally* belong to each of the projects. They are all defied in the YAML portion of the project markdown file.

A project icon can be chosen from the characters provided in the [Entypo icon font][entypo]. Find your corresponding class name in the [Entypo css file][http://cdn.jsdelivr.net/font-entypo/0.1/dev/entypo.css].

It's highly recommended that you compose a poster image, for example with project logo. Don't worry too much about the file size - ~300-400 KB is totally fine. Bigger is better.

Creating the poster doesn't have to be very difficult. Grab a [public domain photo][unsplash] and compose with [Sketch][sketch], Keynote, or Powerpoint.

4. Write the body of project page

It should include:
- a brief usage guide or reference to your main documentaion
- an installation guide
- Licensing information

Write the content in Markdown. It's a simple markup language used at GitHub and elsewhere. You can find [many][gh-markdown] [different][tuts-markdown] [tutorials][md-tutorial].

The only difference from regular Markdown is when you want to add code blocks. They take this form:

```liquid
{% highlight python %}

def some_function(argument):
    """Super function!"""
    return argument.split(',')

{% endhighlight %}
```

If you are having trouble figuring it out, just take at the source for another project page or this README file.

Lastly, if you want to use any other assets like images inline with you text you should commit them to the repository. Store them in the ``img`` folder under a separate project directory for sanity.


Developing SASS
-----------------
GitHub doesn't support the new SASS compilation built into Jekyll 2.0. This creates a bit of an issue during development.

If you want to make changes to the SASS files you will (for now) have to:

1. Change ``main-compiled.css`` to ``main.css`` in ``_includes/head.html``.
2. This will directly load the auto-compiled CSS-file when running ``jekyll server --watch``.
3. When you are ready, copy the ``_site/css/main.css`` to ``css/main-compiled.css``.
4. Commit the SCSS and *compiled* CSS changes to the repository.


[ruby install]: https://www.google.com/search?q=install+ruby&oq=install+ruby&aqs=chrome..69i57j0l5.469j0j1&sourceid=chrome&es_sm=91&ie=UTF-8 "Google 'ruby install'"
[jekyll]: http://jekyllrb.com/
[entypo]: http://www.entypo.com/characters/
[entypo-css]: http://cdn.jsdelivr.net/font-entypo/0.1/dev/entypo.css
[gh-markdown]: https://help.github.com/articles/markdown-basics
[tuts-markdown]: http://code.tutsplus.com/tutorials/markdown-the-ins-and-outs--net-25482
[md-tutorial]: http://markdowntutorial.com/
[sketch]: http://bohemiancoding.com/sketch/
[unsplash]: http://unsplash.com/
