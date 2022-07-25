document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    var birdLeft = 25
    var birdBottom = 50
    var gravity = 2

    function gameStart() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + '%'
        bird.style.left = birdLeft + '%'
    }
    gameStart()
})