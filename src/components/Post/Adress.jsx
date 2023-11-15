import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addCity, addWarehouse } from '../../store/cart/cartSlice';
import { Controller } from "react-hook-form";

const Adress = ({control}) => {

    const dispatch = useDispatch();
    const {city, warehouse} = useSelector((state)=> state.cart);
    
    const serchTimeout = useRef(null);
        
    const [citys, setCitys] = useState([])
    const [isCityFocused, setCityFocused] = useState(false);
    // const [inputCity, setInputCity] = useState(city ? city.Present : '');
    
    const warhTumeout = useRef(null)

    const [warehouses, setWarehouses] = useState([]);
    // const [inputWarehouse, setInputWarehouse] = useState(warehouse ? warehouse.Description : '');
    const [isWarehousesFocused, setWarehousesFocused] = useState(false); 

    
    const handleCity = (e)=>{
        const inputValue = e.target.value;
        if(serchTimeout.current){
            clearTimeout(serchTimeout.current)
        }    
        serchTimeout.current = setTimeout(async ()=>{
            if(inputValue.length>0){
                try {
                    const requestData = {
                        apiKey: "94aa5948f3f03837b4d203baa7423853",
                        modelName: "Address",
                        calledMethod: "searchSettlements",
                        methodProperties: {
                            CityName: inputValue,
                            Limit: "50",
                            Page: "1"
                        }
                    }
                    const res = await axios.post('https://api.novaposhta.ua/v2.0/json/', requestData);
                    const adress = res.data.data[0].Addresses;
                    setCitys(adress)
                } catch (error) {
                    console.error('Ошибка запроса:', error);
                }
            }
        }, 500)        
    }



    const handleWarehouses = (e)=>{
        const inputValue = e.target.value;
        if(warhTumeout.current) {
            clearTimeout(warhTumeout.current)
        }
        warhTumeout.current = setTimeout(async ()=>{
            if(inputValue>0){
                try {
                    const requestData = {
                        apiKey: "94aa5948f3f03837b4d203baa7423853",
                        modelName: "Address",
                        calledMethod: "getWarehouses",
                        methodProperties: {
                            CityRef: city.DeliveryCity,
                            FindByString: inputValue,                           
                        }
                    }
                    const res = await axios.post('https://api.novaposhta.ua/v2.0/json/', requestData);
                    const adress = res.data.data;
                    setWarehouses(adress)                     
                } catch (error) {
                    console.error('Ошибка запроса:', error);                    
                }
            }
        }, 1000)
    }

    



    const handleCityInputFocus = () => {
        setCityFocused(true);
    }

    const handleWarhInputFocus = () =>{
        setWarehousesFocused(true)
    }
    
    const handleCityInputBlur = () => {        
        // setInputCity(city ? city.Present : '')
        setTimeout(()=>{
            setCityFocused(false);
        },100)
    }
    
    const handleWarhInputBlur = () =>{
        // setInputWarehouse(warehouse ? warehouse.Description : '')
        setTimeout(()=>{
            setWarehousesFocused(false);
        }, 100)
    }


    useEffect(()=>{
        return ()=>{
            if(serchTimeout.current){
                clearTimeout(serchTimeout.current)
            }
            if(warhTumeout.current){
                clearTimeout(warhTumeout.current)
            }            
        }
    }, [])

    return (
        <>   
            <div className="form-order__select select-form" >                           
                <Controller
                    control={control}
                    name='city'
                    rules={{required: true}}
                    defaultValue={city ? city.Present : ''}
                    render={({field, fieldState})=><>
                        <input
                            // className='select-form__input'
                            className={`select-form__input ${fieldState.error && "select-form__input-error"}`}
                            placeholder='Оберіть місто'
                            {...field}
                            onChange={(e) =>{ 
                                field.onChange(e)
                                handleCity(e)
                            }} 
                            onFocus={handleCityInputFocus}
                            onBlur={(e)=>{
                                field.onBlur(e)
                                city && field.onChange(city.Present)
                                handleCityInputBlur()                                
                            }}
                            type="text" 
                            value={field.value}
                            autoComplete='off'                            
                        />
                        {
                            isCityFocused && (
                                <div className="select-form__content">
                                    {citys.map(city=>(
                                        <div key={city.Ref}
                                            onClick={()=>{                                 
                                                field.onChange(city.Present)
                                                dispatch(addCity(city))
                                            }}
                                        className="select-form__item">{city.Present}</div>                    
                                    ))}
                                </div>
                            )
                        }            
                    </>
                 }
                />
                
            </div>

            {city && (
                <div className="form-order__select select-form">
                    <Controller
                        control={control}
                        name='warehouses'
                        rules={{required: true}}
                        defaultValue={warehouse ? warehouse.Description : ''}
                        render={({field, fieldState})=><>
                            <input
                                className={`select-form__input ${fieldState.error && "select-form__input-error"}`}                                                        
                                placeholder='Оберіть відділення'
                                {...field}
                                onChange={(e) =>{
                                    field.onChange(e)
                                    handleWarehouses(e)
                                }} 
                                onFocus={handleWarhInputFocus}
                                onBlur={(e)=>{
                                    field.onBlur(e);
                                    warehouse && field.onChange(warehouse.Description)
                                    handleWarhInputBlur();
                                }}
                                type="text" 
                                value={field.value}
                                autoComplete='off'                                
                            />
                            {
                                isWarehousesFocused && (
                                    <div className="select-form__content">                                        
                                        {warehouses.map(item=>(
                                            <div key={item.Ref}
                                            onClick={()=>{     
                                                field.onChange(item.Description)
                                                dispatch(addWarehouse(item))
                                            }}                                            
                                            className="select-form__item">{item.Description}</div>
                                        ))}
                                    </div>
                                )
                            }
                        
                        </>}                    
                    />
                </div>   
            )}
            
            
        </>
    );
};

export default Adress;