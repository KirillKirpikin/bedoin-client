import React, { useEffect, useState } from 'react';
import ContactsBorder from '../../ContactsBorder/ContactsBorder';
import { useForm } from 'react-hook-form';
import { useCreateSubsMutation } from '../../../store/api/subscribe.api';

const ContactsHome = () => {
    const [isError, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);
    const [createSub] = useCreateSubsMutation();
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = (data) =>{
        const payload ={
            email: data.email,
            sent: false
        }
        
        createSub(payload).unwrap()
            .then((data)=>{
                setError(null)
                setIsSuccess(data.message)
                reset();
            })
            .catch((data)=>{
                setError(data.data.message);
            })        
    }

    const handleBlur = ()=>{
        if(isError){
            setError(null)
            reset();
        }
    }
    
    useEffect(()=>{
        if(isSuccess){
            setTimeout(()=>{
                setIsSuccess(null)
            },3000)
        }

    }, [isSuccess])

    return (
        <div className='home-contacts'>
            <ContactsBorder/>            
            <div className="home-contacts__container">
                <div className="home-contacts__subs subs-contacts">
                    <div className="subs-contacts__txt">Рекомендації, секрети і фішки по приготуванню смачної кави. Підписуйся!</div>
                    <form onSubmit={handleSubmit(onSubmit)} className="subs-contacts__form">
                        <div className={`subs-contacts__input ${errors?.email && "subs-contacts__input-error"}`}>
                            <input 
                                {...register('email', {required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/})} 
                                type="text" 
                                placeholder='e-mail*'
                                onFocus={handleBlur}
                            />
                            {isError ? <p className='subs-contacts__message'>{isError}</p> : null}
                            {isSuccess ? <p className='subs-contacts__message subs-contacts__message-success'>{isSuccess}</p> : null}

                        </div>
                        <button className='btn' type='submit'>Підписатись</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactsHome;