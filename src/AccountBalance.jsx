import React, {Component} from 'react';

class AccountBalance extends Component {
constructor(props){
super(props);
this.state={
accountBalance:this.props.accountBalance,

}
}
  render() {
    return (
        <div>
          Balance: {this.state.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;
