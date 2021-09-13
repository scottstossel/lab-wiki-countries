import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
            <CountriesList />
          {/* <Route exact path='/' component={CountriesList}>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
