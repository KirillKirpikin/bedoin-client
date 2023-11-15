import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateMerchMutation } from '../../../../store/api/merch.api';
import DropZone from '../../../DropZone/DropZone';

const CreateMerch = ({setOpen}) => {
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
    const [createMerch] = useCreateMerchMutation();
    
    const addInfo = (e) =>{        
        e.preventDefault();
        setInfo([...info, {name: '', text: '', _id: Date.now()}])
    }

    const removeInfo = (id)=>{
        setInfo(info.filter(i=> i._id !== id))
    }

    const changeInfo = (key, value, id)=>{
        setInfo(info.map(i=>i._id === id ? {...i, [key]: value}: i))
    }

    const toArray = (str)=>{
        let t =str.replaceAll(' ', '').split(',');
        return t;
    }

    const onSubmit = (data)=>{
        if(files.length < 1){
            return alert('Добавьте изображение')
        }
        let formData = new FormData();
        formData.append('title', data.title)
        formData.append('short_description', data.shortDescr)
        formData.append('price', JSON.stringify({ 
            standart: {
                regular: data.standartReg,
                opt: data.standartOpt
            }
        }))
        formData.append('in_stock', inStock)
        formData.append('size', toArray(data.size))
        for(let i=0; i<files.length; i++){            
            formData.append('img', files[i])
        }
        formData.append('info', JSON.stringify(info));
        createMerch(formData).unwrap()
            .then((data)=>{
                alert(data)
                setOpen(false)
            })
            .catch((e)=>{
                alert(e.message)
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
            {/* <div className='form-update__input'>
                <textarea placeholder='Введите полное описание' type="text" {...register('description', {required: false})}/>
            </div> */}
            <h4 className='form-update__title'> Цена:</h4>
            <div className='form-update__input form-update__input-price'>
                <input placeholder='Введите полную стоимость' type="text" {...register('standartReg', {required: true})}/>
                <input placeholder='Введите оптовую стоимость' type="text" {...register('standartOpt', {required: true})}/>
            </div>
            <div className='form-update__input'>
                    <label htmlFor="sizeId">введите все размеры через запятую ','</label>
                    <input id='sizeId' placeholder='Введите размеры' type="text" {...register('size', {required: false})}/>
            </div>
            <div className='form-update__checkboxs'>
                <div className='form-update__checkbox'>
                    <input id='stockMer' type="checkbox" checked={inStock} onChange={()=>setInStock(!inStock)}/>
                    <label htmlFor="stockMer">В наличии</label>
                </div>
            </div>
            <div className='form-update__drop'>
                <DropZone files={files} setFiles={setFiles} title={'Мерча'}/>
            </div>
            <button onClick={addInfo} className='form-update__btn form-update__btn-add'>Добавить Свойство</button>
            {info.map(item=>(
                <div className='form-update__info' key={item._id}>
                    <div className='form-update__input form-update__input-info'>
                        <input placeholder='Введите заголовок' value={item.name} type="text" onChange={(e)=> changeInfo('name', e.target.value, item._id)} />
                    </div>
                    <div className='form-update__input form-update__input-info'>
                        <input placeholder='Введите описание' value={item.text} type="text" onChange={(e)=> changeInfo('text', e.target.value, item._id)} />
                    </div>
                    <button onClick={()=>removeInfo(item._id)} className='form-update__btn form-update__btn-close'>Удалить</button>
                </div>
            ))}

            <div  className='form-update__buttons'> 
                <button className='btn' type='submit'>Добавить</button>                        
            </div>            
        </form>
    );
};

export default CreateMerch;