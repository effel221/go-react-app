import './CardsOverview.css'
import {getCardsValue} from "../stores/cardsStore";
import Card from "../Base/Card";
import {useAppSelector} from "../lib/hooks";
import {useDataFetch} from "../lib/useDataFetch";


const CardsOverview = () => {
  useDataFetch();
  const currentCardData = useAppSelector(getCardsValue);
  return (
     <section className={"cards-overview"}>
        <h2>Overview</h2>
        <p className={"cards-overview-caption"}>* Information about selected card in Details after click on this card.</p>
         {currentCardData && currentCardData.length > 0 && <ul
           className={"cards-overview-list"}
           aria-labelledby="cards-overview">
             {currentCardData.map((card) => <Card card={card} key={card.realName} />)}
        </ul>}
     </section>
  );
}

export default CardsOverview;

