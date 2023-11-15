import React, { useState } from 'react';
import { useGetAllAdminLemonadeQuery } from '../../../../store/api/lemonade.api';
import CreateLemonade from './CreateLemonade';
import ListLemonade from './ListLemonade';

const AdminLemonade = () => {
    const {isLoading, data} = useGetAllAdminLemonadeQuery();
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <button onClick={()=>setOpen(!open)} className={`admin__btn ${open ? 'admin__active': ''}`}>Добавить Lemonade</button>            
            {open && <CreateLemonade setOpen={setOpen}/>}
            <div className='admin-product'>
                {isLoading ? 
                    <div>Loading...</div> 
                    : data && data.length > 0  ? (
                        data.map(item => (
                            <ListLemonade key={item._id} item={item} />
                        ))
                    ) : (<div>Not Found</div>)
                }
            </div>
        </>
    );
};

export default AdminLemonade;