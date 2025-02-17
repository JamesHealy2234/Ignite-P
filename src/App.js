import React from "react";
//components and pages
 import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import Nav from './components/Navigation';

import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <GlobalStyles />

        <Nav/>

      <Route path={["/game/:id", "/"]}> 
         <Home/>
      </Route>
    </div>
  );
}

export default App;
