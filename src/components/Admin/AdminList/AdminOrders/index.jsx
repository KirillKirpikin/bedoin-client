import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getAllOrders } from '../../../../store/order/orderSlice';
import Accordion from '../../../Accordion/Accordion';


const AdminOrders = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const {orders} = useSelector(({order})=>order);
    const [openId, setId] = useState(null)

    const handleRemove = (id)=>{
        dispatch(deleteOrder(id))
    }

    useEffect(()=>{
        dispatch(getAllOrders());
        setLoading(false)
    },[dispatch])

    if(loading){
        return <h2>Loading</h2>
    }

    return (
        <div className="orders__container">
                <h2 className='orders__title'>История заказов</h2>
                <div className='orders__list'>
                     <div className='orders__head'>
                        <div className='orders__heder'>Номер</div>
                        <div className='orders__heder'>Дата</div>
                        <div className='orders__heder'>Статус</div>
                        <div className='orders__heder orders__heder-last'>Итог</div>
                    </div>
                    {orders && orders.map(item=>(
                        <Accordion 
                            key={item._id} 
                            item={item}
                            isOpen={item._id === openId}
                            onClick={()=>(item._id === openId ? setId(null) : setId(item._id))}
                            onDelete={handleRemove}
                        />
                    ))}                    
                </div>

            </div>
    );
};

export default AdminOrders;