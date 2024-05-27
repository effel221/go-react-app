import {getCardsValue} from "../stores/cardsStore";
import Card from "../Base/Card";
import {useAppSelector} from "../lib/hooks";
import {useDataFetch} from "../lib/useDataFetch";


const CardsOverview = () => {
  useDataFetch();
  const currentCardData = useAppSelector(getCardsValue);
  return (
     <section>
        <h2>Overview</h2>
         {currentCardData && currentCardData.length > 0 && <ul aria-label="cards-overview">
             {currentCardData.map((card) => <Card card={card} key={card.realName} />)}
        </ul>}
     </section>
  );
}

export default CardsOverview;

