import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dia01 from './dia01/Dia01';
import Dia02 from './dia02/Dia02';
import Dia03 from './dia03/Dia3';
import { Login, Usuario } from './dia03/Usuario';
import LoginController from './dia03/Dia03Controller';

export interface OurButtonProps {
  count: number
  onClick: () => void
}

function App() {

  const [usuarioLogado, setUsuarioLogado] = useState<Usuario>()

  const handleLogin = (login: Login) => {
    const loginController = new LoginController()
    setUsuarioLogado(loginController.verificarLogin(login))
  }

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
            <Link to="/login">Dia 04 - Login</Link>
          </li>
          {usuarioLogado &&
            <li>
              <Link onClick={() => { setUsuarioLogado(undefined) }} to="/logout">{`usuario logado (${usuarioLogado.nome}): clique para sair`}</Link>
            </li>}
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
          <Route path="/login">
            <Dia03 doLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
