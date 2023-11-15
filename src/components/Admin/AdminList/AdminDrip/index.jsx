import React, { useState } from 'react';
import { useGetAllAdminDripQuery } from '../../../../store/api/drip.api';
import CreateDrip from './CreateDrip';
import ListDrip from './ListDrip';

const AdminDrip = () => {
    const {isLoading, data} = useGetAllAdminDripQuery();
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={()=>setOpen(!open)} className={`admin__btn ${open ? 'admin__active': ''}`}>Добавить Drip</button>            
            {open && <CreateDrip setOpen={setOpen}/>}
            <div className='admin-product'>
                {isLoading ? 
                    <div>Loading...</div> 
                    : data && data.length > 0  ? (
                        data.map(item => (
                            <ListDrip key={item._id} item={item} />
                        ))
                    ) : (<div>Not Found</div>)
                }
            </div>

        </>
    );
};

export default AdminDrip;

