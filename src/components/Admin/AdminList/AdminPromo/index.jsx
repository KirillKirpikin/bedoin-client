import { useState } from "react";
import { useGetAllPromoQuery } from "../../../../store/api/promo.api";
import ListPromo from "./ListPromo";
import CreatePromo from "./CreatePromo";

const AdminPromo = () => {
    const {isLoading, data} = useGetAllPromoQuery();
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={()=>setOpen(!open)} className={`admin__btn ${open ? 'admin__active': ''}`}>Добавить Promo</button>            
            {open && <CreatePromo setOpen={setOpen}/>}
            <div className='admin-product'>
                {isLoading ? 
                    <div>Loading...</div> 
                    : data && data.length > 0  ? (
                        data.map(item => (
                            <ListPromo key={item._id} item={item} />
                        ))
                    ) : (<div>Not Found</div>)
                }
            </div>

        </>
    );
};

export default AdminPromo;