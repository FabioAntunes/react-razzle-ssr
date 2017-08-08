import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Link from 'react-router-dom/Link';
import {Home} from './Home';
import { CounterContainer } from './Counter';
import { GitContainer } from './Git'

const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/git">Git</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={CounterContainer} />
      <Route path="/git" component={GitContainer} />
    </Switch>
  </div>
);

export default App;
