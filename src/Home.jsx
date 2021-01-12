import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Debits from './Debits';

class Home extends Component{

constructor(props){
super(props)
}

render(){
return (<div><div><img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/></div>
              <div><h1>Bank of React</h1></div>
              <div><Link to="/userProfile">User Profile</Link></div>
              <div><AccountBalance accountBalance={this.props.accountBalance}/></div>
              <div><Link to="/debits">Debits</Link></div></div>)

}

}
export default Home;