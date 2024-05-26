import {useAppDispatch, useAppSelector} from "../lib/hooks";
import {getCurrentCard, setCardsValue} from "../stores/cardsStore";
import {serverUrl} from "../../config";
import {KeyboardEventHandler} from "react";
import {onEnterSpaceDown} from "../lib/utils";

const Controls = () => {
  const dispatch = useAppDispatch();
  const selectedCardData = useAppSelector(getCurrentCard);
  const sortAsc = async () => {
      const response = await fetch(`${serverUrl}/getCardsSorted`);
      const cards = await response.json();
      dispatch(setCardsValue(cards))
  }
  const onSortAscKeyDown:KeyboardEventHandler = (e) => onEnterSpaceDown(e, sortAsc)
  const sortDesc = async () => {
      const response = await fetch(`${serverUrl}/getCardsSorted?sort=desc`);
      const cards = await response.json();
      dispatch(setCardsValue(cards))
  }
  const submit = async () => {
      const response = await fetch(`${serverUrl}/postCard`,{
          method: "POST",
          body: JSON.stringify(selectedCardData)
      });
      console.log(await response.json())
  }
  return (
     <section>
         <h2>Controls</h2>
         <button onKeyDown={onSortAscKeyDown} onClick={sortAsc}>Sort Asc</button>
         <button onKeyDown={onSortAscKeyDown} onClick={sortDesc}>Sort Desc</button>
         <button onClick={submit}>Submit</button>
     </section>
  );
}

export default Controls;

