import React, {Component} from 'react';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state ={
            counter: 0
        };
    }

    increase(){
        console.log('Click!');
        this.setState( {
            counter : this.state.counter + 1
        })
    }

    decrease(){
        if(this.state.counter ===0){
            return;
        }
        this.setState( {
            counter: this.state.counter -1
        })
    }
    // typeHandler(e){
    //     console.log(e.target.value)
    // }
    render() {
        return (
            <div>
                <button onClick={this.increase.bind(this)}>+</button>
                <button onClick={this.decrease.bind(this)}>-</button>
                <span>{this.state.counter}</span>
                {/*<input type="text" onKeyUp={this.typeHandler}/>*/}
            </div>
        );
    }
}

export default Counter;