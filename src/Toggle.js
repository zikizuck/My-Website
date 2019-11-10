import React, {Component} from 'react';

class Toggle extends Component {

    constructor(props){
        super(props);
        this.state = {
            switch : false
        }

    }

    switchHandler(){
        this.setState( {
            switch: !this.state.switch
        })
        // if(this.state.toggle) {
        //     this.setState({toggle:false})
        // }else{
        //     this.setState({toggle:true})
        // }
    }


    render() {
        return (
            <div>
                <button onClick={this.switchHandler.bind(this)}>ON OFF</button>
                <span>
                    {this.state.switch ? 'ON' : 'OFF'}
                </span>



            </div>
        );
    }
}

export default Toggle;