---
layout: post
title: "First Post!"
date: 2014-04-30
---

### About <del>damn</del> time!!

Getting this site up is something I have been putting off for a while. I haven't put it off because I didn't want to work on it, but I just feel like it is hard to find the time to really get into a new project, and although this site may be a bit technically ambitious than some other things I am working on, it can still be a bit time consuming coming up with something I want to show off! Besides, I am a notorious perfectionist. It is something I am actively fighting against at the moment. Perfect isn't always the best when it comes to software. Sometimes you just have to ship it!

### A little about the site

The site is built on bootstrap 4. It was my first time working with bootstrap 4 and although it is similar to 3, there are plenty of tiny differences that made working with it a bit slower. Working with the new version has definitely been something I've wanted to mark off my list! As I progress through getting this site up and running as both my personal/development blog and as a portfolio to show off my projects and possibly get that ever nearing first dev job (fingers crossed), I am excited to get to work more with flex-box.

### Javascript

I don't really work with jQuery all that much, and I wanted to make this sight really jquery and css focused. I plan on making some heavy customizations to bootstrap as time progresses as well. Luckily, it looks like bootstrap 4 is going to be much better suited for heavy customization, as well as much more customized layouts with flex-box. I love flex-box. It took me a bit to catch on, but now that I have been working with it a bit, it just feels much more intuitive.

I made the site with a cool little library that works nicely with jquery called [typed.js](https://github.com/mattboldt/typed.js) by mattboldt. This allowed me to quickly get a typing effect going in the css terminal I made above. The stock cursor in typed didn't render correctly with the font I was using and looked awful (even when I changed the cursor char). I instead added my own cursor element and got to implement a little jquery magic on it and it turned out to look pretty nice.

I got to use some es6 arrow functions and template literals just to be fancy. :nail_care:

```javascript
const path = window.location.pathname; // returns the page name
  function typer() {
    $("#typertext")
      .typed({
        strings: [`cd /spencer${path} ^400`],
        typeSpeed: 70,
        showCursor: false,
        callback: () => {
          $('#fintext').html(`<h6 class="text-left text-black text-nowrap">~/spencer${path} $: <span id="cursor">_</span></h6>`);
        }
      });
  };
  window.onload = typer;
  //cursor blink effect
  setInterval(() => {
    $('#cursor').toggleClass("invisible")
  }, 800)
```

** insert GIF here **

The CSS has taken me a lot longer. A few hours of customization. That is expected. I am much weaker with css than I am with javascript. Overtime, I hope to add to this site and make it a full fledged blog built with jekyll on github.io and use it as a playground to really get significantly better with design, jquery, and css and flex-box.
