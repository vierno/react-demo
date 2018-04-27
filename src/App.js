import React, { Component } from "react";
import Article from "./components/Article";
import ArticleList from "./ArticleList"
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route path="/" exact component={ArticleList}/>
            <Route path="/:id" component={Article}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
