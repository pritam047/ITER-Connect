import React from 'react';
import './Modal.css'

import Form from '../Forms/Forms'
const Modal = props => {

    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };

    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
    }

    //Edit post function
  /*  const updateMeme = (values) => {
        console.log(values);
        console.log("POST ID = ", props.data._id);
        const URL = `${process.env.REACT_APP_URL}/memes/${props.data._id}`
        console.log(URL);
        // let patchObj = {
        //     caption : editCaption,
        //     url : editUrl
        // }
        // console.log(patchObj);
        fetch(URL, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(values)
        })
            .then((response) => {
                console.log(response);
                alert("Data Updated successfully!");
                props.closeModal();
                props.refresh();
                // window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert("Error in Updating!")
                props.closeModal();
                props.refresh();
            })
    }
    */
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
            <Form />
            </div>
            {/* EDIT CONTAINER */}

        </div>
    );
}
export default Modal;