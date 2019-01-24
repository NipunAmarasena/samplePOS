const intialState = {
    cartItems : null
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return{
            ...state,
            cartItems:{
                
            }
            }
        case 'REMOVE_FROM_CART':
            return{

            }
        default:
            return state;
    }
}

export default reducer;