import React, { Component } from "react";

export default class CommentBox extends Component {
  state = {
    name: "",
    body: ""
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleBodyChange = event => {
    this.setState({
      body: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.insertComment(this.state)
  }

  render() {
    return (
      <div className="new_comment">
        <form onSubmit={this.handleSubmit}>
          <h3>Adicionar novo comentário</h3>
          <label htmlFor="name">Seu nome</label>
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
            type="text"
            className="user_input"
            id="name"
          />
          <label htmlFor="body">Seu comentário</label>
          <textarea
            onChange={this.handleBodyChange}
            value={this.state.body}
            className="comment_box"
            id="body"
          />
          <button>Comentar</button>
        </form>
      </div>
    );
  }
}
