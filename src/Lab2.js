import React from 'react'
const generateArrayLab2 = (a,b) =>(Array.from(Array(b-a+1),(v,k)=>k+Number(a)));
const squareRoot = (arr) => (arr.map(x=>Math.sqrt(x)));
let iter=1;
class Lab2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:0,
            b:0,
            arr:[]
        }
        this.aFieldValueChangeHandeler=this.aFieldValueChangeHandeler.bind(this)
        this.bFieldValueChangeHandeler=this.bFieldValueChangeHandeler.bind(this)
        this.sqrtArray=this.sqrtArray.bind(this)
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
    sqrtArray(ev)
    {
        (Number(this.state.a)>0&&(Number(this.state.a)<Number(this.state.b)))?
        this.setState({
            arr:squareRoot(generateArrayLab2(this.state.a,this.state.b))
        })
        :
        this.setState({
            arr:[]
        })
    }
    render(){
        return(
           <>
           <>{console.time("render – "+ iter +" – ")}</>
           <input type="number" onChange={this.aFieldValueChangeHandeler}/>
           <input type="number" onChange={this.bFieldValueChangeHandeler}/>
           {(Number(this.state.a)>0&&(Number(this.state.a)<Number(this.state.b)))?<p>{generateArrayLab2(this.state.a,this.state.b).toString()}</p>:<p></p>}
           <button onClick={this.sqrtArray}>process array</button>
           <br/>
           {this.state.arr.toString()}
           <>{console.timeEnd("render – "+ iter++ +" – ")}</>
           </>
        )
    }
}
export default Lab2;
