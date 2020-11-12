var hoverElements = document.getElementsByClassName('rainbow')
// console.log(hoverElements)

for (var i=0; i<hoverElements.length; i++ ){
    hoverElements[i].addEventListener('mouseover', function hoverHandler(e){
        // console.log(this.className)
        // console.log(e.currentTarget === this)
        currEl= e.currentTarget
        colorPick(currEl)
    })
}

function colorPick(el){
    var colors =[
        '#E95D25',
        '#692B81',
        '#E51D27',
        '#FFF047',
        '#E51956',
        '#28A3DE',
        '#049848',
        '#EE99C0',
    ]

    var random_color = colors[Math.floor( 
        Math.random() * colors.length)]

    el.style.setProperty('--accentTest', random_color)
}