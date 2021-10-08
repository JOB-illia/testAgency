import React, { FC } from 'react';
import styled from './Modal.module.scss';

interface IModal {
    url: string
    nameImage: string
    onClick: () => void;
}

const Modal: FC<IModal> = ({ url, nameImage, onClick }) => {
    return (
        <div className={styled.modal}>
            <div className={styled.modal__container}>
                <p className={styled.modal__title}>{nameImage}</p>
                <div className={styled.modal__image}>
                    <img src={url} alt={nameImage} className={styled.modal__img} />
                </div>
                <button onClick={onClick} className={styled.modal__close}>Close</button>
            </div>
        </div>
    )
}

export default Modal;