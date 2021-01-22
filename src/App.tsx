import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dia01 from './dia01/Dia01';
import Dia02 from './dia02/Dia02';

export interface OurButtonProps {
  count: number
  onClick: () => void
}

function App() {

  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Dia 01 - Configuração inicial e Hooks</Link>
            </li>
            <li>
              <Link to="/list-detail">Dia 02 - Listagem e detail</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Dia01 />
            </Route>
            <Route path="/list-detail">
              <Dia02 />
            </Route>
            <Route path="/dashboard">
              <Dia01 />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
