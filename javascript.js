document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    var birdLeft = 25
    var birdBottom = 50
    var gravity = 0.5

    function gameStart() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + '%'
        bird.style.left = birdLeft + '%'
    }

    let timerId = setInterval(gameStart, 20)
    
    // SpaceBar Jump
    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }
    
    function jump() {
        if (birdBottom < 81) {
            birdBottom += 20
            bird.style.bottom = birdBottom + "%"
        }
        console.log(birdBottom)
    }

    document.addEventListener('keyup', control)

    function generateObstacle() {
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.append(obstacle)
    }
    generateObstacle()
})