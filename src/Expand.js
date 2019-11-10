import React, {Component} from 'react';
import './Expand.css';
class Expand extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggle : false
        }

    }

    switchHandler(){
        this.setState( {
            toggle: !this.state.toggle
        })
        // if(this.state.toggle) {
        //     this.setState({toggle:false})
        // }else{
        //     this.setState({toggle:true})
        // }
    }
    render() {
        const cls = this.state.toggle ? '' : 'Expand-hide';
        return (
            <div >
                <button onClick={this.switchHandler.bind(this)}>Toggle</button>

                    <div className={cls}>text text text</div>

            </div>
        );
    }
}

export default Expand;

/*{this.state.toggle ? <div> text text text </div> : null}*/