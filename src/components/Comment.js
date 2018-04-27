import React, { Component } from "react";

export default class Comment extends Component {
  state = {
    open: true
  };

  toggle = () => {
    this.setState(
      {
        open: !this.state.open
      },
      () => console.log(this.state)
    );
  };

  render() {
    if (this.state.open === false) {
      return (
        <div className="comment">
          <button onClick={this.toggle}>Mostrar comentário</button>
        </div>
      );
    }

    return (
      <div className="comment">
        <button onClick={this.toggle}>Ocultar comentário</button>
        <p className="comment_user">{this.props.user}</p>
        {this.props.children}
      </div>
    );
  }
}
