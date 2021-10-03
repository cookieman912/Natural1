import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "./cmps/AppHeader";
import HomePage from "./pages/HomePage";
import CharacterManager from "./pages/CharacterManager";
import CharacterDetails from "./pages/CharacterDetails";
import Games from "./pages/Games";

function App() {
  return (
    <Router>
      <main>
        <AppHeader />
        <Switch>
          <Route path="/characterManager" component={CharacterManager} />
          <Route path="/games" component={Games} />
          <Route path="/character/:id" component={CharacterDetails} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
