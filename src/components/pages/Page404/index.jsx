import React from 'react';
import {ReactComponent as ErrSvg} from '../../../img/404.svg' 
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='error-page'>
            <div className='error-page__container'>
                <div className='error-page__img'>
                    <ErrSvg/>
                </div>
                <p className='error-page__txt'>Можливо, це не те, що ви шукали, краще випийте кави</p>
                <Link to={'/'} className='btn'>Повернутись на головну</Link>
            </div>
        </div>
    );
};

export default Page404;