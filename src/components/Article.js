import React, { Component } from "react";
import Comments from "./Comments";

class Article extends Component {
  constructor(...args) {
    super(...args)
    console.log("Constructor")
    this.id = this.props.match.params.id
  }

  state = {
    body: "",
    title: "Carregando"
  };

  componentWillMount() {
    console.log("componentWillMount")
  }

  // shouldComponentUpdate(props, state) {
  //   return false
  // }

  fetchArticle = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    fetch(url).then(response => {
      response.json().then(data => {
        const { body, title } = data;
        this.setState({
          body,
          title
        });
      });
    });
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.fetchArticle(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.id !== nextProps.match.params.id) {
      this.fetchArticle(nextProps.match.params.id)
    }
  }

  render() {
    console.log("render")
    return (
      <div>
        <header className="header">
          <h1 className="title">{this.state.title}</h1>
        </header>
        {
          this.state.body.split("\n").map((text, i) => <p key={i}>{text}</p>)
        }
        <Comments postId={this.id} />
      </div>
    );
  }
}

export default Article;
