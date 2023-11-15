import React from 'react';
import DripHome from './DripHome';
import { useGetAllDripQuery } from '../../../store/api/drip.api';
import { Link } from 'react-router-dom';
const DripListHome = () => {
    const { isLoading, data } = useGetAllDripQuery();    
    const filtered = data && data.filter((_, i)=> i < 2)


    
    return (
        <div className="home-drip">
            <div className="home-drip__container">
            <h3 className='home-drip__subtitle'>Зручне пакування кави для дому та подорожей</h3>
                <h2 className='home-drip__title'>ДРIП</h2>                
                <div className="home-drip__list list-drip">
                    {isLoading ? 
                        <div>Loading...</div>
                        : data && data.length > 0 ? (
                            filtered.map(item => (
                                <DripHome key={item._id} item={item}/>                
                            ))
                        ): (<div>Not Found</div>)
                    }     
                </div>
                <div className='home-drip__bottom'> 
                    <Link to={'/drip'} className='btn'>Переглянути drip</Link>
                </div> 
            </div>
        </div>
    );
};

export default DripListHome;