import React, { useState } from 'react';
import { useDeleteLemonadeMutation } from '../../../../store/api/lemonade.api';
import ListComponent from '../../AdminComponents/ListComponent';

const ListLemonade = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteLemonade] = useDeleteLemonadeMutation();
    const handleDelete = async(id)=>{
        await deleteLemonade(id);
        setDeleteModal(false);
    }

    return (
        <ListComponent item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete}/>
    );
};

export default ListLemonade;