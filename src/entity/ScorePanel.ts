export class ScorePanel {

  score: number = 0
  level = 1
  scoreElement: HTMLElement
  levelElement: HTMLElement

  private maxLevel: number
  private upScore: number

  constructor(maxLevel: number = 10, upScore: number = 5) {

    this.scoreElement = document.getElementById('point')!
    this.levelElement = document.getElementById('level')!

    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore() {
    this.score++
    this.scoreElement.innerHTML = this.score + ''


    if (this.score % this.upScore === 0) {
      this.addLevele()
    }
  }

  addLevele() {
    this.level++

    if (this.level < this.maxLevel) {
      this.levelElement.innerHTML = this.score + ''
    }

  }
}