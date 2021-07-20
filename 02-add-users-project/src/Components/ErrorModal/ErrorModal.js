import React, { useState } from 'react';
import './ErrorModal.css';

const ErrorModal = (props) => {

    return (
        <div>
            <div className='backdrop' onClick={props.onConfirmError}/>
            <div className={`ErrorModal`}>
                <h2 className='modal-header'>{props.title}</h2>
                <p className='modal-message'>{props.message}</p>
                <button className='modal-button' onClick={props.onConfirmError}>Okay</button>
            </div>
        </div>
    )
}

export default ErrorModal;
