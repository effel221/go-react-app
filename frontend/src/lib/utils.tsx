import {KeyboardEvent} from "react";
import {setCardsValue} from "../stores/cardsStore";
import {CardInterface} from "./interfaces";
import {AppDispatch} from "./store";
import {SelectedCardDataType} from "./types";


export const onEnterSpaceDown = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
        callback()
    }
}

export const formatData = (cardData:CardInterface[], selectedCardData: SelectedCardDataType) => {
    return cardData.map((item:CardInterface)=>({
        ...item,
        selected: item.realName === selectedCardData?.realName
    })) || [];
}

export const sortingAct = async (url: string, dispatch: AppDispatch, selectedCardData: SelectedCardDataType) => {
    const response = await fetch(`${url}`);
    const cards = await response.json();
    const formattedData = formatData(cards, selectedCardData)
    dispatch(setCardsValue(formattedData))
}
