import "./App.css";
import { Switch, Route } from 'react-router-dom';

import CCMyKitchen from "./ClassComponents/CCMyKitchen";
import CCCreateIngredient from "./ClassComponents/CCCreateIngredient";
import CCCreateRecipe from "./ClassComponents/CCCreateRecipe";
import ENavbar from "./ElementComponents/ENavbar";


const apiUrl="http://localhost:51666/api/";

function App() {
  return (
    <div className="App">
      {ENavbar}
      <Switch>
        <Route exact path="/" >
          <CCMyKitchen apiUrl={apiUrl}/>
        </Route>
        <Route path="/Create/Ingredient">
          <CCCreateIngredient apiUrl={apiUrl}/>
        </Route>
        <Route path="/Create/Recipe" >
          <CCCreateRecipe apiUrl={apiUrl}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
