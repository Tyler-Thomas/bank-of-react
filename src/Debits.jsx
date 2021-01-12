import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Debits extends Component{
constructor(props){
super(props)
this.state={
debits:[],
balance:0,
}
}

componentDidMount(){
 fetch("https://moj-api.herokuapp.com/debits")
 .then((response) => response.json())
 .then((response) => {
 console.log(response);
 
 this.setState({ debits: response });
 this.state.debits.map((Entry)=> 
 {console.log(Entry["amount"]);this.updateSum(Entry["amount"])});
 })
 .catch((error) => console.error(error));
 }

updateSum=(num)=>{
console.log(this.state.balance+num);
this.setState({balance:(this.state.balance)+num});
}

render(){

return( <div><div><h1>Debits</h1></div>
<div>{this.state.debits.map((Entry) => { return <div> id:{Entry["id"]}<br/>Description:{Entry["description"]}<br/>Amount:{Entry["amount"]}<br/><br/></div>})}</div>
<div><br/><AccountBalance accountBalance={this.state.balance}/></div></div>)
}

}


export default Debits;