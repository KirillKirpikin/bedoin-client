import React, { useState } from 'react';
import { useDeleteMerchMutation } from '../../../../store/api/merch.api';
import ListComponent from '../../AdminComponents/ListComponent';

const ListMerch = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteMerch] = useDeleteMerchMutation();

    const handleDelete = async(id)=>{
        await deleteMerch(id);
        setDeleteModal(false);
    }
    return (
        <ListComponent item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete}/>
    );
};

export default ListMerch;