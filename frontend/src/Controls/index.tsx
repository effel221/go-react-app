import './Controls.css'
import {useAppDispatch, useAppSelector} from "../lib/hooks";
import {getCurrentCard, setCardsValue} from "../stores/cardsStore";
import {serverUrl} from "../../config";
import {KeyboardEventHandler} from "react";
import {onEnterSpaceDown} from "../lib/utils";
import {CardInterface} from "../lib/interfaces";


const Controls = () => {
    const dispatch = useAppDispatch();
    const selectedCardData = useAppSelector(getCurrentCard);
    const formatData = (cardData:CardInterface[]) => {
        return cardData.map((item:CardInterface)=>({
            ...item,
            selected: item.realName === selectedCardData?.realName
        })) || [];
    }
    const sortAsc = async () => {
        const response = await fetch(`${serverUrl}/getCardsSorted`);
        const cards = await response.json();
        const formattedData = formatData(cards)
        dispatch(setCardsValue(formattedData))
    }
    const onSortAscKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, sortAsc)
    const sortDesc = async () => {
        const response = await fetch(`${serverUrl}/getCardsSorted?sort=desc`);
        const cards = await response.json();
        const formattedData = formatData(cards)
        dispatch(setCardsValue(formattedData))
    }
    const onSortDescKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, sortAsc)
    const onSubmit = async () => {
        const response = await fetch(`${serverUrl}/postCard`,{
            method: "POST",
            body: JSON.stringify(selectedCardData)
        });
        console.log(await response.json())
    }
    const onSubmitKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, onSubmit)
    return (
        <aside className={"controls"}>
            <h2>Controls</h2>
            <div className={"controls-sorting"}>
                <button
                    onKeyDown={onSortAscKeyDown}
                    onClick={sortAsc}>
                    Sort Asc
                </button>
                <button
                    className={"controls-sorting-desc"}
                    onKeyDown={onSortDescKeyDown}
                    onClick={sortDesc}>
                    Sort Desc
                </button>
            </div>
            <div className={"controls-submit"}>
               <button onKeyDown={onSubmitKeyDown} onClick={onSubmit}>Submit</button>
            </div>
        </aside>
    );
}

export default Controls;

