const canvas = document.getElementById("screen")

const context = canvas.getContext("2d")

const screenSize = canvas.height

const snake = new Snake(context, screenSize)
const apple = new Apple(context, screenSize)


function game() {
  context.fillStyle = "#262626"
  context.fillRect(0, 0, screenSize, screenSize)

  apple.render()
  snake.render()


  if(snake.eat({
    x: apple.positionX,
    y: apple.positionY
  })) {
    apple.changePosition()
  }
}

setInterval(game, 90)
