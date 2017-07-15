$(function() {
  // Don't forget to init the view!

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
      * This function is automatically called as soon the Transition starts
      * this.newContainerLoading is a Promise for the loading of the new container
      * (Barba.js also comes with an handy Promise polyfill!)
      */

      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      );
    },

    fadeOut: function() {
      /**
      * this.oldContainer is the HTMLElement of the old Container
      */

      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      /**
      * this.newContainer is the HTMLElement of the new Container
      * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
      * Please note, newContainer is available just after newContainerLoading is resolved!
      */

      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility: 'visible',
        opacity: 0
      });

      $el.animate({ opacity: 1 }, 300, function() {
        /**
        * Do not forget to call .done() as soon your transition is finished!
        * .done() will automatically remove from the DOM the old Container
        */

        _this.done();
      });
    }
  });

  /**
  * Next step, you have to tell Barba to use the new Transition
  */

  Barba.Pjax.getTransition = function() {
    /**
    * Here you can use your own logic!
    * For example you can use different Transition based on the current page or link...
    */

    return FadeTransition;
  };
  var Homepage = Barba.BaseView.extend({
    namespace: 'homepage',
    onEnter: function() {
      // The new Container is ready and attached to the DOM.

      // scroll reveal for about page
      window.sr = ScrollReveal();
      sr.reveal('.timeline-item');

      // scroll to for all pages
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') ==
              this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
              ? target
              : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate(
                {
                  scrollTop: target.offset().top
                },
                1000,
                function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(':focus')) {
                    // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  }
                }
              );
            }
          }
        });
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  var Posts = Barba.BaseView.extend({
    namespace: 'post',
    onEnter: function() {
      // The new Container is ready and attached to the DOM.
      /**
      *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

      var disqus_config = function() {
        this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };

      (function() {
        // DON'T EDIT BELOW THIS LINE
        var d = document,
          s = d.createElement('script');
        s.src = 'https://spence-s.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  Homepage.init();
  Posts.init();
  Barba.Pjax.start();

  Barba.Dispatcher.on('newPageReady', function(
    currentStatus,
    oldStatus,
    container
  ) {
    var js = container.querySelector('script');
    if (js != null) {
      eval(js.innerHTML);
    }
  });
});
