import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemtoCart, openCart } from '../../../store/cart/cartSlice';
import OneProduct from '../../OneProduct';

const MerchProduct = ({item}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);    
    const [selected, setSelected] = useState(item.size[0]);

    const handleAdd = ()=>{
        let payload ={
            _id: item._id,
            product: 'merch',
            packing: 0,
            title: item.title,
            price: item.price.standart,
            img: item.imgs[0],
            select: selected,
            quantity: count
        }
        dispatch(addItemtoCart(payload))
        dispatch(openCart(true))
    }
    return (       
        <OneProduct item={item} all={{selected, setSelected, handleAdd, count, setCount, product: 'merch'}}/>        
    );
};

export default MerchProduct;