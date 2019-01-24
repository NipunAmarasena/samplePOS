import React, { Component } from 'react';
import CartItem from './CartItem';
import Item from './Item';


export class Cart extends Component {
  
   
  render() {
    return (
      <div>Shopping Cart
        <table className="table" id="cartTable">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.cartItems.map((cartItem) => (
                <CartItem key={cartItem.id } cartItem={cartItem} deleteItem={this.props.deleteItem} increaseCount={this.props.increaseCount} decreaseCount={this.props.decreaseCount} totalprice={this.props.totalprice}></CartItem>
            ))} 
                    
                    </tbody>
                    
                </table>
                {/* {this.props.cartItems.map(function(item){
                    this.props.totalprice += item.lineprice;
                })} */}
                <button className="btn btn-secondary btn-sm" >Checkout</button>
      </div>
    )
  }
}

export default Cart
