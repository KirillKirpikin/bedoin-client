import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemtoCart, openCart } from "../../../store/cart/cartSlice";
import OneProduct from "../../OneProduct";

const CoffeeProduct = ({ item }) => {
    const options = [
        "У зерні",
        "Джезва (турка)",
        "Домашня кавоварка",
        "Еспресо",
        "V-60",
        "Аеропресс",
        "Фільтр",
        "Френч-прес",
        "Кемекс",
        "Гейзерна кавоварка",
    ];
    const [selected, setSelected] = useState("У зерні");
    const [count, setCount] = useState(1);
    const [currentRadio, setCurrentRadio] = useState(250);
    const dispatch = useDispatch();

    const isKg = (data) => {
        return data.imgs_kg.length ? data.imgs_kg[0] : data.imgs[0];
    };

    const handleAdd = () => {
        let payload = {
            _id: item._id,
            product: "coffee",
            title: item.title,
            packing: currentRadio,
            img: currentRadio === 250 ? item.imgs[0] : isKg(item),
            price: currentRadio === 250 ? item.price.standart : item.price.kg,
            id: currentRadio === 250 ? item.id_standart : item.id_kg,
            select: selected,
            quantity: count,
        };
        dispatch(addItemtoCart(payload));
        dispatch(openCart(true));
    };

    return (
        <OneProduct
            item={item}
            all={{
                selected,
                setSelected,
                handleAdd,
                count,
                setCount,
                arr: options,
                product: "coffee",
                currentRadio,
                setCurrentRadio,
            }}
        />
    );
};

export default CoffeeProduct;
