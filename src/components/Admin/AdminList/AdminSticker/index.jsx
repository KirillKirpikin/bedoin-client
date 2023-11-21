import React, { useEffect, useState } from 'react';
import { useGetAllStickerQuery } from '../../../../store/api/sticker.api';
import CreateSticker from './CreateSticker';
import ListSticker from './ListSticker';

const AdminSticker = () => {
    const {isLoading, data} = useGetAllStickerQuery();
    console.log(data);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(!isLoading){
            console.log(data);
        }
    },[isLoading])
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