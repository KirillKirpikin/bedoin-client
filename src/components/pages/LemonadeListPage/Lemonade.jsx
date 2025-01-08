<<<<<<< HEAD
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDripToCart, openCart } from '../../../store/cart/cartSlice';

import OneProduct from '../../OneProduct';

const Lemonade = ({item}) => {
    const [count, setCount] = useState(24);
    const dispatch = useDispatch();
    const min = 24;

    const handleAdd = () =>{
        let payload ={
            _id: item._id,
            product: 'lemonade',
            packing: 0,
            title: item.title,
            price: item.price.standart,
            img: item.imgs[0],            
            quantity: count
        }
        dispatch(addDripToCart(payload))
        dispatch(openCart(true));
    }
    return (
        <OneProduct item={item} min={min} all={{ handleAdd, count, min, setCount, product: 'lemonade'}} />
    );
};

=======
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDripToCart, openCart } from '../../../store/cart/cartSlice';

import OneProduct from '../../OneProduct';

const Lemonade = ({item}) => {
    const [count, setCount] = useState(24);
    const dispatch = useDispatch();
    const min = 24;

    const handleAdd = () =>{
        let payload ={
            _id: item._id,
            product: 'lemonade',
            packing: 0,
            title: item.title,
            price: item.price.standart,
            img: item.imgs[0],            
            quantity: count
        }
        dispatch(addDripToCart(payload))
        dispatch(openCart(true));
    }
    return (
        <OneProduct item={item} min={min} all={{ handleAdd, count, min, setCount, product: 'lemonade'}} />
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default Lemonade;