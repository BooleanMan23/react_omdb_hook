import React from 'react';

const Modal = (props) =>{
    return (  
        <div class="modal fade" id="movieModal">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" >Test Modal Title</h5>
                    <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        Test Modal Body
                </div>
            </div>
        </div>
    </div>
   )
}

export default Modal;