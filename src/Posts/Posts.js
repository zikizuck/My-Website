import React, {Component} from 'react';
import Post from "./Post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({posts: posts.slice(0,10)});
            });
    }

        render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.map( post => {
                    return <Post id={post.id} title={post.title} body={post.body}/>
                })}


            </div>
        );
    }
}

export default Posts;