import React, { useState } from 'react';
import { useDeleteSlideMutation } from '../../../../store/api/slider.api';
import ListComponent from '../../AdminComponents/ListComponent';

const ListSlide = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteSlide] = useDeleteSlideMutation();

    const handleDelete = async(id)=>{
        await deleteSlide(id);
        setDeleteModal(false);
    }
    return (
        <div>
            <ListComponent item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete} notUpdate={true}/>
        </div>
    );
};

export default ListSlide;