import React, { Component } from 'react'
import Item from './Item';
import itemsjson from '../../data/products.json';


export class Items extends Component {
    

    render() {
        return (
            <div > List of Items
                <table className="table" id="itemsTable">
                    <thead>
                        <tr>
                            <th scope="col">Item ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            {/* <th scope="col">Quantity</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.props.items.map((item) => (
                <Item key={item.id} item={item} addToCart={this.props.addToCart} updateQty={this.props.updateQty}></Item>
            ))} 
                    </tbody>
                </table>
            </div>
             
        )
    }
}



export default Items
