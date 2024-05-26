import React from 'react';
import {getCurrentCard} from "../stores/cardsStore";
import {useAppSelector} from "../lib/hooks";

const Details: React.FunctionComponent = () => {
  const selectedCardData = useAppSelector(getCurrentCard)
  return (
     <section>
         <h2 id="cards-details">Details</h2>
         {selectedCardData && <ul>
           <li><strong>Real name:</strong> {selectedCardData.realName}</li>
           <li><strong>Player name:</strong> {selectedCardData.playerName}</li>
           <li><strong>Asset:</strong> {selectedCardData.asset}</li>
         </ul>}
     </section>
  );
}

export default Details;

