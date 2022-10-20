const canvas = document.getElementById("screen")

const context = canvas.getContext("2d")


const snake = new Snake(context)



function game() {
  context.fillStyle = "#000"
  context.fillRect(0, 0, canvas.clientWidth, canvas.height)

  snake.render()
}


setInterval(game, 60)
