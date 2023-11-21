import React from 'react';
import { useDropzone } from 'react-dropzone';
import {ReactComponent as CloseSvg} from '../../img/close.svg'

const DropeZoneOne = ({ file, setFile, title }) => {
    const onDrop = (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    };
  
    const removeFile = () => {
      setFile(null);
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      maxFiles: 1, // Максимальное количество файлов
    });
  
    return (
      <div className="dropzone">
        <div {...getRootProps()} className="dropzone__zona">
          <input {...getInputProps()} />
          <h2 className="dropzone__title">Для {title}</h2>
          <p>Перетащите файл или кликните, чтобы выбрать файл</p>
        </div>
        {file && (
          <div className="dropzone__files">
            <h4>Загруженные файлы:</h4>
            <ul className="dropzone__list">
              <li className="dropzone__item">
                <img src={URL.createObjectURL(file)} alt={file.name} />
                <button onClick={removeFile}>
                  <CloseSvg />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

export default DropeZoneOne;