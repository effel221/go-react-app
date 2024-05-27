import './CardsOverview.css'
import {getCardsValue} from "../stores/cardsStore";
import Card from "../Base/Card";
import {useAppSelector} from "../lib/hooks";


const CardsOverview = () => {
  const serverCardData = useAppSelector(getCardsValue) || [];

  return (
     <section className={"cards-overview"}>
        <h2>Overview</h2>
        <p className={"cards-overview-caption"}>* Information about selected card will appear in Details
            after click on this card.</p>
         {serverCardData && serverCardData.length > 0 && <ul
           className={"cards-overview-list"}
           aria-labelledby="cards-overview">
             {serverCardData.map((card) => <Card
                 card={card}
                 key={card.realName}
                 currentCardData={serverCardData}
             />)}
        </ul>}
         {!serverCardData || serverCardData.length === 0 && <p> No data provided</p>}
     </section>
  );
}

export default CardsOverview;

