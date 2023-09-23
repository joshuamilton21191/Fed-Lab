import React,{Component} from 'react'
export default class Expt6 extends Component{
    state={
        count:0,
    };
    incrementHandler=()=>{
        this.setState({count:this.state.count+1})
    };

    decrementHandler=()=>{
        if(this.state.count>0){
        this.setState({count:this.state.count-1})
    }
    };
    render(){
        return(
            <center>
            <div>
                <button type='button' onClick={this.incrementHandler}>+</button>&nbsp;&nbsp;
                {this.state.count}&nbsp;&nbsp;
                <button type='button' onClick={this.decrementHandler}>-</button>
            </div>
            </center>
        )
    }
}                                          