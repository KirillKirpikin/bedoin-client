import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Auth = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const [reject, setReject] = useState('')
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();
    
    const deleteReject = ()=>{
        if(reject){
            setReject('')
        }
    }

    const onSubmit = (data) =>{
        setReject('');
        const payload = {
            ...data
        }
        dispatch(loginUser(payload))
        .unwrap()
        .then(()=>{navigate(ROUTES.ADMIN)})
        .catch((err)=>{setReject(err)})
    }

    return (
        <section className='auth'>
            <div className="auth__container">
                <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
                    <h3 className="auth__title">Введіть логін та пароль</h3>
                    {reject && <h4 className="auth__reject">{reject}</h4>}
                    <div className={`auth__input ${errors?.username && "auth__input-error"}`}>
                        <input onFocus={()=>deleteReject()} {...register('username', {required: true})} placeholder='Login' type="text" />    
                    </div>   
                    <div className={`auth__input ${errors?.password && "auth__input-error"}`}>
                        <input onFocus={()=>deleteReject()} {...register('password', {required: true})} placeholder='Password' type="text" />    
                    </div>
                    <div className='auth__btn'>
                        <button type='submit' className='btn'>Вхід</button>
                    </div>

                </form>    
            </div>      
        </section>
    );
};

export default Auth;