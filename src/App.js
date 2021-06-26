import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './scss/main.scss';
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { DetailsPage } from "./pages/DetailsPage";
import { CountriesProvider } from "./contexts/CountriesContext";

const App = () => {
  return (
    <Router>
      <CountriesProvider>
        <Header />
        <Switch>
          <Route path="/:code" component={DetailsPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </CountriesProvider>
    </Router>
  );
}

export default App;
