import React, { useRef } from 'react';
// import arrow from '../../img/arrow.svg'
import { ReactComponent as ArrowSvg } from '../../img/arrow.svg';
import { formatDateTime } from '../../utils/formData';

const Accordion = ({item, onClick, isOpen, onDelete}) => {   
    console.log(item);
    const formattedDate = formatDateTime(item.orderTime);
    const itemRef = useRef(null)
    return (
        <div className="accordion">
            <div className='accordion__header' onClick={()=>onClick()}>
                <div className='accordion__number'>#{item.orderId}</div>
                <div className='accordion__number'>{formattedDate}</div>
                <div className='accordion__number'>Отправлеен</div>
                <div className='accordion__total'>{item.total} $</div>
                <div className={`accordion__arrow ${isOpen ? "accordion__arrow-active" : ""}`}><ArrowSvg/></div>
                {/* <img className={`accordion__arrow ${isOpen ? "accordion__arrow-active" : ""}`} src={arrow} alt="#"/> */}
            </div>
            <div className='accordion__collapse' style={ isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}}>
                <div className='accordion__body body-accord' ref={itemRef} >
                    <h2 className='body-accord__title'>Заказ # {item.orderId}</h2>
                    <div className='body-accord__row'>
                        <div className='body-accord__head'>Товар</div>
                        <div className='body-accord__head '>Количество</div>                        
                        <div className='body-accord__head '>Select</div>                        
                        <div className='body-accord__head body-accord__head-last'>Упаковка</div>                        
                    </div>
                    
                    {item && item.order && item.order.map((prod)=>(
                        <div key={prod._id+prod.packing+prod.select} className='body-accord__row'>
                            <div className='body-accord__item'>{prod.title}</div>
                            <div className='body-accord__item '>{prod.quantity}</div>
                            <div className='body-accord__item '>{prod.select}</div>
                            <div className='body-accord__item body-accord__item-last'>{prod.packing === 0 ? 'standart' :  prod.packing}</div>
                            {/* <div className='body-accord__item body-accord__item-price'>{prod.quantity * prod.price}$</div>                         */}
                        </div>
                    ))}            
                    <div className="body-accord__user user-accord">
                        <div className="user-accord__box">  
                            <h3 className='user-accord__title'>Заказчик</h3>                          
                            <p className="user-accord__item">
                                Имя: {item.firstName} {item.lastName}
                            </p>
                            <p className="user-accord__item">
                                Номер: {item.phone}
                            </p>
                            <p className="user-accord__item">
                                Перезванивать: {item.call === 'NotCallBack' ? 'Нет': 'Да'}
                            </p>
                            <p className="user-accord__item">
                                Email: {item.email}
                            </p>                         
                        </div>
                        <div className="user-accord__box">
                            <h3  className='user-accord__title'>Доставка</h3>
                            {item.delivery === 'NovaPost' ?
                                <>
                                    <p className="user-accord__item">
                                        Доставка: Нова Пошта
                                    </p>
                                    <p className="user-accord__item">
                                        Оплата: {item.payment === 'Cash' ? 'При получении' : 'Онлайн оплата'}
                                    </p>
                                    <p className="user-accord__item">
                                        Город: {item.city}
                                    </p>
                                    <p className="user-accord__item">
                                        Отделение: {item.warehouses}
                                    </p>
                                
                                </>
                            :   <>                            
                                    <p className="user-accord__item">
                                        Доставка: Самовывоз
                                    </p>
                                    <p className="user-accord__item">
                                        Оплата: {item.payment === 'Cash' ? 'При получении' : 'Онлайн оплата'}
                                    </p>
                                    
                                </> 
                            
                            }                            

                        </div>

                    </div>
                    <div className="body-accord__bottom">
                        <button onClick={()=>onDelete(item._id)} className='admin__out'>Удалить заказ</button>
                    </div>
                                        
                </div>
            </div>
        </div>
    );
};

export default Accordion;