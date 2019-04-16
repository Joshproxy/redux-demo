import React from 'react';
import { ITitleState } from '../Reducers/titleReducer';

interface ITitleProps extends ITitleState {
    addTitleToCart: () => void;
}

export const Title = (props: ITitleProps) => <aside>
    <div className="wrapper">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Price: {props.price}</p>
        <p>Format: {props.format}</p>
        <button onClick={props.addTitleToCart} className="addButton">Add To Cart</button>
    </div>
</aside>