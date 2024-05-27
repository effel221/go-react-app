export interface CardInterface {
    realName: string,
    playerName: string,
    asset: string
}

export interface CardInterfaceWithSelected extends CardInterface {
   selected?: boolean
}

export interface CardPropsInterface {
   card: CardInterfaceWithSelected
}

export interface CardStoreInterface {
    cards: CardsSliceInterface
}

export interface CardsSliceInterface {
    cardsValue: CardInterface[] | [],
    currentCard: CardInterface | null
}
