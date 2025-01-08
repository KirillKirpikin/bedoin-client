<<<<<<< HEAD
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDripToCart, openCart } from '../../../store/cart/cartSlice';
import OneProduct from '../../OneProduct';

const Drip = ({item}) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const handleAdd = () =>{
        let payload ={
            _id: item._id,
            product: 'drip',
            packing: 10,
            title: item.title,
            price: item.price.standart,
            img: item.imgs[0],            
            quantity: count
        }
        dispatch(addDripToCart(payload))
        dispatch(openCart(true));
    }


    return (    
        <OneProduct item={item} all={{ handleAdd, count, setCount, product: 'drip'}} />          
    );
};

=======
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDripToCart, openCart } from '../../../store/cart/cartSlice';
import OneProduct from '../../OneProduct';

const Drip = ({item}) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const handleAdd = () =>{
        let payload ={
            _id: item._id,
            product: 'drip',
            packing: 10,
            title: item.title,
            price: item.price.standart,
            img: item.imgs[0],            
            quantity: count
        }
        dispatch(addDripToCart(payload))
        dispatch(openCart(true));
    }


    return (    
        <OneProduct item={item} all={{ handleAdd, count, setCount, product: 'drip'}} />          
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default Drip;