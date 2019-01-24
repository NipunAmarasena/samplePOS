import React, { Component } from 'react'

export class CartItem extends Component {
  render() {
    return (
        <tr>
        <td>{this.props.cartItem.name}</td>
        {/* <td><input type="number"  min="0" max="10" style={numberSelector}  value={this.props.cartItem.quantity} onChange={this.props.update.bind(this, this.props.cartItem.id)}/> </td> */}
        <td>{this.props.cartItem.quantity}</td>
        <td>${this.props.cartItem.price}</td>
        <td>${this.props.cartItem.lineprice}</td>
        <td><button className="btn btn-danger btn-sm" onClick={this.props.decreaseCount.bind(this,this.props.cartItem.id)}>-</button></td>
        <td><button className="btn btn-primary btn-sm" onClick={this.props.increaseCount.bind(this,this.props.cartItem.id)}>+</button></td>
        <td><button onClick={this.props.deleteItem.bind(this, this.props.cartItem)}>x</button></td>
      </tr>
        
    )
  }
}

const numberSelector = {
  width : '50%'
}

export default CartItem
