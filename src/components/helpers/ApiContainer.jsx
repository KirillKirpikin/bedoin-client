import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
// import { getAllCoffee } from '../../store/coffee/coffeeSlice';
import { checkUser } from '../../store/user/userSlice';


const ApiContainer = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(getAllCoffee());
        dispatch(checkUser())
    }, [dispatch])
    return null;
};

export default ApiContainer;