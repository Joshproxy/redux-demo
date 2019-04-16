import { connect } from "react-redux";
import React from 'react';
import {clearCart} from '../Actions/Actions'
import { Store } from "redux";

class Cart extends React.Component<{cartCount: number, currentPrice: number, clearCart: () => void}, {}> {
    render() {
        let cartCount = this.props.cartCount;
        let currentPrice = this.props.currentPrice;

        let clearCart = () => {
            this.props.clearCart();
        }
        
        return (
            <div>
                <div>Cart -- {cartCount} ${currentPrice}</div>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
            
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        cartCount: state.CartState.currentCount,
        currentPrice: state.CartState.totalPrice
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        clearCart: () => { dispatch(clearCart())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);