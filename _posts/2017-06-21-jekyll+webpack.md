---
layout: post
title: "Using Jekyll with Webpack"
date: 2017-06-21
---

When I took the task of actually building a out a personal website and blog, I was surprisingly
dumbfounded on what to do. I had built websites in the past and gone through the whole
nine yards, but those I didn't have to make **all** the decisions. This was now going
to be **my** site and I wanted something that was more developer focused than wordpress,
but also easy and elegant. Quickly, my old github pages site came to mind.

Without going into the nitty gritty, Github provides a lot of quality in their ability
to publish a personal website with github pages, and I liked what I saw a lot. I also
really enjoyed laying out the project in jekyll format. It was nice. But Jekyll felt
like it was missing a lot for me.

When I started introducing my own build tooling in javascript, things got really fun.

I haven't seen a lot of other well written and thorough write ups, at least any that I liked, on using webpack with Jekyll, so I thought I would give it a shot.

Since webpack JUST dropped v3 and have an AWESOME new tool that is totally undocumented. I thought
I'd take a stab with it and write up my thoughts. I wanted to see how it would perform in a variety of
ways, so I could really get the hang of it, and hopefully open soure my generator for others
to use in their jekyll setups.

## Intro to webpack-cli

Webpack-cli is a totally seperate package from Webpack. Even though Webpack has its own minimalistic CLI, this is not the same. webpack-cli was built primarily, from what I can tell, as a migration tool for those upgrading from webpack v1 to webpack v2. Now, it is also being used to introduce the new `webpack-cli init` functionality. It is this functionality that I really wanted to explore and write up.

The tl;dr version of webpack-cli is this: type webpack-cli init into your terminal, answer a series of questions, and boom, get a functional scaffold of a webpack config ready to go! That
is a big promise for a library/api that is notoriously hard to understand and confusing to setup.

This confusion and complexity around set up is why I have shyed away from webpack in favor of other
build tools. But there is a time for everything, and with some opintionated layouts, webpack should
be MUCH easier to learn.

*Note that the webpack 2 docs were an improvement over webpack 1, but make no mistake,
webpack is still not beginner friendly at all. It is highly fragmented and totally unopinionated which
makes it **VERY** hard to initially pick up*

## Getting started

#### Why use a build step at all??

Before doing anything too crazy, I had to revisit why I wanted to introduce my own build
set up in the first place. After all, Jekyll builds your site for you so you don't have to
worry about all that mess. That is why it is nice. However, it lacks control, and makes it  
hard to perform certain steps that any good web developer would want to take to optimize their
builds, provide more functionality, make things easy...etc..

The first reason that came to mind was that I wanted to use bootstrap 4, I wanted to
provide custom sass variable overrides, so I needed it in my build and it would not be optimal
to get from the CDN. I don't know ruby and don't care to learn it, so my options were to download the
bootstrap files, place them in my jekyll \_sass folder and use jekyll to compile the sass to css.

This wouldn't be too bad of an option except that bootstrap 4 needs its own buildstep as it
provides no out of the box vendor prefixing. So somehow, we needed to process these files,
but that is something that is out of the scope of jekyll. (ok... it actually *may* be in the scope of
jekyll and ruby at large, but its not something jekyll can do out of the box or with github pages.) Since I know JS, I wanted a JS solution to the problem. 
