import React, { Component } from 'react';

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
handleNumberClick(e) {
  e.preventDefault();
  const number = parseInt(e.target.value);
  this.inputBox.value += number;
}
handleDepositClick(e) {
  e.preventDefault();
  const amount = parseInt(this.inputBox.value);
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
}
handleWithdrawClick(e) {
  e.preventDefault();
  const amount = parseInt(this.inputBox.value);
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

render() {
  let balanceClass = 'balance';
  if (this.state.balance === 0) {
    balanceClass += ' zero';
  }
  
  return (
    <div className="account">
      <h2>{this.props.name}</h2>
      <p>My balance:</p>
      <p className={balanceClass}>${this.state.balance}</p>
      <input type="number" placeholder="Enter an amount" ref={(input) => {this.inputBox = input}} />
      <button type="button" title="Deposit" onClick={(e) => this.handleDepositClick(e)}>Deposit</button>
      <button type="button" title="Withdraw" onClick={(e)=> this.handleWithdrawClick(e)}>Withdraw</button>
      <div className="btnNumber-wrapper">
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="1">1</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="2">2</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="3">3</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="4">4</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="5">5</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="6">6</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="7">7</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="8">8</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="9">9</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value=""></button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="0">0</button>
        <button className="btnNumber" type="button"  onClick={(e)=> this.handleNumberClick(e)} value="x">x</button>
      </div>
      <p className="operation">{this.state.type}: ${this.state.amount}</p>
      <button type="button" title="clear" onClick={(e)=> this.handleClearClick(e)}>Clear</button>
    </div>
  )
}
}
