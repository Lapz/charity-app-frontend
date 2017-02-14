import React, {Component} from 'react';
import './css/modal.css'
class ErrorModal extends Component {
    render() {
        return (
        <div className="modal-overlay" id="modal-overlay">
                <div className="modal" id="modal">

                    <ul>
                     <li>
                        <button className="close-button" id="close-button" onClick={this.closeModal}>X</button>
                     </li>
                     <li>
                        {this.props.errorMessage}
                    </li>
                    </ul>
                </div>
        </div>
            
        );
    }

    closeModal = () =>{
        this.props.modalClosedButtonPressed()
    }
}

export default ErrorModal;