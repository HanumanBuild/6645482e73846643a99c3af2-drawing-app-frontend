import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Drawing from './pages/Drawing';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/drawing" component={Drawing} />
      </Switch>
    </div>
  );
}

export default App;