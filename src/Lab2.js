import React from 'react'

class Lab2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:0,
            b:4
        }
        this.aFieldValueChangeHandeler=this.aFieldValueChangeHandeler.bind(this)
        this.bFieldValueChangeHandeler=this.bFieldValueChangeHandeler.bind(this)
    }
    aFieldValueChangeHandeler(ev){
    
        this.setState({
            a:ev.target.value
        },(nextState) => console.log("Value changed a: "+this.state.a));
        
    }
    bFieldValueChangeHandeler(ev){
    
        this.setState({
            b:ev.target.value
        },(nextState) => console.log("Value changed b: "+this.state.b));
        
    }
    render(){
        return(
            <>
           <input type="number" onChange={this.aFieldValueChangeHandeler}/>
           <input type="number" onChange={this.bFieldValueChangeHandeler}/>
           </>
        )
    }
}
export default Lab2;