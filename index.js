const canvas = document.getElementById("screen")

const context = canvas.getContext("2d")

const screenSize = canvas.height


const snake = new Snake(context, screenSize)



function game() {
  context.fillStyle = "#000"
  context.fillRect(0, 0, screenSize, screenSize)

  snake.render()
}


setInterval(game, 60)
