import React from 'react';
import CoffeHome from './CoffeHome';
import { useGetAllCoffeeQuery } from '../../../store/api/api';
import { Link } from 'react-router-dom';
import SkeletonHomeCoffee from '../../Skeleton/SkeletonHomeCoffee';
import NotFound from '../../NotFound';

const CoffeeListHome = () => {
    const {isLoading, data} = useGetAllCoffeeQuery()
    const filtered = data && data.filter((_, i)=> i < 4)

    return (
        <div className='home-coffee'>
            <div className='home-coffee__container'>
                <h3 className='home-coffee__subtitle'>Обери свою</h3>
                <h2 className='home-coffee__title'>КАВУ</h2>                
                <div className="home-coffee__list list-coffe">
                    {isLoading ? [...new Array(2)].map((_, i)=> <div key={i} className='listProduct__product'><SkeletonHomeCoffee viewBox="0 0 600 907"/></div>)
                        : data && data.length > 0 ? (
                            filtered.map((item) => (
                                <CoffeHome key={item._id} item={item}/>
                            ))            
                        ) :  (<NotFound product={'Coffee'}/>)
                    }
                </div>
                <div className='home-coffee__bottom'> 
                    <Link to={'/coffee'} className='btn'>Переглянути всю каву</Link>
                </div>                                
            </div>
            
        </div>
    );
};

export default CoffeeListHome;