import React from 'react';

const Modal = ({active, setActive, children, style}) => {

    return (
        <div className={active ? 'modal modal__active' : 'modal'} onClick={()=> setActive(false)}>
            <div className='modal__container' style={style}>
                <div className=' modal__content' onClick={(e)=>e.stopPropagation()}>
                    {children}
                </div>
                
            </div>
             
        </div>
    );
};

export default Modal;