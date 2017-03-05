import React, {Component} from 'react';

class Notification extends Component {
    render() {
        return (
            <div className="notification">
                <button onClick={this.handleClick} className="delete"></button>
                {this.props.message}
            </div>
        );
    }

    handleClick = () => {
        this
            .props
            .closeNoti()
    }

}

export default Notification;