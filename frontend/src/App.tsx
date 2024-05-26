import './App.css'
import CardsOverview from "./CardsOverview";
import Controls from "./Controls";
import Details from "./Details";


const App = () => {
  return (
     <main role="main">
         <Details/>
         <Controls/>
         <CardsOverview/>
     </main>
  );
}

export default App;

