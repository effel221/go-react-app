import './Controls.css'
import {useAppDispatch, useAppSelector} from "../lib/hooks";
import {getCurrentCard} from "../stores/cardsStore";
import {serverUrl} from "../../config";
import {KeyboardEventHandler} from "react";
import {onEnterSpaceDown, sortingAct} from "../lib/utils";



const Controls = () => {
    const dispatch = useAppDispatch();
    const selectedCardData = useAppSelector(getCurrentCard);

    const sortAsc = async () => sortingAct(`${serverUrl}/getCardsSorted`, dispatch, selectedCardData)
    const onSortAscKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, sortAsc)
    const sortDesc = async () => sortingAct(`${serverUrl}/getCardsSorted?sort=desc`, dispatch, selectedCardData)
    const onSortDescKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, sortDesc)
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
                    type="button"
                    onKeyDown={onSortAscKeyDown}
                    onClick={sortAsc}>
                    Sort Asc
                </button>
                <button
                    className={"controls-sorting-desc"}
                    onKeyDown={onSortDescKeyDown}
                    type="button"
                    onClick={sortDesc}>
                    Sort Desc
                </button>
            </div>
            <div className={"controls-submit"}>
               <button type="button" onKeyDown={onSubmitKeyDown} onClick={onSubmit}>Submit</button>
            </div>
        </aside>
    );
}

export default Controls;

