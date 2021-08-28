var photo = document.getElementById("my-photo");
var about = document.getElementById("about");

// CSS var & random info: https://css-tricks.com/random-numbers-css/

function colorPick() {
  var elem = this;

  var colors = [
    "rgba(204, 255, 0, 0.5)", //green
    "rgba(102, 0, 255, 0.5)", //indigo
    "rgba(204, 0, 255, 0.5)", //purple
    "rgba(255, 255, 0, 0.5)", //yellow
    "rgba(255, 153, 0, 0.5)", //orange
    "rgba(255, 0, 204, 0.5)", //magenta
    "rgba(0, 255, 255, 0.5)", //cyan
    "rgba(0, 51, 255, 0.5)", //blue
  ];

  var random_color = colors[Math.floor(Math.random() * colors.length)];

  elem.style.setProperty("--accent", random_color);
}

// Event listener info: https://www.sitepoint.com/css3-animation-javascript-event-handlers/

function colorize(el) {
  // el.style.background = `linear-gradient(135deg, ${colorPick()},rgba(255, 255, 255, 0.5))`;
  // el.style.background = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.9)), url(./assets/PngItem_5133914.png)`;
  el.setAttribute("class", "container glow");
  el.addEventListener("animationstart", colorPick, false);
  el.addEventListener("animationiteration", colorPick, false);
}

function decolorize(el) {
  // el.style.background = "rgba(255, 255, 255, 0.5)";
  el.setAttribute("class", "container");
}

/**
 * inViewport jQuery plugin by Roko C.B.
 * http://stackoverflow.com/a/26831113/383904
 * Returns a callback function with an argument holding
 * the current amount of px an element is visible in viewport
 * (The min returned value is 0 (element outside of viewport)
 */
(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var elH = $(el).outerHeight(),
          H = $(win).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(
          el,
          Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H))
        );
      }
      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
})(jQuery, window);

$("#about").inViewport(function (px) {
  // console.log(px);
  if (px > $(this).outerHeight() / 2) {
    document
      .getElementById("my-photo")
      .setAttribute("src", "assets/casual-profile-removebg.png");
  } else {
    document
      .getElementById("my-photo")
      .setAttribute("src", "assets/casual-profile-bw.jpg");
  }
});

$("#about, #projects, #contact-etc").inViewport(function (px) {
  // console.log(px);
  if (
    px > $(this).outerHeight() / 2 ||
    ($(this).outerHeight() > $(window).height() &&
      px > $(this).outerHeight() / 4)
  ) {
    colorize(this);
  } else {
    decolorize(this);
  }
});
