import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {fetchPosts} from "../actions/index";

class PostsIndex extends React.Component {
    //在页面开始加载前,获取数据
    componentWillMount() {
        this.props.fetchPosts();
    }
    
    //自定义function对获取的数据,进行处理
    renderPosts() {
        return this.props.posts.map((post)=> {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}


//connect states && actions && component

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);