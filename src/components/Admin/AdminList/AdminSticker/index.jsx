import React, { useState } from 'react';
import { useGetAllStickerQuery } from '../../../../store/api/sticker.api';
import CreateSticker from './CreateSticker';
import ListSticker from './ListSticker';

const AdminSticker = () => {
    const {isLoading, data} = useGetAllStickerQuery();
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={()=>setOpen(!open)} className={`admin__btn ${open ? 'admin__active': ''}`}>Добавить Sticker</button>
            {open && <CreateSticker setOpen={setOpen}/>}
            <div className='admin-product'>
                {isLoading ? 
                    <div>Loading...</div> 
                    : data ? (
                        data.map(item => (
                            <ListSticker key={item._id} item={item} />
                        ))
                    ) : (<div>Not Found</div>)
                }
            </div>       

            {/* <div className='admin-product'>
                {isLoading ? 
                    <div>Loading...</div> 
                    : data ? (
                        data.map(item => (
                            // <ListSticker key={item._id} item={item} />
                            <div>{item.label}</div>
                        ))
                    ) : (<div>Not Found</div>)
                }
            </div>  */}
        </>
    );
};

export default AdminSticker;
