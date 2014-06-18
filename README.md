# scilifelab.github.io [![Build Status](https://travis-ci.org/SciLifeLab/scilifelab.github.io.svg?branch=master)](https://travis-ci.org/SciLifeLab/scilifelab.github.io)

Web portal for open source (research) projects at [SciLifeLab](http://www.scilifelab.se/). The site will feature complete, ready-for-use software along with proper documentation and installation instructions.

Submit a pull request if you have a project that belongs on the list.


## General process overview
The first step will be to get the code.

If you are a collaborator at the SciLifeLab GitHub organization it's easiest if you just clone the repo and if not, fork it.

Once you have the code, create a branch ``/project/my-awesome-project`` to work in and open a pull request at GitHub. You can continue to push changes before merging the code. The pull request can be used for general discussion. To make everything super easy, it is great if you provide some details on the project like links to the public code repository and documentation here as well.

Once you feel OK with the result and the code has been validated to work by lets say 2 other people, we will merge your code and the public site will update automatically.


## Setup (optional)
It is recommended (but not required) to setup [Jekyll][jekyll] so that you can view the resulting website as you compose your project page.

You first need ruby [installed][ruby install] on your system.

Next we install our ruby dependencies.

> If you get file permission errors, prefix the commands with sudo to run as an administrator.

```bash
    $ gem install jekyll
    $ bundle install
    $ cd _sass && bourbon install && cd -
```

> If you get the error `-bash: bundle: command not found` you need install it (`gem install bundle`), then log out and in again

Now you should be prepared to serve the site locally.

```bash
    $ jekyll server --watch
```

The ``--watch`` option will watch for changes to file and recompile the static assets automatically. Quite handy when you are writing your project page or altering SASS files.

See the [Jekyll Documentation](http://jekyllrb.com/docs/installation/) for more information.


## Adding a project page
Each project page is defined in a Jekyll post (markdown + YAML) and optionally a few assets.

#### Step 1: Adding a new project page
To add a new project page to the repository/site do the following.

1. Duplicate the template file

	1. You'll find it in the ``_posts`` directory. Name your copy ``<year>-<month>-<day>-<project name>.markdown``.

2. Edit the YAML properties at the top of the file

3. Special assets (optional)
There are a list of special assets that *optionally* belong to each of the projects. They are all defied in the YAML portion of the project markdown file.

#### Step 2: Project branding
A project icon can be picked as shown by on the list of projects. The easiest solution is picking an icon from one the characters provided in the [Entypo icon font][entypo]. Find your corresponding class name in the [Entypo css file](http://cdn.jsdelivr.net/font-entypo/0.1/dev/entypo.css).

A more flexible solution is to provide your own icon as a ``.png`` or ``.svg`` file. Replace the "icon" key in the post-file for a "icon_img" field and type in the relative path to where you put the image from the "img"-folder. E.g. if you put the file under ``img/my_project/my-icon.png`` you would write:

```yaml
icon_img: my_project/my-icon.png
```

It's highly recommended that you compose a poster image, for example with project logo. Don't worry too much about the file size - ~300-400 KB is totally fine. Bigger is better.

Creating the poster doesn't have to be very difficult. Grab a [public domain][unsplash] [photo][magdeleine] and compose with [Sketch][sketch], Keynote, or Powerpoint.

#### Step 3: Write the body of project page

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

If you are having trouble figuring it out, just take a look at the source for another project page or this README file.

Finally, if you want to use any other assets like images inline with you text you should commit them to the repository. Store them in the ``img`` folder under a separate project directory for sanity.


## Developing SASS
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
[magdeleine]: http://magdeleine.co/
