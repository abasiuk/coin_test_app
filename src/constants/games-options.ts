import { GameOption } from '@/models/Game/helpers'

enum CardSuitEnum {
  hearts = 'hearts',
  diamonds = 'diamonds',
  clubs = 'clubs',
  spades = 'spades'
}

enum CardHigherEnum {
  jack = 'Jack',
  queen = 'Queen',
  king = 'King',
  ace = 'Ace'
}

export const coinOptions: GameOption[] = [
  {
    id: 0,
    title: 'Head'
  },
  {
    id: 1,
    title: 'Tail'
  }
]

export const cubeOptions: GameOption[] = [
  {
    id: 0,
    title: '1'
  },
  {
    id: 1,
    title: '2'
  },
  {
    id: 2,
    title: '3'
  },
  {
    id: 3,
    title: '4'
  },
  {
    id: 4,
    title: '5'
  },
  {
    id: 5,
    title: '6'
  }
]

const cardSuits = [CardSuitEnum.hearts, CardSuitEnum.diamonds, CardSuitEnum.clubs, CardSuitEnum.spades]
const lowerCards = new Array(9).fill(null).map((emptyVal, index) => `${index + 2}`)
const higherCards = [CardHigherEnum.jack, CardHigherEnum.queen, CardHigherEnum.king, CardHigherEnum.ace]

const cardValues = [
  ...lowerCards,
  ...higherCards
]

export const cardOptions: GameOption[] = [
  ...cardSuits.reduce((acc: GameOption[], suit, currentIndex) => {
    return [
      ...cardValues.map((value, valueIndex) => ({
        title: `${value} of ${suit}`,
        id: currentIndex * cardValues.length + valueIndex
      })),
      ...acc
    ]
  }, [])
]
