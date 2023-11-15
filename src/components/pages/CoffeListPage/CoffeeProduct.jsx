import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemtoCart, openCart } from '../../../store/cart/cartSlice';
import OneProduct from '../../OneProduct';

const CoffeeProduct = ({item}) => {
    const options= ['У зерні', 'Джезва (турка)', 'Домашня кавоварка', 'Еспресо', 'V-60', 'Аеропресс', 'Фільтр', 'Френч-прес', 'Кемекс', 'Гейзерна кавоварка'];
    const [selected, setSelected] = useState('У зерні');
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();    
    const handleAdd = () =>{
        let payload ={
            _id: item._id,
            product: 'coffee',
            title: item.title,
            packing: 250,
            img: item.imgs[0],
            price: item.price.standart,
            select: selected,
            quantity: count,            
        }
        dispatch(addItemtoCart(payload))
        dispatch(openCart(true))
    }

    return (
        <OneProduct item={item} all={{selected, setSelected, handleAdd, count, setCount, arr: options, product: 'coffee'}}/>
    );
};

export default CoffeeProduct;