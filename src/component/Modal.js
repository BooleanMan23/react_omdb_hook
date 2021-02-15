import React from 'react';

const Modal = (props) =>{
    return (  
        <div className="modal fade" id="movieModal">
            {console.log(props.movie)}
        <div className="modal-dialog" >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" >Test Modal Title</h5>
                    <button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
   )
}

export default Modal;