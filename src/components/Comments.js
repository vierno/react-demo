import React, { Component } from "react";

export class Comment extends Component {
  state = {
    open: true
  };

  toggle = () => {
    this.setState({
      open: !this.state.open
    }, () => console.log(this.state))
  }

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
        <p className="comment_body">{this.props.body}</p>
      </div>
    );
  }
}

export default class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <Comment user="João" body="Que matéria legal!" />
        <Comment user="Maria" body="Que matéria chata" />
        <Comment user="José" body="Concordo com tudo" />
      </div>
    );
  }
}
