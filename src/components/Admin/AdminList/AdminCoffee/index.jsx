import React, { useState } from 'react';
import { useGetAllAdminCoffeeQuery} from '../../../../store/api/api';

import ListCoffee from './ListCoffee';
import CreateCoffee from './CreateCoffee';



const AdminCoffee = () => {
    const {data = []} = useGetAllAdminCoffeeQuery();
    
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={()=>setOpen(!open)} className={`admin__btn ${open ? 'admin__active' : ''}`}>Добавить кофе</button>
            { open && <CreateCoffee setOpen={setOpen}/>}
            <div className='admin-product'>
                {data.length && data.map(item=>(
                   <ListCoffee key={item._id} item={item}/>
                ))}            
            </div>
        </>
    );
};

export default AdminCoffee;