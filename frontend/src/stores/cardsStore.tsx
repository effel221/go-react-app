import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardInterface, CardsSliceInterface, CardStoreInterface} from "../lib/interfaces";


const initialState: CardsSliceInterface = {
    cardsValue: [],
    currentCard: null
};

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        setCardsValue: (state: CardsSliceInterface, action: PayloadAction<CardInterface[]>) => {
            state.cardsValue = action.payload;
        },
        setCurrentCardValue: (state: CardsSliceInterface, action: PayloadAction<CardInterface>) => {
            state.currentCard = action.payload;
        },
    }
});

export const { setCardsValue, setCurrentCardValue } = cardsSlice.actions;

export const getCardsValue = (state: CardStoreInterface) => state?.cards?.cardsValue;
export const getCurrentCard = (state: CardStoreInterface) => state?.cards?.currentCard;

export default cardsSlice.reducer;
