import React, { useState } from 'react';
import { useDeleteCoffeeMutation } from '../../../../store/api/api';
import ListComponent from '../../AdminComponents/ListComponent';

const ListCoffee = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);    
    const [deleteCoffee] = useDeleteCoffeeMutation();

    const handleDelete =  async(id) =>{
        await deleteCoffee(id);
        setDeleteModal(false);
    } 
    return (
        <ListComponent item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete}/>
    );
};

export default ListCoffee;