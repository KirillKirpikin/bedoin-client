import React from 'react';
import { useDropzone } from 'react-dropzone';
import {ReactComponent as CloseSvg} from '../../img/close.svg'

const DropZone = ({files, setFiles, title}) => {
    const onDrop = (acceptedFiles) => {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        // console.log(acceptedFiles);
    };

    const removeFile = (fileToRemove) => {
        setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
    };

    const { getRootProps, getInputProps, } = useDropzone({ onDrop });

    return (
        <div className='dropzone'>
            <div {...getRootProps()} className='dropzone__zona'>
                <input {...getInputProps()} />
                <h2 className='dropzone__title'>Для {title}</h2>                
                <p>Перетягніть файл або клацніть, щоб вибрати файл</p>                        
            </div>
            {files.length > 0 && (
                <div className='dropzone__files'>
                    <h4>Загруженные файлы:</h4>
                    <ul className='dropzone__list'>
                        {files.map((file) => (
                        <li className='dropzone__item' key={file.name}>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}                                
                            />
                            <button onClick={() => removeFile(file)}><CloseSvg/></button>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropZone;