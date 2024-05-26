import {useEffect} from "react";
import {useAppDispatch} from "./hooks";
import {setCardsValue} from "../stores/cardsStore";
import {serverUrl} from "../../config";

export const useDataFetch = ()=> {
    const dispatch = useAppDispatch();
    const fetchCardsData = async () => {
        const response = await fetch(`${serverUrl}/getCardsSorted`);
        const cards = await response.json();
        cards.length > 0 && (dispatch(setCardsValue(cards)));
    }

    useEffect(() => {
        fetchCardsData()
    }, []);
};
