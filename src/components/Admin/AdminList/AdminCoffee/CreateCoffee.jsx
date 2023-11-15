import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DropZone from '../../../DropZone/DropZone';
import { useCreateCoffeeMutation } from '../../../../store/api/api';

const CreateCoffee = ({setOpen}) => {   
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();
    const [info, setInfo] = useState([]);    
    const [files, setFiles] = useState([]); 
    const [kgImg, setKgImg] = useState([]);

    const [inStock, setInStock] = useState(true);
    const [inStockKg, setInStockKg] = useState(true);
    const [creatCoffee] = useCreateCoffeeMutation()
    
    
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

    const onSubmit = (data) =>{
        if(files.length < 1){
            return alert('Добавьте изображение')
        }
        if(inStockKg){
            if(kgImg) return alert('Добавьте изображение kg пачки, или уберите наличее kg пачки');
        }
        let formData = new FormData()
        formData.append('title', data.title)
        formData.append('short_description', data.shortDescr)
        formData.append('price', JSON.stringify({ 
            standart: {
                regular: data.standartReg,
                opt: data.standartOpt
            }, 
            kg:{
                regular: data.kgReg,
                opt: data.kgOpt
            }
        }))
        formData.append('type', toArray(data.type))
        formData.append('description', data.description)
        formData.append('in_stock', inStock)
        formData.append('packing_kg', inStockKg)
        for(let i=0; i<files.length; i++){
            formData.append('img', files[i])
        }
        if(kgImg.length > 0){
            for(let i=0; i<kgImg.length; i++){
                formData.append('img_kg', kgImg[i])
            }    
        }      
        formData.append('info', JSON.stringify(info))

        creatCoffee(formData).unwrap()
            .then((data)=>{
                alert(data)
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
                    <input placeholder='Введите полное описание' type="text" {...register('description', {required: true})}/>
                </div>
                <h4 className='form-update__title'> Цена для пачки 250г:</h4>
                <div className='form-update__input form-update__input-price'>
                    <input placeholder='Введите полную стоимость' type="text" {...register('standartReg', {required: true})}/>
                    <input placeholder='Введите оптовую стоимость' type="text" {...register('standartOpt', {required: true})}/>
                </div>
                <h4 className='form-update__title'> Цена для пачки 1кг:</h4>
                <div className='form-update__input form-update__input-price'>
                    <input placeholder='Введите полную стоимость' type="text" {...register('kgReg', {required: true})}/>
                    <input placeholder='Введите оптовую стоимость' type="text" {...register('kgOpt', {required: true})}/>
                </div>

                <div className='form-update__input'>
                    <label htmlFor="typeId">введите все типы через запятую ','</label>
                    <input id='typeId' placeholder='Введите тип' type="text" {...register('type', {required: false})}/>
                </div>

                <div className='form-update__checkboxs'>
                    <div className='form-update__checkbox'>
                        <input id='stock' type="checkbox" checked={inStock} onChange={()=>setInStock(!inStock)}/>
                        <label htmlFor="stock">В наличии</label>
                    </div>
                    <div className='form-update__checkbox'>
                        <input id="checkboxKg" type="checkbox" checked={inStockKg} onChange={()=>setInStockKg(!inStockKg)}/>
                        <label htmlFor="checkboxKg">Наличие кг пачки</label>
                    </div>
                </div>

                <div className='form-update__drop'>
                    <DropZone files={files} setFiles={setFiles} title={'пачек 250г'}/>

                    { inStockKg && <DropZone files={kgImg} setFiles={setKgImg} title={'пачек 1кг'}/>}
                </div>                

                <button onClick={addInfo} className='form-update__btn form-update__btn-add'>Добавить Свойство</button>
                {info.map(item=>(
                    <div className='form-update__info' key={item._id}>
                        <div className='form-update__input form-update__input-info'>
                            <input placeholder='Введите стоимость' value={item.name} type="text" onChange={(e)=> changeInfo('name', e.target.value, item._id)} />
                        </div>
                        <div className='form-update__input form-update__input-info'>
                            <input placeholder='Введите стоимость' value={item.text} type="text" onChange={(e)=> changeInfo('text', e.target.value, item._id)} />
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

export default CreateCoffee;