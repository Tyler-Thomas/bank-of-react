import React, {Component} from 'react';

class AccountBalance extends Component {
constructor(props){
super(props);
this.state={
accountBalance:this.props.accountBalance,

}
}
  render() {
  console.log(this.props.accountBalance)
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;
