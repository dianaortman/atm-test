import React, { Component } from 'react';
// import NumPad from '../node_modules/react-numpad-material/build/index';
// import { NumericInput } from '../node_modules/numeric-keyboard/dist/numeric_keyboard.react.js';


export default class Account extends Component {
  constructor(props){
        super(props)
        this.state = {
          balance: 0,
          type: 'Value',
          amount: 0
        }
      }
handleClearClick(e) {
  e.preventDefault();
  this.inputBox.value = '';
}
handleDepositClick(e) {
  e.preventDefault();
  let amount = parseInt(this.inputBox.value);
  if (amount > 0) {
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance,
      type: e.target.title,
      amount: amount
    })
  } else {
    alert("Nth to Deposit");
    this.handleClearClick(e);
  }
  // this.setState({
  //   type: e.target.title,
  //   amount: amount
  // })
}
handleWithdrawClick(e) {
  e.preventDefault();
  let amount = parseInt(this.inputBox.value);
  if (this.state.balance >= amount && amount > 0) {
    let newBalance = this.state.balance - amount;
    this.setState({
      balance: newBalance,
      type: e.target.title,
      amount: amount
    })
  } else {
    alert("Wrong amount!");
    this.handleClearClick(e);
  }
}
// input(val) {
//   console.log('fgdhf')
// }

render() {
  let balanceClass = 'balance';
  if (this.state.balance === 0) {
    balanceClass += ' zero';
  }
  
  return (
    <div className="account">
      <h2>{this.props.name}</h2>
      <div>My balance:</div>
      <div className={balanceClass}>${this.state.balance}</div>
      <input type="number" placeholder="Enter an amount" ref={(input) => {this.inputBox = input}} />
      <button type="button" title="Deposit" onClick={(e) => this.handleDepositClick(e)}>Deposit</button>
      <button type="button" title="Withdraw" onClick={(e)=> this.handleWithdrawClick(e)}>Withdraw</button>

      <div className="operation">{this.state.type}: ${this.state.amount}</div>
      <button type="button" title="clear" onClick={(e)=> this.handleClearClick(e)}>Clear</button>
      {/* <div className="input">
        <label>Amount: </label>
        <NumericInput type="number" placeholder="touch to input" onInput={this.input.bind(this)} />
      </div> */}
    </div>
  )
}
}
