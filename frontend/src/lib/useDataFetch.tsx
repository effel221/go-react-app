import {useEffect} from "react";
import {useAppDispatch} from "./hooks";
import {setCardsValue} from "../stores/cardsStore";
import {serverUrl} from "../../config";
import {CardInterface} from "./interfaces";

export const useDataFetch = ()=> {
    const dispatch = useAppDispatch();
    const fetchCardsData = async () => {
        const response = await fetch(`${serverUrl}/getCardsSorted`);
        const cards = await response.json();
        const formattedCardsData = cards.map((card:CardInterface)=>({
            ...card,
            selected: false
        }))
        formattedCardsData.length > 0 && (dispatch(setCardsValue(formattedCardsData)));
    }

    useEffect(() => {
        fetchCardsData()
    }, []);
};
