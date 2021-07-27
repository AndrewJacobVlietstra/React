import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-context';
import './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


function HeaderCartButton(props) {
    const [bumpBtn, setBumpBtn] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const numberOfCartItems = cartCtx.items.reduce((prevTotal, currentItem) => {
        return prevTotal + currentItem.amount;
    }, 0);

    const btnClasses = `${classes.button} ${bumpBtn ? classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) return;
        setBumpBtn(true);

        const timer = setTimeout(() => {
            setBumpBtn(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>

            <span>Your Cart</span>

            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;
