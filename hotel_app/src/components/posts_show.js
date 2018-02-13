import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";


class PostsShow extends Component {
   static contextTypes = {
    router:PropTypes.object
   }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id)
    .then(() => {this.context.router.push('/')});
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <br></br>
          {/* <div className="text-xs-left"> */}
          <Link className="btn btn-primary pull-xs-left" to="/">
            BACK
          </Link>
        {/* </div> */}
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          DELETE OCCUPANCY
        </button>
        <br></br>
        <br></br>
        <h3>CUSTOMER NAME:{post.title}</h3>
        <h3>ROOM TYPE:{post.categories}</h3>
        <h3>ROOM NUMBER:{post.content}</h3>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
