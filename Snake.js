
class Snake {
  constructor(ctx, screenSize) {
    this.size = 20
    this.speedX = 1
    this.speedY = 0
    
    this.context = ctx
    this.screenSize = screenSize

    this.snake = [
      { x: 5, y: 2 },
      { x: 4, y: 2 },
      { x: 3, y: 2 },
    ]

  }

  move(position) {
    if(position == 0) {
      this.snake[position] = { x: this.snake[position].x + this.speedX, y: this.snake[position].y + this.speedY}
    } else {
      this.snake[position] = { x: this.snake[position - 1].x + this.speedX , y: this.snake[position - 1].y + this.speedY}
    }
    
  }
  
  changePosition() {
    document.addEventListener("keydown", (event) => {
      if(event.key == "ArrowUp") {
        this.speedX = 0
        this.speedY = -1
      } else if(event.key == "ArrowDown") {
        this.speedX = 0
        this.speedY = 1
      } else if(event.key == "ArrowLeft") {
        this.speedX = -1
        this.speedY = 0
      } else if(event.key == "ArrowRight") {
        this.speedX = 1
        this.speedY = 0
      }
    })
  }

  crossWall() {
    if(this.snake[0].x*this.size == this.screenSize + this.snake.length*this.size) {
      this.snake[0].x = -1
    }

    if(this.snake[0].x < -1) {
      this.snake[0].x = this.screenSize / this.size
    }

    if(this.snake[0].y*this.size == this.screenSize + this.snake.length*this.size) {
      this.snake[0].y = -1
    }

    if(this.snake[0].y < -1) {
      this.snake[0].y = this.screenSize / this.size
    }
  }
  
  render() {
    this.changePosition()
    this.crossWall()
    this.context.stokeStyle = "black"
    this.context.fillStyle = "white"
    
    for(let i = 0; i < this.snake.length; i++) {
      this.move(i)
      this.context.fillRect(this.snake[0].x*this.size, this.snake[0].y*this.size, this.size, this.size)
      this.context.strokeRect(this.snake[0].x*this.size, this.snake[0].y*this.size, this.size, this.size);
    }
  }

}


