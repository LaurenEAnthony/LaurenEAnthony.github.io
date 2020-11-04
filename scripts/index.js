function colorPick(){
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

    var tagId= document.getElementById("intro-name")

    tagId.style.setProperty('--accentTest', random_color)
}

document.getElementById('intro-name').addEventListener('mouseover', colorPick)