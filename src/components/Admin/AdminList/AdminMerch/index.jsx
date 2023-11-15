import React, { useState } from 'react';
import { useGetAllAdminMerchQuery } from '../../../../store/api/merch.api';
import CreateMerch from './CreateMerch';
import ListMerch from './ListMerch';

const AdminMerch = () => {
    const {isLoading, data} = useGetAllAdminMerchQuery();
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={()=>setOpen(!open)} className={`admin__btn ${open ? 'admin__active': ''}`}>Добавить Merch</button>          
            {open && <CreateMerch setOpen={setOpen}/>}
            <div className='admin-product'>
                {isLoading ? 
                    <div>Loading...</div> 
                    : data && data.length > 0  ? (
                        data.map(item => (
                            <ListMerch key={item._id} item={item} />
                        ))
                    ) : (<div>Not Found</div>)
                }
            </div>
        </>
    );
};

export default AdminMerch;