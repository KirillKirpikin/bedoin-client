<<<<<<< HEAD
import { useState } from "react";
import { useDeletePromoMutation } from "../../../../store/api/promo.api";
import PromoComponent from "./PromoComponent";

const ListPromo = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteDrip] = useDeletePromoMutation();
    
    const handleDelete = async(id)=>{
        await deleteDrip(id);
        setDeleteModal(false);
    }    
    return (
        <PromoComponent item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete}/>
    );
};

=======
import { useState } from "react";
import { useDeletePromoMutation } from "../../../../store/api/promo.api";
import PromoComponent from "./PromoComponent";

const ListPromo = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteDrip] = useDeletePromoMutation();
    
    const handleDelete = async(id)=>{
        await deleteDrip(id);
        setDeleteModal(false);
    }    
    return (
        <PromoComponent item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete}/>
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default ListPromo;