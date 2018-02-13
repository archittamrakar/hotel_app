import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
       <h2 className="text-xs-center"> WELCOME TO YOUR HOTEL </h2>
       <br></br>
        <h3 className="text-xs-center">ENGAGED ROOMS DETAILS</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
       <br></br>
        <div className="text-xs-center">
          <Link className="btn btn-primary" to="/posts/new">
            ADD NEW CHECK-IN DETAILS
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
