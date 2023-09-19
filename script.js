//setup the canvas
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

/**make the canvas always fill the screen**/;
(function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    window.onresize = resize
})()

//for this code (as in code before this line), I almost always use the same stuff, so its going to stay here

//create the score
let score = 0

    //the render loop
    ;
(function render() {

    //clear the screen
    ctx.fillStyle = 'rgb(0,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //draw the button
    let r = Math.floor(canvas.width, canvas.height) / 3
    ctx.fillStyle = 'rgb(0,100,0)'
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, r, 0, Math.PI * 2)
    ctx.fill()

    //render the score
    ctx.fillStyle = 'rgb(255,255,255)'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = '50px arial'
    ctx.fillText(`Current score: ${score}`, canvas.width / 2, canvas.height / 2 - 25)
    ctx.fillText(`Chance of reset: %${score}`, canvas.width / 2, canvas.height / 2 + 25)


    requestAnimationFrame(render)
})()

//check for clicks
document.addEventListener('click', e => {
    if (Math.random() < score / 100)
        score = 0
    else score++
})