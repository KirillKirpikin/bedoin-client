import React, { useEffect } from 'react';
import {  NavLink, Route, Routes, useLocation, useMatch, useNavigate } from 'react-router-dom';
import UpdateCoffee from './AdminList/AdminCoffee/UpdateCoffee';
import AdminCoffee from './AdminList/AdminCoffee';
import AdminDrip from './AdminList/AdminDrip';
import UpdateDrip from './AdminList/AdminDrip/UpdateDrip';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/user/userSlice';
import AdminMerch from './AdminList/AdminMerch';
import UpdateMerch from './AdminList/AdminMerch/UpdateMerch';
import AdminLemonade from './AdminList/AdminLemonade';
import UpdateLemonade from './AdminList/AdminLemonade/UpdateLemonade';
import AdminOrders from './AdminList/AdminOrders';
import AdminSlider from './AdminList/AdminSlider';
import AdminSubs from './AdminList/AdminSubs';
import AdminSticker from './AdminList/AdminSticker';


const Admin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;
    const coffeeMatch = useMatch('coffee');
    const dripMatch = useMatch('drip');
    const lemonadeMatch = useMatch('lemonade');
    const merchMatch = useMatch('merch'); 
    const merchOrders = useMatch('orders'); 
    const sliderMatch = useMatch('mainSlider'); 
    const subsMatch = useMatch('subs'); 
    const stickerMatch = useMatch('sticker'); 
    const dispatch = useDispatch()    
    const setActive = ({isActive})=> isActive ? 'admin__btn admin__active' : 'admin__btn';

    const logOutAd=()=>{
        dispatch(logOut());
        navigate('/')
    }
    
    useEffect(()=>{
        if(pathname === '/admin/*'){
            navigate('/admin/coffee')
        }
    },[navigate, pathname])

   return(
    <div className='admin'>
        <div className='admin__container'>
            <div className='admin__head'>
                <button className='admin__out' onClick={()=>logOutAd()} >Вийти</button>
            </div>
            <div className='admin__buttons'>                
                <NavLink to="coffee" end={coffeeMatch} className={setActive}>Кофе</NavLink>
                <NavLink to="drip" end={dripMatch} className={setActive} >Drip</NavLink>
                <NavLink to="lemonade" end={lemonadeMatch} className={setActive} >Лимонад</NavLink>
                <NavLink to="merch" end={merchMatch} className={setActive}>Мерч</NavLink>
                <NavLink to="orders" end={merchOrders} className={setActive}>Заказы</NavLink>
                <NavLink to="mainSlider" end={sliderMatch} className={setActive}>Main Slider</NavLink>
                <NavLink to="subs" end={subsMatch} className={setActive}>Subs</NavLink>
                <NavLink to="sticker" end={stickerMatch} className={setActive}>Sticker</NavLink>
            </div>
            <Routes>
                <Route path='coffee' element={<AdminCoffee/>}/>
                <Route path='coffee/:id' element={<UpdateCoffee/>}/>
                <Route path='drip' element={<AdminDrip/>}/>
                <Route path='drip/:id' element={<UpdateDrip/>}/>
                <Route path='merch' element={<AdminMerch/>}/>
                <Route path='merch/:id' element={<UpdateMerch/>}/>
                <Route path='lemonade' element={<AdminLemonade/>}/>
                <Route path='lemonade/:id' element={<UpdateLemonade/>}/> 
                <Route path='orders' element={<AdminOrders/>}/>
                <Route path='mainSlider' element={<AdminSlider/>}/> 
                <Route path='sticker' element={<AdminSticker/>}/> 
                <Route path='subs' element={<AdminSubs/>}/> 
            </Routes>                    
        </div>
    </div>
   )
};

export default Admin;