import React, { useState } from 'react';
import { useDeleteDripMutation } from '../../../../store/api/drip.api';
import ListComponent from '../../AdminComponents/ListComponent';

const ListDrip = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteDrip] = useDeleteDripMutation();
    
    const handleDelete = async(id)=>{
        await deleteDrip(id);
        setDeleteModal(false);
    }    
    return (
        <ListComponent item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete}/>
    );
};

export default ListDrip;