export class Snake {

  head: HTMLElement

  bodys: HTMLCollection

  constructor() {
    this.head = document.querySelector('#snake > div')! as HTMLElement
    this.bodys = document.getElementById("snake")!.getElementsByTagName('div')


  }

  get x() {
    return this.head.offsetLeft
  }

  get y() {
    return this.head.offsetTop
  }



}



