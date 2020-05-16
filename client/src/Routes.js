import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AsyncComponent from 'Components/AsyncComponent'

const Home = React.lazy(() => import('Pages/Home'))
const Experiences = React.lazy(() => import('Pages/Experiences'))

export const Routes = ({
  ...props
}) => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <AsyncComponent component={<Home />} />
        </Route>

        <Route path="/experiencias">
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
