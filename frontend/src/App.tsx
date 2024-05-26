import './App.css'
import CardsOverview from "./CardsOverview";
import Controls from "./Controls";
import Details from "./Details";
import {useDataFetch} from "./lib/useDataFetch";


const App = () => {
    useDataFetch();
  return (
     <main role="main">
         <Details/>
         <Controls/>
         <CardsOverview/>
     </main>
  );
}

export default App;

