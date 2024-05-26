import {CardPropsInterface} from "../lib/interfaces";
import {useAppDispatch} from "../lib/hooks";
import {setCurrentCardValue} from "../stores/cardsStore";
import {onEnterSpaceDown} from "../lib/utils";
import {KeyboardEventHandler} from "react";


const Card = ({card}:CardPropsInterface) => {
    const dispatch = useAppDispatch();
    const { realName, playerName, asset} = card;
    const setSelectedCard = () => dispatch(setCurrentCardValue(card))
    const onKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, setSelectedCard)
    return (
        <li onClick={setSelectedCard} onKeyDown={onKeyDown} tabIndex={0}>
            <p>{realName}</p>
            <p>{playerName}</p>
            <p>{asset}</p>
        </li>
    );
}

export default Card;
