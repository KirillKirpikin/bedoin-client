import React, { useState } from 'react';
import { useGetAllSlideQuery } from '../../../../store/api/slider.api';
import CreateSlide from './CreateSlide';
import ListSlide from './ListSlide';

const AdminSlider = () => {
    const {isLoading, data} = useGetAllSlideQuery();
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={()=>setOpen(!open)} className={`admin__btn ${open ? 'admin__active': ''}`}>Добавить Merch</button>          
            {open && <CreateSlide setOpen={setOpen}/>}
            <div className='admin-product'>
                {isLoading ? 
                    <div>Loading...</div> 
                    : data && data.length > 0  ? (
                        data.map(item => (
                            <ListSlide key={item._id} item={item} />
                        ))
                    ) : (<div>Not Found</div>)
                }
            </div>        
        </>
    );
};

export default AdminSlider;