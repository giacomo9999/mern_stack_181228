import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import DATA from "./data";
import "CommentBox.css";

class CommentBox extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  render() {
    return (
      <div className="container">
        <div className="comments">
          <h2>Comments:</h2>
          <CommentList data={DATA} />
        </div>
        <div className="form" />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
