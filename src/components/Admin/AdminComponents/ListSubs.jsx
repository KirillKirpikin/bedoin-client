import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import {ReactComponent as TrashSvg} from '../../../img/trash.svg';
import { useDeleteSubsMutation, useUpdateSubsMutation } from '../../../store/api/subscribe.api';
import { formatDateTime } from '../../../utils/formData';

const ListSubs = ({item}) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteSub] = useDeleteSubsMutation();
    const [updateSub] = useUpdateSubsMutation();
    const [sent, setSent] = useState(item.sent);
    const formattedDate = formatDateTime(item.sentTime)

    const handleDelete = async(id)=>{
        await deleteSub(id);
        setDeleteModal(false)        
    }
    const handleUpdate = (id)=>{
        setSent((prevSent)=> !prevSent)
        let payload = {
            email: item.email,
            sent: !sent
        }
        updateSub({id, payload}).unwrap()
            .then((data)=>{
                alert(data.message);
            })
    }
    return (
        <div className='admin-product__item' style={{paddingBottom: '10px', width: '91%', margin: '0 auto 10px'}}>
            <div className="admin-product__left">                
                <h2 className={`admin-product__title  ${sent === true ? 'admin-product__title-sent' : null}`} style={{margin: 0}}>{item.email}</h2>
                <p className={`admin-product__title  ${sent === true ? 'admin-product__title-sent' : null}`}>{formattedDate}</p>
            </div>
            <div className="admin-product__btns">
                <div className='form-update__checkbox' style={{marginRight: '20px'}}>
                    <input id={'sent' + item._id} type="checkbox" checked={sent} onChange={()=>handleUpdate(item._id)} />
                    <label htmlFor={'sent' + item._id}>отправлена рассылка</label>
                </div>
                <button className='admin-product__remove' onClick={()=> setDeleteModal(true)}><TrashSvg/></button>
            </div>
            <Modal active={deleteModal} setActive={setDeleteModal} style={{ justifyContent: "center", marginTop: "150px"}}>
                <div className='admin-product__delete delete-product'>
                    <div className="delete-product__top">
                        <h3 className="delete-product__title">Удалить</h3>
                    </div>
                    <p className="delete-product__txt">Вы уверены что хотите удалить: <br /> <br /> <span> {item.email}</span></p>
                    <div className="delete-product__btns">
                        <button className="delete-product__btn delete-product__btn-canc" onClick={()=> setDeleteModal(false)}>Отменить</button>
                        <button className="delete-product__btn delete-product__btn-del" onClick={()=>handleDelete(item._id)} >Удалить</button>
                    </div>         
                </div>
            </Modal>                              
        </div>
    );
};

export default ListSubs;