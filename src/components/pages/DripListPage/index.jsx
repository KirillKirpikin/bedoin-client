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
                <p className='home-coffee__subtitle'>
                DRIP COFFEE від Bedoin – це спешелті кава у зручному пакуванні
                <br/>
                <br/>
                Наша кава у Drip-пакуванні – це ідеальний варіант для тих, хто цінує зручність та бажає отримувати якісний фільтр в будь-якому місці. 
                <br/>
                <br/>
                Ці маленькі кавові друзі стануть Вашим незамінним супутником під час походів, відряджень та мандрівок або просто у офісі, коли дуже потрібна фільтр-кава. Bedoin пропонує оптові ціни на нашу дріп-каву для бізнес-партнерів.
                <br/>
                <br/>
                </p>    
            </div>      
            <ContactsBorder/>
        </div>
    );
};

export default DripListPage;