import React from 'react';
import { useGetAllLemonadeQuery } from '../../../store/api/lemonade.api';
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import ContactsBorder from '../../ContactsBorder/ContactsBorder';
import Lemonade from './Lemonade';
import SkeletonLemonade from '../../Skeleton/SkeletonLemonade';
import NotFound from '../../NotFound';

const LemonadeListPage = () => {
    const {isLoading, data} = useGetAllLemonadeQuery()
    return (
        <div className='drip'>
            <div className='drip__container'>
                <div className="navigate">
                    <Link className='navigate__link' to={ROUTES.HOME}>головна</Link>
                    <ArrowSvg/>
                    <div className='navigate__link navigate__link-this'>Lemanade</div>
                </div>
                <div className="drip__list">               
                    {isLoading ? [...new Array(3)].map((_, i)=> <div key={i} className='listProduct__product'><SkeletonLemonade viewBox="0 0 422 652"/></div>)  
                        : data && data.length > 0  ? (
                            data.map(item => (
                                <Lemonade key={item._id} item={item}/>
                            ))
                        ) : (<NotFound product={'Lemonade'}/>)
                    }
                </div>
            </div>            
            <ContactsBorder/>
        </div>
    );
};

export default LemonadeListPage;
