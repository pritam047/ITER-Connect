import React, { useRef } from 'react';
import './Modal.css'

import Form from '../Forms/Forms'
const Modal = props => {

    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };

    const clearAll = useRef();

    function closeModal(e) {
        e?.stopPropagation()
        clearAll.current.clear();
        props.closeModal() 
    }

   
    return (
        <div
            className="modal"
            onClick={closeModal}
            style={divStyle}
        >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span
                    className="close"
                    onClick={closeModal}>
                    &times;
            </span>
            <Form ref={clearAll} currentId={props.currentId} setCurrentId={props.setCurrentId} closeModal={closeModal}/>
            </div>
            {/* EDIT CONTAINER */}

        </div>
    );
}
export default Modal;