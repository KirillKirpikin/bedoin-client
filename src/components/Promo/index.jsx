import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { checkPromo, clearPromo } from '../../store/cart/cartSlice';

const PromoCode = () => {
    const dispatch = useDispatch();
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [good, setGood] = useState(false);
    const [err, setErr] = useState(null)

    const onSubmit = (data) =>{
        console.log(data);
        dispatch(checkPromo(data)).unwrap()
            .then((data)=>{
                setGood(true)
                setErr(null)
            })
            .catch((data)=>{
                dispatch(clearPromo());
                setErr(data)
                setGood(false)
            })
    }

    return (
        <div className='promo'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`form-order__input ${errors?.promo && "form-order__input-error"}`}>
                    <input {...register('promo', {required: true})} placeholder='Промокод' type="text"/>
                    {good && <p className='promo__answer promo__answer-ok'>Промокод дійсний</p>}
                    {err && <p className='promo__answer promo__answer-err' >{err}</p>}
                </div>
                <button type='submit' className='btn'>Перевірка Промо</button>            
            </form>
        </div>
    );
};

export default PromoCode;