import React, { Component } from "react";
import Comment from "./Comment";
import CommentBox from "./CommentBox";

export default class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
      response => {
        response.json().then(data => {
          this.setState({
            comments: data
          });
        });
      }
    );
  }

  insertComment = comment => {
    const { comments } = this.state

    const newComments = [{
      body: comment.body,
      name: comment.name,
      id: comments.length + 1
    }, ...comments]

    this.setState({
      comments: newComments
    })
  }

  render() {
    return (
      <div className="comments">
        <CommentBox insertComment={this.insertComment} />
        {this.state.comments.map(comment => {
          return (
            <Comment key={comment.id} user={comment.name}>
              {comment.body.split("\n").map((block, index) => {
                return (
                  <p key={index}>{block}</p>
                )
              })}
            </Comment>
          );
        })}
      </div>
    );
  }
}
