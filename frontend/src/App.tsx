import './App.css'
import CardsOverview from "./CardsOverview";
import Controls from "./Controls";
import Details from "./Details";
import {useDataFetch} from "./lib/useDataFetch";


const App = () => {
  useDataFetch();
  return (
      <div className={"body-wrapper"}>
         <header>
            <Details/>
            <Controls/>
         </header>
         <main role="main">
            <CardsOverview/>
         </main>
      </div>
  );
}

export default App;

