---
layout: project
title: Spence-S.github.io
order: 6
tags:
  - Jekyll Rb:
  - Liquid Templates:
  - NodeJS: "http://www.nodejs.org"
  - Bootstrap4: https://v4-alpha.getbootstrap.com/
  - jQuery: https://jquery.com/
  - BarbaJS: http://barbajs.org/
  - particles.js: http://vincentgarreau.com/particles.js/
  - Gulp: gulpjs.com
  - Sass: http://sass-lang.com/
  - CSS3: https://developer.mozilla.org/en-US/docs/Web/CSS
Demo: 'http://spence-s.github.io/portfolio'
githubUrl: "https://github.com/Spence-S/spence-s.github.io"
---

This website was built very quickly, but a lot of love was still poured into the development.
The site was built on the Jekyll static site generator, which is natively supported
by github pages. This means you can just push your code without needing to first bundle
a production build! As long as everything is configured correctly, git hub will handle that
for you!

Unfortunately, I am never satisfied with something until it is completely customized and I
needed a good excuse to make a gulp file. I used node to bundle and develop the js and
serve all the libraries I use from an uglified minified file, which really helps speed
the site up. The site is totally responsive, and although it is build on Bootstrap4
most components underwent a good amount of customization.

Much of the site utilizes liquid templates to quickly make nice lists, and give me
an easy job of adding content and writing it all in markdown. Thanks Jekyll!
