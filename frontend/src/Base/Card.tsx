import {CardInterfaceWithSelected, CardPropsInterface} from "../lib/interfaces";
import {useAppDispatch} from "../lib/hooks";
import {setCardsValue, setCurrentCardValue} from "../stores/cardsStore";
import {onEnterSpaceDown} from "../lib/utils";
import {KeyboardEventHandler} from "react";


const Card = ({card, currentCardData}:CardPropsInterface) => {
    const dispatch = useAppDispatch();
    const { realName, playerName, asset, selected} = card;
    const setSelectedCard = () => {
        const updatedCurrentCardData:CardInterfaceWithSelected[] = currentCardData && currentCardData.map(item=>({
            ...item,
            selected: item.realName === card?.realName
        })) || [];
        dispatch(setCardsValue(updatedCurrentCardData))
        dispatch(setCurrentCardValue(card))
    }
    const onKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, setSelectedCard)
    return (
        <li className={"card" + (selected ? '-selected' : '')}
            onClick={setSelectedCard}
            onKeyDown={onKeyDown}
            tabIndex={0}>
            <article>
                <p><strong>Real name:</strong> {realName}</p>
                <p><strong>Player name:</strong> {playerName}</p>
                <p><strong>Asset:</strong> {asset}</p>
            </article>
        </li>
    );
}

export default Card;
