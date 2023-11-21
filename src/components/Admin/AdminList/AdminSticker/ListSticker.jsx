import React, { useState } from 'react';
import { useDeleteStickerMutation } from '../../../../store/api/sticker.api';
// import ListComponent from '../../AdminComponents/ListComponent';
import {ReactComponent as TrashSvg} from '../../../../img/trash.svg';
import { BASE_URL_IMG } from '../../../../utils/constants';
import Modal from '../../../Modal/Modal';

const ListSticker = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteSticker] = useDeleteStickerMutation();

    const handleDelete = async(id)=>{
        await deleteSticker(id);
        setDeleteModal(false);
    }

    return (
       

        <div className='admin-product__item'>
            <div className="admin-product__left">
                <div className='admin-product__img'>
                    <img src={BASE_URL_IMG + item.img} alt={item.label}/>
                </div>
                <h2 className='admin-product__title'>{item.label}</h2>
            </div>
            <div className="admin-product__btns">             
                <button className='admin-product__remove' onClick={()=> setDeleteModal(true)}><TrashSvg/></button>
            </div>        
            <Modal active={deleteModal} setActive={setDeleteModal} style={{ justifyContent: "center", marginTop: "150px"}}>
                <div className='admin-product__delete delete-product'>
                    <div className="delete-product__top">
                        <h3 className="delete-product__title">Удалить</h3>
                    </div>
                    <p className="delete-product__txt">Вы уверены что хотите удалить: <br /> <br /> <span> {item.label}</span></p>
                    <div className="delete-product__btns">
                        <button className="delete-product__btn delete-product__btn-canc" onClick={()=> setDeleteModal(false)}>Отменить</button>
                        <button className="delete-product__btn delete-product__btn-del" onClick={()=>handleDelete(item._id)} >Удалить</button>
                    </div>         
                </div>
            </Modal>            
        </div> 
    );
};

export default ListSticker;