import React, { Component } from "react";
import Comments from "./Comments";

class Article extends Component {
  state = {
    body: "",
    title: "Carregando"
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/").then(response => {
      response.json().then(data => {
        const { body, title } = data;
        this.setState({
          body,
          title
        });
      });
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">{this.state.title}</h1>
        </header>
        {
          this.state.body.split("\n").map((text, i) => <p key={i}>{text}</p>)
        }
        <Comments />
      </div>
    );
  }
}

export default Article;
