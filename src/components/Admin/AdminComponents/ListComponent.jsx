import React from 'react';
import { BASE_URL_IMG } from '../../../utils/constants';
import {ReactComponent as UpdateSvg} from '../../../img/update.svg';
import {ReactComponent as TrashSvg} from '../../../img/trash.svg';
import Modal from '../../Modal/Modal';
import { Link } from 'react-router-dom';

const ListComponent = ({item, deleteModal, setDeleteModal, handleDelete}) => {
    return (
        <div>
            <div className='admin-product__item'>
                <div className="admin-product__left">
                    <div className='admin-product__img'>
                        <img src={BASE_URL_IMG + item.imgs[0]} alt={item.name}/>
                    </div>
                    <h2 className='admin-product__title'>{item.title}</h2>
                </div>
                <div className="admin-product__btns">
                    <Link to={`${item._id}`} className='admin-product__upd'><UpdateSvg/></Link>
                    <button className='admin-product__remove' onClick={()=> setDeleteModal(true)}><TrashSvg/></button>
                </div>
                <Modal active={deleteModal} setActive={setDeleteModal} style={{ justifyContent: "center", marginTop: "150px"}}>
                    <div className='admin-product__delete delete-product'>
                        <div className="delete-product__top">
                            <h3 className="delete-product__title">Удалить</h3>
                        </div>
                        <p className="delete-product__txt">Вы уверены что хотите удалить: <br /> <br /> <span> {item.title}</span></p>
                        <div className="delete-product__btns">
                            <button className="delete-product__btn delete-product__btn-canc" onClick={()=> setDeleteModal(false)}>Отменить</button>
                            <button className="delete-product__btn delete-product__btn-del" onClick={()=>handleDelete(item._id)} >Удалить</button>
                        </div>         
                    </div>
                </Modal>            
            </div>            
        </div>
    );
};

export default ListComponent;