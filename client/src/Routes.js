import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncComponent from 'Components/AsyncComponent'

const Home = React.lazy(() => import('Pages/Home'))

export const Routes = ({
  ...props
}) => {
  return (
    <Router>
      <Route exact path="/">
        <AsyncComponent component={<Home />} />
      </Route>
    </Router>
  )
}

export default Routes
