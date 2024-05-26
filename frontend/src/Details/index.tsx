import React from 'react';
import {getCurrentCard} from "../stores/cardsStore";
import {useAppSelector} from "../lib/hooks";

const Details: React.FunctionComponent = () => {
  const selectedCardData = useAppSelector(getCurrentCard)
  return (
     <section>
         <h2 id="cards-details">Details</h2>
         {selectedCardData && <div aria-hidden="true" aria-labelledby="cards-details">
           <p>{selectedCardData.realName}</p>
           <p>{selectedCardData.playerName}</p>
           <p>{selectedCardData.asset}</p>
         </div>}
     </section>
  );
}

export default Details;

