import React from 'react';
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';


const Routes = ({ dogs }) => {
  const match = useRouteMatch('/dogs/:name');

  let matchedDog;
  if(match) {
    matchedDog = dogs.find(dog => dog.name.toUpperCase() === match.params.name.toUpperCase())
  }

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route exact path="/dogs/:name">
          <DogDetails dog={matchedDog} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  )
}

export default Routes;