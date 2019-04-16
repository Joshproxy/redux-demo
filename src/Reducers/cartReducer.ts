import { ITitleState } from "./titleReducer";

const initState = {
    items: [],
    currentCount: 0,
    totalPrice: 0
}

export interface ICartState {
    items: ITitleState[];
    currentCount: number;
    totalPrice: number;
}

const CartReducer = (state: ICartState = initState, action: {type: string}) => {
    switch (action.type) {
            case 'ADD_ITEM_TO_CART' :
            let defaultTitle = {
                description: 'Cool Description',
                format: 'Online',
                id: 1,
                title: 'Red Book',
                price: 20
            };
            return {
                ...state,
                items: [...state.items, defaultTitle],
                currentCount: state.currentCount += 1,
                totalPrice: state.totalPrice += defaultTitle.price
            }
            case 'CLEAR_CART':
            return {
                ...state,
                items: [],
                currentCount: 0,
                totalPrice: 0
            }
        default:
            return {
                ...state
            }
    }
};

export default CartReducer;