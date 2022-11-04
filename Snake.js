const gameOver = document.getElementById("gameover")
class Snake {
  constructor(ctx, screenSize) {
    this.size = 20
    this.speedX = 0
    this.speedY = 0
    
    this.positionX = 4
    this.positionY = 2
    
    this.tail = []
    this.tailSize = 1

    this.context = ctx
    this.screenSize = screenSize

    this.pause = false
  }

  
  move() {
    this.positionX = this.positionX + this.speedX
    this.positionY = this.positionY + this.speedY
  }
  
  keyPressed() {
    
    document.addEventListener("keydown", (event) => {
      if(!this.pause) {
        if(event.key == "ArrowUp" && this.speedY != 1) {
          this.speedX = 0
          this.speedY = -1
        } else if(event.key == "ArrowDown" && this.speedY != -1) {
          this.speedX = 0
          this.speedY = 1
        } else if(event.key == "ArrowLeft" && this.speedX != 1) {
          this.speedX = -1
          this.speedY = 0
        } else if(event.key == "ArrowRight" && this.speedX != -1) {
          this.speedX = 1
          this.speedY = 0
        }
      }
      
      gameOver.className = "gameover"
      
    })

  }
  
  crossWall() {
    if(this.positionX*this.size >= this.screenSize) {
      this.positionX = -1
    }
    
    if(this.positionX < -1) {
      this.positionX = this.screenSize / this.size
    }
    
    if(this.positionY*this.size >= this.screenSize) {
      this.positionY = -1
    }
    
    if(this.positionY < -1) {
      this.positionY = this.screenSize / this.size
    }
  }

  eat(apple) {
    if(this.positionX == apple.x && this.positionY == apple.y) {
      this.tailSize++
      
      return true
    }
    
    return false
  }

  colision(position) {
    if(this.tail.length > 0) {
      if(this.tail[position].x == this.positionX && this.tail[position].y == this.positionY) {
        this.pause = false

        return true
      }
    }
  }

  reset() {
    this.positionX = 4
    this.positionY = 2

    this.speedX = 0
    this.speedY = 0
    
    this.tail = []
    this.tailSize = 1
  }

  draw() {
    for(let i = 0; i < this.tail.length; i++) {
      this.context.fillRect(this.tail[i].x * this.size, this.tail[i].y * this.size, this.size, this.size)
      this.context.strokeRect(this.tail[i].x * this.size, this.tail[i].y * this.size, this.size, this.size)
      
      if(this.colision(i)) {
        this.reset()
      }
    }

    this.tail.push({x: this.positionX, y: this.positionY})

    while(this.tail.length > this.tailSize) {
      this.tail.shift()
    }
  }

  render() {
    this.keyPressed()
    this.crossWall()

    this.context.stokeStyle = "black"
    this.context.fillStyle = "white"

    this.move()
    this.draw()
  }

}


