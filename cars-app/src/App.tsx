import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';
import { SingleCar } from './app/containers/SignleCar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`

function App() {
  
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cars/:id" component={SingleCar} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
