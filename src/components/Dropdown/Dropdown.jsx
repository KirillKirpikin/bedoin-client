import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useSelector } from 'react-redux';



const Dropdown = ({handleClose, open}) => {
    const {isAuth} = useSelector(state=> state.user)
    // console.log(currentUser.role);

    return (
        <div className={`dropdown__menu ${open ? "dropdown__menu-active" : ""}`} >
            <ul >
                <li>
                    <Link className='dropdown__link' onClick={()=>{handleClose()}} to={ROUTES.COFFEE} >КАВА</Link>
                </li>
                <li>
                    <Link className='dropdown__link' to={ROUTES.DRIP} onClick={()=>{handleClose()}} >Drip</Link>
                </li>
                <li>
                    <Link className='dropdown__link' to={ROUTES.LEMONADE} onClick={()=>{handleClose()}} >Напої</Link>
                </li>
                {isAuth && (
                    <li>
                        <Link className='dropdown__link' to={ROUTES.ADMIN} onClick={()=>{handleClose()}} >Admin</Link>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default React.memo(Dropdown);