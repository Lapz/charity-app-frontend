import React, {Component} from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">

                        {this.props.message}

                    </div>
                </div>
                <button onClick={this.closeModal} className="modal-close"></button>
            </div>
        );

    }

    closeModal = () => {
        this
            .props
            .handleClose()
    }
}

export default Modal;