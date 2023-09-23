import React,{Component} from "react";

export default class Expt9 extends Component{
    constructor(props){
        super(props);
        this.state={
           time:""
        }
    }

    componentDidMount(){
        this.tick();
    }

    tick=()=>{
        let d=new Date();
        const hrs=d.getHours();
        const min=d.getMinutes();
        const sec= d.getSeconds();
        const update=`${hrs}:${min}:${sec}`
        this.setState({time:update})
    };

    componentDidUpdate(prevProps, prevState){
        if(this.state.time!==prevState){
            this.interval=setInterval(()=>{
                this.tick()
            },1000);
        }

    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                <h1>Digital Clock</h1>
                <h1>
                    {this.state.time}
                </h1>
            </div>
        )
        
    }
}