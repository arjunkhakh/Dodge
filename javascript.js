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
        var randomHeight = Math.random() * 40

        var ObstacleLeft = 60
        var ObstacleBottom = randomHeight

        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.append(obstacle)

        obstacle.style.left = ObstacleLeft + "%"
        obstacle.style.bottom = ObstacleBottom + "%"
    
        function moveObstacle() {
            ObstacleLeft -=0.2
            obstacle.style.left = ObstacleLeft + '%'

            if (ObstacleLeft === 0){
                clearInterval(timerId2)
                gameDisplay.removeChild(obstacle)
            }
        }
        let timerId2 = setInterval(moveObstacle, 20)
    }
    generateObstacle()
})

// https://youtu.be/8xPsg6yv7TU?t=4196