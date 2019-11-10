import React, {Component} from 'react';

class Copier extends Component {


    constructor(props){
        super(props);
        this.state ={
            content : ''
        };
    }

    typeHandler(e) {
        console.log(e.target.value);
        this.setState ( {
            content : e.target.value // bring up what we type as event

        })
    }



    render() {
        return (
            <div>
                <input onChange={this.typeHandler.bind(this)} type="text"/>
                <div>{this.state.content}</div>

            </div>
        );
    }
}

export default Copier;