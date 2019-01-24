import React, { Component } from 'react'

export class Item extends Component {
  //this.props.updateQty.bind(this, this.props.item)}

 
  render() {
    const { id} = this.props.item;

    
    return (
      <tr>
        
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.description}</td>
        <td>${this.props.item.price}</td>
        {/* <td><input type="number"  min="0" max="10" style={numberSelector}  onChange={this.props.updateQty}/> </td> */}
        <td><button className="btn btn-secondary btn-sm" onClick={this.props.addToCart.bind(this, this.props.item )} >Add to cart</button></td>
      </tr>
    )
  }
}



export default Item
