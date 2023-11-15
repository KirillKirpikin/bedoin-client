import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetLemonadeQuery, useUpdateLemonadeMutation } from '../../../../store/api/lemonade.api';
import DropZoneUpdate from '../../../DropZone/DropZoneUpdate';
import { addInfo, changeInfo, removeInfo } from '../../../helpers/handleInfo';

const UpdateLemonade = () => {
    const {id} = useParams();
    let {data, isLoading} = useGetLemonadeQuery({id});
    const navigate = useNavigate();
    const [updateDrip] = useUpdateLemonadeMutation();
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();
    const [info, setInfo] = useState([]);
    const [inStockUpdate, setInStockUpdate] = useState(false);
    const [files, setFiles] = useState([]);
    const [oldImgs, setOldImgs] = useState([]); 

    const onSubmit = async (dataInp)=>{

        let formData = new FormData();
        formData.append('title', dataInp.title);
        formData.append('short_description', dataInp.short_description);
        formData.append('price', JSON.stringify({ 
            standart: {
                regular: dataInp.standartReg,
                opt: dataInp.standartOpt
            }
        }))
        formData.append('description', dataInp.description)
        formData.append('in_stock', inStockUpdate)

        if(files.length > 0){
            for(let i=0; i<files.length; i++){
                formData.append('img', files[i])
            }  
        }
        
        formData.append('info', JSON.stringify(info))
        formData.append('oldImgs', JSON.stringify(oldImgs))

        await updateDrip({id, formData}).unwrap()
            .then((data)=>{
                alert(data.message);
                navigate(-1);
            })
    }

    useEffect(()=>{
        
        if(!isLoading){
            setInStockUpdate(data.in_stock);
            setInfo(data.info);
            setOldImgs(data.imgs)
        }
    },[isLoading, data])

    return (
        <div className='admin-product'>
            <div className="admin-product__container">
                {isLoading ? 
                    <div>Loading...</div>
                : (
                    <div className="admin-product__update update-product">
                        <h3 className="update-product__title">Обнавть {data.title}</h3>
                        <form className='update-product__form form-update' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form-update__input'>
                                <label htmlFor="title">Введите название:</label>
                                <input id='title' type="text" {...register('title', {required: true})} defaultValue={data.title}/>
                            </div>
                            <div className='form-update__input'>
                                <label htmlFor="short_description">Введите краткое описание:</label>
                                <input id="short_description" type="text" {...register('short_description', {required: true})} defaultValue={data.short_description}/>
                            </div>
                            <div className='form-update__input'>
                                <label htmlFor="description">Введите полное описание:</label>
                                <textarea id="description" type="text" {...register('description', {required: true})} defaultValue={data.description}/>
                            </div>
                            <h4 className='form-update__title'> Цена:</h4>
                            <div className='form-update__input form-update__input-price'>
                                <div>
                                    <label htmlFor="priceStReg">Введите полную стоимость:</label>
                                    <input id='priceStReg' type="text" {...register('standartReg', {required: true})} defaultValue={data.price.standart.regular}/>
                                </div>
                                <div>
                                    <label htmlFor="priceStOpt">Введите оптовую стоимость:</label>
                                    <input id='priceStOpt' type="text" {...register('standartOpt', {required: true})} defaultValue={data.price.standart.opt}/>
                                </div>                        
                            </div>
                            <div className='form-update__checkboxs'>
                                <div className='form-update__checkbox'>
                                    <input id='stockCup' type="checkbox" checked={inStockUpdate} onChange={()=>setInStockUpdate(!inStockUpdate)}/>
                                    <label htmlFor="stockCup">В наличии</label>
                                </div>
                            </div>
                            <div className='form-update__drop'>
                                <DropZoneUpdate files={files} setFiles={setFiles} title={'Lemonade'} old={oldImgs} setOld={setOldImgs}/>
                            </div>

                            <button onClick={(e)=>addInfo(e, info, setInfo)} className='form-update__btn form-update__btn-add'>Добавить Свойство</button>
                            {info.length > 0 && info.map((item)=>(<div className='form-update__info' key={item._id}>
                                    <div className='form-update__input form-update__input-info'>
                                        <input placeholder='Введите стоимость' value={item.name} type="text" onChange={(e)=> changeInfo('name', e.target.value, item._id, info, setInfo)} />
                                    </div>
                                    <div className='form-update__input form-update__input-info'>
                                        <input placeholder='Введите стоимость' value={item.text} type="text" onChange={(e)=> changeInfo('text', e.target.value, item._id, info, setInfo)} />
                                    </div>
                                    <button onClick={()=>removeInfo(item._id, info, setInfo)} className='form-update__btn form-update__btn-close'>Удалить</button>
                                </div>)
                            )}
                            <div  className='form-update__buttons'> 
                                <button className='btn' type='submit'>Обновить</button>                        
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpdateLemonade;