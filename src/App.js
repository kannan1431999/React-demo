/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Home from './components/index.js';
import {Switch,Route} from "react-router-dom";
import {Sample} from "./components/Sample.js"
import { useEffect } from 'react';
import {getRequest} from './api/index' 

function App() {
  useEffect(async() => {
    const allPosts = await getRequest("https://jsonplaceholder.typicode.com/todos?_limit=5")
    console.log(allPosts);
  })
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Sample} />
      </Switch>
    </div>
  );
}

export default App;
