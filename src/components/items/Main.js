import React, { Component } from 'react'
import Items from './Items';
import Cart from './Cart';

export class Main extends Component {
   

    state = {
        totalprice : 0,
        name : '',
        cartItems: [],
        items: [
            {
                id: 1,
                name: 'Item1',
                description: 'description1',
                price: 10,
                quantity : 1
            },
            {
                id: 2,
                name: 'Item2',
                description: 'description2',
                price: 12,
                quantity : 1
            },
            {
                id: 3,
                name: 'Item3',
                description: 'description3',
                price: 15,
                quantity : 1
            },
        ]
    }

    addToCart = (item) => {
        item.lineprice = item.price;
        var test = this.state.cartItems;
        // this.state.totalprice += item.lineprice;
        test.push(item);
        this.setState({
            cartItems: test
        }

        )
        //this.state.cartItems.push(item);
        console.log(item + this.state.cartItems);

    }

    handleChangeValue = e => {
        
    //this.setState({name: e.target.value})
console.log(e.target.value)};


    updateQty = e => {
        // console.log(e.target.value);
        // console.log('jss');
        
        // this.setState({
        //     items : this.state.items.map(item =>{
        //       console.log(item.id);
        //     })
        // })
       

        //console.log('old ' + oldQty);
        //console.log('updated ' + updatedCount);

        // this.setState({
        //     items: this.state.items.map(cartitem => {
        //         if (cartitem.id == item.id) {
        //             console.log('old ' + cartitem.quantity);
        //             console.log('incoming ' + item.quantity);
        //             cartitem.quantity = item.quantity;
        //             console.log('updated')
        //         }
        //         return cartitem;
        //     })
        // })
        
    }

    deleteItem = (item) => {
        var test = this.state.cartItems;
        this.setState({
            cartItems: test.filter(cartitem => cartitem.id != item.id)
        }) 
    }

    increaseCount = (id) =>{
        this.setState(
        this.state.cartItems.map(item =>{
            if(item.id == id){
                item.quantity ++;
                item.lineprice = item.quantity * item.price;
                // this.state.totalprice += item.lineprice;
            }
        })
        
        )
    }

    decreaseCount = (id) =>{
        this.setState(
            this.state.cartItems.map(item =>{
                if(item.id == id){
                    console.log('found')
                    item.quantity--;
                    item.lineprice = item.quantity * item.price;
                    // this.state.totalprice += item.lineprice;
                }
            }))
    }


    render() {
        return (
            <div >
                <div className="row">
                    <div className="col">
                        <Items items={this.state.items} addToCart={this.addToCart} updateQty={this.updateQty} />
                    </div>
                    <div className="col">
                        <Cart cartItems={this.state.cartItems} deleteItem={this.deleteItem} increaseCount={this.increaseCount}  decreaseCount={this.decreaseCount} totalprice={this.state.totalprice}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
