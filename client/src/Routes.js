import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AsyncComponent from 'Components/AsyncComponent'

const Home = React.lazy(() => import('Pages/Home'))
const Experiences = React.lazy(() => import('Pages/Experiences'))

export const routePaths = {
  Home: ["/"],
  Experiences: ["/experiencias"],
  Gestores: [],
  Contact: [],
}

export const Routes = ({
  ...props
}) => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path={routePaths.Home}>
          <AsyncComponent component={<Home />} />
        </Route>

        <Route path={routePaths.Experiences}>
          <AsyncComponent component={<Experiences />} />
        </Route>
        
        <Route>
          <AsyncComponent component={<Home />} />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
