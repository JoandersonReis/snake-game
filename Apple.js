

class Apple {
  constructor(ctx, screenSize) {
    this.context = ctx
    this.screenSize = screenSize

    this.positionX = 15
    this.positionY = 15
    this.size = 20
  }

  changePosition() {
    this.positionX = parseInt(Math.random() * (this.screenSize/ this.size))
    this.positionY = parseInt(Math.random() * (this.screenSize / this.size))
  }

  draw() {
    this.context.strokeStyle = "black"
    this.context.fillStyle = "#EB0F36"
  
    this.context.fillRect(this.positionX*this.size, this.positionY*this.size, this.size, this.size)
    this.context.strokeRect(this.positionX*this.size, this.positionY*this.size, this.size, this.size)
  }

  render() {
    this.draw()
  }
}