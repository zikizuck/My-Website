import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div >
                <p>{this.props.id}</p>
                <h4>{this.props.title}</h4>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default Post;