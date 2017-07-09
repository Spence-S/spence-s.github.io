---
layout: post
title: "Responsive CSS Vertical Timeline with Bootstrap 4"
date: 2017-06-10
---

# Creating the CSS timeline

I felt my CSS skills could use a boost and making the nice timeline that you
can see on my about page was a fun challenge and getting lots of practice with
child and pseudo CSS selectors! This will be a nice design oriented post that will
show how you can use bootstraps responsive media-breakpoints and built in responsive
design to get a nice timeline that doesn't scrunch down and look super ugly on
mobile devices.  

## Getting setup and assumptions

First things first! We need to have bootstrap installed in a project on our local machine.
We cannot use the CDN for this project because we will be needing access to a handful
of bootstrap 4s sass variables. This is not 100% nescesarry as you could write your
media queries by hand, however, I like using bootstraps and will not be covering that. I also assume you have a bit of familiarity with bootstrap, but if not
its pretty simple to learn.

``` terminal
  npm install bootstrap@4
```
I am not going to cover how to preprocess your scss files here. If you are interested
in implementing a front end build process, I have some articles on using both
gulp and webpack (coming soon!) to accomplish this. Here we assume you have your
own method to turn your .sass and .scss into .css files.

Get your project setup, in whatever way you'd like. It doesn't matter. You could
even use this in a front end framework like react or vue as long as you have access to bootstrap
classes and your custom css file.

## HTML Structuring

First off, lets get a nice bootstrap layout going. We can get an idea of what we
are going to be building nicely just by seeing the HTML.

``` html
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-12">
        <div class="timeline">
          <div class="timeline-item">
            <!-- Timeline Content Here -->
          </div>
          <div class="timeline-item">
            <!-- Next timeline Content Here -->
          </div>
        </div>
      </div>
    </div>
  </div>
```
Alright. Well that did basically nothing, but it did give us an idea of what we will be buildign and how we will be building it. We basically have a nice
bootstrap layout and our timeline and timeline-items are going to be completely custom css classes that we are going to build.

hokay!

## Making the timeline

Ok! Now we are at the fun cool css part where we get to use a lot of cool pseudo elements. The approach is this: our custom css lays out the timeline in our own defined custom positions, and we use bootstrap to layout the positions of the content around our custom components. Whoo, kind of a mouth full!

Let's get going:

``` scss
.timeline {
  position: relative;
}
```
First we will layout the time, which needs a relative position. This is to help us align both itself with the page, and because we need the relative position for our absolutely positioned pseudo elements which we will look at it in a minute.

We will use a ::before selector to "draw" the main horizontal line of our timeline. This is standard. We could just as easily use an ::after selector since it will be absolutely positioned anyway, outside of the "normal" flow of the page.

We need to give it the aboslute position we already mentioned, but before that
we need to define a content element with nothing in it because all ::before or ::afters need the content to show up. We will go ahead and give it width of 3px.
I like 3 px, its a nice width that looks good on all screen sizes, but if you want your timeline to get a little thinner with screen size, you can certainly use a percentage, em, or rem of your liking. We will give it a nice background color of grey, and use our absolute positioning to move it to the middle of the screen. Now, because we gave it a three pixel width, we need to move back just a little to the left to compensate. 1.5 pixels to be exact. Let's do this with
a negative margin-left. let's go!


``` scss
    .timeline {
      position: relative;
      // main horizontal line
      &::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background-color: grey;
        left: 50%;
        margin-left: -1.5px;
      }

    }
```

Sweet line bro! Wait... nothing is showing up? Add a little content to your timeline items (any filler content will do), and wahlah our nice little line, chillin in the middle of anything that gets wrapped in our timeline class.


## Timeline Items and Cool Little Circle Thingys

Alright, Well we've got the main part out of the way but it's kind of plain. Just a line. Nothing too special. Let's make it a bit more flashy.

First, let's add a couple of cute little dots that will sit on the line, beside
our content. Sound good? Good.

``` scss
    // timeline wrapper
    .timeline {
      position: relative;
      // main horizontal line
      &::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background-color: grey;
        left: 50%;
        margin-left: -1.5px;
      }

      // timelime item: notice it is still wrapped by the timeline in the scss!  
      .timeline-item
      position: relative;
      &::before, &::after{
        position:absolute;
        width: 1rem;
        height: 1rem;
        border: solid 3px grey;
        border-radius: 50%;
        background-color: grey;
        left: 50%;
        bottom: -2rem;
      }
    }
```

Alright, alright! We now have a couple circles just hanging out and chillin beside out timeline-items. But we want more! More it better. Let's get set up a span element selector that renders us a couple more!

``` scss
// timeline wrapper
.timeline {
  position: relative;
  // main horizontal line
  &::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: grey;
    left: 50%;
    margin-left: -1.5px;
  }
  // timelime item: notice it is still wrapped by the timeline in the scss!  
  .timeline-item
    position: relative;
    &::before, &::after {
      position:absolute;
      width: 1rem;
      height: 1rem;
      border: solid 3px grey;
      border-radius: 50%;
      background-color: grey;
      left: 50%;
      top: 2rem;
    }
    span {
      &::before {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        border: solid 3px grey;
        border-radius: 50%;
        background-color: white;
        left:50%;
        bottom: 60%;
        margin-left: -.5rem;
      }
      // large gray outlined circle
      &::after {
        content: "";
        position: absolute;
        width: 2rem;
        height: 2rem;
        border: solid 3px grey;
        border-radius: 50%;
        background-color: white;
        left:50%;
        top: 50%;
        margin-left: -1rem;
      }
    }
  }
}
```

Here we take the span element and render some absolutely positioned before and after pseudo elements of different sizes.
These elements will now always render beside the content and centered to it.


## Responsiveness and Content placement

Here is where bootstrap comes in to play! Here we take the bootstrap responsive columns and position them around the timeline we just drew with CSS.

``` html
<div class="container-fluid">
<div class="row mt-3 white">
  <div class="col-12">
    <div class="timeline">
      <div class="timeline-item">
        <span></span>
        <div class="col-12 col-md-6 text-right p-5">
          <h3>HEADER CONTENT</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida accumsan laoreet. Donec facilisis condimentum pharetra. Phasellus enim mi, elementum ac sagittis eu, consequat sed tellus. Nunc consectetur ornare aliquet. Praesent vel dui a erat sollicitudin viverra eu tempor ipsum. Etiam eget blandit metus, quis cursus augue. Fusce leo justo, lobortis blandit laoreet vitae, porttitor ac nunc. Quisque et tincidunt neque. Nulla facilisis vehicula rhoncus. Mauris at varius lectus, vel feugiat mi. Sed ac mi feugiat felis condimentum elementum.
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
```

``` html
<div class="container-fluid">
<div class="row mt-3 white">
  <div class="col-12">
    <div class="timeline">
      <div class="timeline-item">
        <span></span>
        <div class="col-12 col-md-6 text-right p-5">
          <h3>HEADER CONTENT</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida accumsan laoreet. Donec facilisis condimentum pharetra. Phasellus enim mi, elementum ac sagittis eu, consequat sed tellus. Nunc consectetur ornare aliquet. Praesent vel dui a erat sollicitudin viverra eu tempor ipsum. Etiam eget blandit metus, quis cursus augue. Fusce leo justo, lobortis blandit laoreet vitae, porttitor ac nunc. Quisque et tincidunt neque. Nulla facilisis vehicula rhoncus. Mauris at varius lectus, vel feugiat mi. Sed ac mi feugiat felis condimentum elementum.
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
```
