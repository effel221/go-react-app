export interface CardInterface {
    realName: string,
    playerName: string,
    asset: string
}

export interface CardPropsInterface {
   card: CardInterface
}

export interface CardStoreInterface {
    cards: CardsSliceInterface
}

export interface CardsSliceInterface {
    cardsValue: CardInterface[] | [],
    currentCard: CardInterface | null
}
