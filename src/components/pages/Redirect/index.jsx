import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(clearCart())
        navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return null;
};

export default Redirect;