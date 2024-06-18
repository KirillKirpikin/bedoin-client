import React,{useState} from 'react';
import DropeZoneOne from '../../../DropZone/DropeZoneOne';
import { useForm } from 'react-hook-form';
import { useCreateStickerMutation } from '../../../../store/api/sticker.api';

const CreateSticker = ({setOpen}) => {
    const {
        register,
        formState:{
            errors,
        },
        handleSubmit
    }= useForm();
    const [file, setFile] = useState(null);
    const [createSticker] = useCreateStickerMutation();

    const onSubmit =(data)=>{
        
        if(file === null){
            return alert('Добавьте изображение')
        }
        let formData = new FormData();
        formData.append('label', data.label);
        formData.append('img', file)

        createSticker(formData).unwrap()
            .then((data)=>{
                alert(data.message)
                setOpen(false)
            })


    }

    
    return (
        <form className='form-update' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-update__input'>
                <input placeholder='Введите название' type="text" {...register('label', {required: true})}/>
            </div>            
            <div className='form-update__drop'>
                <DropeZoneOne file={file} setFile={setFile} title={'Sticker'}/>
            </div>
            <div  className='form-update__buttons'> 
                <button className='btn'>Добавить</button>                        
            </div>            
        </form>
    );
};

export default CreateSticker;
