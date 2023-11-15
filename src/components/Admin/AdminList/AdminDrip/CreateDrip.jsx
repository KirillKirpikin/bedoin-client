import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DropZone from '../../../DropZone/DropZone';
import { useCreateDripMutation } from '../../../../store/api/drip.api';
import { addInfo, changeInfo, removeInfo } from '../../../helpers/handleInfo';

const CreateDrip = ({setOpen}) => {
    const {
        register,
        formState:{
            errors,
        },
        handleSubmit
    }= useForm();

    const [info, setInfo] = useState([]);
    const [files, setFiles] = useState([]);
    const [inStock, setInStock] = useState(true);
    const [createDrip] = useCreateDripMutation() ;


    const onSubmit = (data) =>{
        if(files.length < 1){
            return alert('Добавьте изображение')
        }
        let formData = new FormData()
        formData.append('title', data.title)
        formData.append('short_description', data.shortDescr)
        formData.append('price', JSON.stringify({ 
            standart: {
                regular: data.standartReg,
                opt: data.standartOpt
            }
        }))
        formData.append('description', data.description)
        formData.append('in_stock', inStock)
        for(let i=0; i<files.length; i++){
            formData.append('img', files[i])
        }
        formData.append('info', JSON.stringify(info))

        createDrip(formData).unwrap()
            .then((data)=>{
                alert(data.message)
                setOpen(false)
            })

    }

    return (
        <form className='form-update' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-update__input'>
                <input placeholder='Введите название' type="text" {...register('title', {required: true})}/>
            </div>
            <div className='form-update__input'>
                <input placeholder='Введите краткое описание' type="text" {...register('shortDescr', {required: true})}/>
            </div>
            <div className='form-update__input'>
                <textarea placeholder='Введите полное описание' type="text" {...register('description', {required: true})}/>
            </div>
            <h4 className='form-update__title'> Цена:</h4>
            <div className='form-update__input form-update__input-price'>
                <input placeholder='Введите полную стоимость' type="text" {...register('standartReg', {required: true})}/>
                <input placeholder='Введите оптовую стоимость' type="text" {...register('standartOpt', {required: true})}/>
            </div>
            <div className='form-update__checkboxs'>
                <div className='form-update__checkbox'>
                    <input id='stock' type="checkbox" checked={inStock} onChange={()=>setInStock(!inStock)}/>
                    <label htmlFor="stock">В наличии</label>
                </div>
            </div>
            <div className='form-update__drop'>
                <DropZone files={files} setFiles={setFiles} title={'Dripok'}/>
            </div>
            <button onClick={(e)=>addInfo(e, info, setInfo)} className='form-update__btn form-update__btn-add'>Добавить Свойство</button>
            {info.map(item=>(
                <div className='form-update__info' key={item._id}>
                    <div className='form-update__input form-update__input-info'>
                        <input placeholder='Введите стоимость' value={item.name} type="text" onChange={(e)=> changeInfo('name',  e.target.value, item._id, info, setInfo)} />
                    </div>
                    <div className='form-update__input form-update__input-info'>
                        <input placeholder='Введите стоимость' value={item.text} type="text" onChange={(e)=> changeInfo('text',  e.target.value, item._id, info, setInfo)} />
                    </div>
                    <button onClick={()=>removeInfo(item._id, info, setInfo)} className='form-update__btn form-update__btn-close'>Удалить</button>
                </div>
            ))}

            <div  className='form-update__buttons'> 
                <button className='btn' type='submit'>Добавить</button>                        
            </div>            
        </form>
    );
};

export default CreateDrip;