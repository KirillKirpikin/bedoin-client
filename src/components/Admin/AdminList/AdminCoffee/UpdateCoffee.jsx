import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCoffeeQuery, useUdateCoffeeMutation } from '../../../../store/api/api';
import DropZoneUpdate from '../../../DropZone/DropZoneUpdate';
import SelectType from '../../../CustomSelect/SelectType';
import { useGetAllStickerQuery } from '../../../../store/api/sticker.api';

const UpdateCoffee = () => {
    const {id}=useParams();
    let {data, isLoading} = useGetCoffeeQuery({id});
    let stick = useGetAllStickerQuery();
    const navigate = useNavigate();    
    const [udateCoffee] = useUdateCoffeeMutation(); 
    const {
        register,
        handleSubmit
    } = useForm();
    const [info, setInfo] = useState([]);    
    const [inStockUpdate, setInStockUpdate] = useState(false);
    const [inStockKgUpdate, setInStockKgUpdate] = useState(false);

    const [selectedTypes, setSelectedTypes] = useState([]);

    const addSelectType = (e) => {
        e.preventDefault();
        if (selectedTypes.length < 3) {
            setSelectedTypes([...selectedTypes, { _id: Date.now(), label: '', img: '' }]);
        }else{
            alert(`Максимальное количество SelectType: 3`);
        }
    };
  
    const removeSelectType = (_id) => {
      setSelectedTypes(selectedTypes.filter((type) => type._id !== _id));
    };

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

    

    const [files, setFiles] = useState([]);
    const [kgImg, setKgImg] = useState([]);
    const [oldImgs, setOldImgs] = useState([]); 
    const [oldImgsKg, setOldImgsKg] = useState([]);
    
    const onSubmit= async (da)=>{        

        let formData = new FormData()
        formData.append('title', da.title);
        formData.append('short_description', da.short_description)
        formData.append('price', JSON.stringify({ 
            standart: {
                regular: da.standartReg,
                opt: da.standartOpt
            }, 
            kg:{
                regular: da.kgReg,
                opt: da.kgOpt
            }
        }))
        // formData.append('type', toArray(da.type))
        formData.append('description', da.description)
        formData.append('in_stock', inStockUpdate)
        formData.append('packing_kg', inStockKgUpdate)
        formData.append('country', da.country)
        if(files.length>0){
            for(let i=0; i<files.length; i++){
                formData.append('img', files[i])
            }  
        }
        
        if(kgImg.length > 0){
            for(let i=0; i<kgImg.length; i++){
                formData.append('img_kg', kgImg[i])
            }
        }else{
            formData.append('img_kg', [])
        }
        
        formData.append('info', JSON.stringify(info))
        formData.append('type', JSON.stringify(selectedTypes))

        formData.append('oldImgs', JSON.stringify(oldImgs))
        formData.append('oldImgsKg', JSON.stringify(oldImgsKg))
        await udateCoffee({id, formData}).unwrap()
            .then((data)=>{
                alert(data.message);
                navigate(-1);
               
            })
    }
     

    useEffect(() => {
        if(!isLoading){
            setInStockUpdate(data.in_stock)
            setInStockKgUpdate(data.packing_kg)
            setInfo(data.info)
            setSelectedTypes(data.type)
            setOldImgs(data.imgs)
            setOldImgsKg(data.imgs_kg)                      
        }
    
        // setInStockKgUpdate(item.packing_kg);
    }, [isLoading, data]);

    return (

        <div className='admin-product'>
            <div className="admin-product__container">
                {!data ? (
                    <div>Loading...</div>
                ) : (
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
                            <div className='form-update__input'>
                                <label htmlFor="country">Введите страну:</label>
                                <input id="country" type="text" {...register('country', {required: true})} defaultValue={data.country}/>
                            </div>
                            <h4 className='form-update__title'> Цена для пачки 250г:</h4>
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

                            <h4 className='form-update__title'> Цена для пачки 1кг:</h4>
                            <div className='form-update__input form-update__input-price'>
                                <div>
                                    <label htmlFor="priceKgReg">Введите полную стоимость:</label>
                                    <input id='priceKgReg' type="text" {...register('kgReg', {required: true})} defaultValue={data.price.kg.regular}/>
                                </div>
                                <div>
                                    <label htmlFor="priceKgOpt">Введите оптовую стоимость:</label>
                                    <input id='priceKgOpt' type="text" {...register('kgOpt', {required: true})} defaultValue={data.price.kg.opt}/>
                                </div>                        
                            </div>
                            <h4 className='form-update__title'>Стикеры</h4>                
                <div className='form-update__input'>
                    {stick.isLoading ? 
                        <div>Loading...</div> 
                        : stick.data ? (
                            <div>
                                <button className='form-update__btn form-update__btn-add' onClick={addSelectType}>Добавить SelectType</button>
                                {selectedTypes.map((selectedType) => (
                                    <div key={selectedType._id}>
                                    <SelectType
                                        arr={stick.data} // Ваш массив данных
                                        selected={selectedType}
                                        setSelected={(option) => {
                                        const updatedTypes = selectedTypes.map((type) =>
                                            type._id === selectedType._id ? { ...type, label: option.label, img: option.img } : type
                                        );
                                        setSelectedTypes(updatedTypes);
                                        }}
                                    />
                                    <button onClick={() => removeSelectType(selectedType._id)}>Удалить</button>
                                    </div>
                                ))}
                                
                                </div>
                        ) : (<div>Not Found</div>)
                    }
                </div>

                            

                            <div className='form-update__checkboxs'>
                                <div className='form-update__checkbox'>
                                    <input id='stockCup' type="checkbox" checked={inStockUpdate} onChange={()=>setInStockUpdate(!inStockUpdate)}/>
                                    <label htmlFor="stockCup">В наличии</label>
                                </div>
                                <div className='form-update__checkbox'>
                                    <input id="checkboxKgCup" type="checkbox" checked={inStockKgUpdate} onChange={()=>setInStockKgUpdate(!inStockKgUpdate)}/>
                                    <label htmlFor="checkboxKgCup">Наличие кг пачки</label>
                                </div>
                            </div>

                            <div className='form-update__drop'>
                                <DropZoneUpdate files={files} setFiles={setFiles} title={'пачек 250г'} old={oldImgs} setOld={setOldImgs}/>

                                { inStockKgUpdate && <DropZoneUpdate files={kgImg} setFiles={setKgImg} title={'пачек 1кг'} old={oldImgsKg} setOld={setOldImgsKg}/>}
                            </div>   
                            
                            <button onClick={addInfo} className='form-update__btn form-update__btn-add'>Добавить Свойство</button>
                            {info.length > 0 && info.map((item)=>{  
                               return(<div className='form-update__info' key={item._id}>
                                    <div className='form-update__input form-update__input-info'>
                                        <input placeholder='Введите стоимость' value={item.name} type="text" onChange={(e)=> changeInfo('name', e.target.value, item._id)} />
                                    </div>
                                    <div className='form-update__input form-update__input-info'>
                                        <input placeholder='Введите стоимость' value={item.text} type="text" onChange={(e)=> changeInfo('text', e.target.value, item._id)} />
                                    </div>
                                    <button onClick={()=>removeInfo(item._id)} className='form-update__btn form-update__btn-close'>Удалить</button>
                                </div>)
                            })}

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

export default UpdateCoffee;
