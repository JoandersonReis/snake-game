
class Snake {
  constructor(ctx) {
    this.size = 20
    this.speedX = 0
    this.speedY = 0

    this.context = ctx
    this.snake = [
      { x: 5, y: 2 },
      { x: 4, y: 2 },
      { x: 3, y: 2 },
    ]

  }

  move(position) {
    this.snake[position] = { x: this.snake[position].x + this.speedX,  y: this.snake[position].y}
  }

  render() {
    this.context.fillStyle = "white"
    this.speedX = 1

    for(let i = 0; i < this.snake.length; i++) {
      this.move(i)
      this.context.fillRect(this.snake[i].x*this.size, this.snake[i].y*this.size, this.size, this.size)
    }
  }

}


