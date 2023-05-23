import { GameType } from '@/models/Game/helpers'
import Game from '@/models/Game/Game'
import { cardOptions, coinOptions, cubeOptions } from '@/constants/games-options'

interface GameTab {
  title: string
  value: GameType
  game: Game
}

// to add game, create new item in the map with unique name and set GameOptions[]
export const gamesList = new Map<GameType, GameTab>([
  [GameType.coin, {
    title: 'Coin',
    value: GameType.coin,
    game: new Game('Coin', coinOptions)
  }],
  [GameType.cards, {
    title: 'Cards',
    value: GameType.cards,
    game: new Game('Cards', cardOptions)
  }],
  [GameType.cube, {
    title: 'Cube',
    value: GameType.cube,
    game: new Game('Cube', cubeOptions)
  }]
])
