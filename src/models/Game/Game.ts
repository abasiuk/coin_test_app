import { GameOption } from '@/models/Game/helpers'

export default class Game {
  name: string
  options: GameOption[]

  constructor (name: string, options: GameOption[]) {
    this.name = name
    this.options = options
  }

  get optionsList() {
    return this.options
  }

  get optionsListLength() {
    return this.options.length
  }
  // get random value from options list
  get randomValue() {
    return this.options[this.generateRandomIndex()]
  }
  // generate random index
  generateRandomIndex() {
    return Math.floor((Math.random() * this.optionsListLength))
  }
}
