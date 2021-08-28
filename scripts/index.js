var hoverElements = document.getElementsByClassName("rainbow");
// console.log(hoverElements)

for (var i = 0; i < hoverElements.length; i++) {
  hoverElements[i].addEventListener("mouseover", function hoverHandler(e) {
    // console.log(this.className)
    // console.log(e.currentTarget === this)
    currEl = e.currentTarget;
    colorPick(currEl);
  });
}

function colorPick(el) {
  var colors = [
    "RGB(51, 255, 0)", //green
    "RGB(102, 0, 255)", //indigo
    "RGB(204, 0, 255)", //purple
    "RGB(255, 255, 0)", //yellow
    "RGB(255, 153, 0)", //orange
    "RGB(255, 0, 102)", //magenta
    "RGB(0, 255, 255)", //cyan
    "RGB(0, 51, 255)", //blue
  ];

  var random_color = colors[Math.floor(Math.random() * colors.length)];

  el.style.setProperty("--accentTest", random_color);
}
