import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg'
import { useGetAllDripQuery } from '../../../store/api/drip.api';
import Drip from './Drip';
import ContactsBorder from '../../ContactsBorder/ContactsBorder';
// import SkeletonDrip from '../../Skeleton/SkeletonDrip';
import NotFound from '../../NotFound';
import SkeletonLemonade from '../../Skeleton/SkeletonLemonade';


const DripListPage = () => {
    const {isLoading, data} = useGetAllDripQuery();
    
    return (
        <div className='drip'>
            <div className='drip__container'>
                <div className="navigate">
                    <Link className='navigate__link' to={ROUTES.HOME}>головна</Link>
                    <ArrowSvg/>
                    <div className='navigate__link navigate__link-this' >Drip</div>
                </div>
                <div className="drip__list">
                    {isLoading ? [...new Array(3)].map((_, i)=> <div key={i} className='listProduct__product'><SkeletonLemonade viewBox="0 0 422 652"/></div>) 
                        : data && data.length > 0  ? (
                            data.map(item => (
                                <Drip key={item._id} item={item}/>
                            ))
                        ) : (<NotFound product={'Drip'}/>)
                    }
                </div>
            </div>      
            <ContactsBorder/>
        </div>
    );
};

export default DripListPage;