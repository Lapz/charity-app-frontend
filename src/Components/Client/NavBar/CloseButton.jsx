import React, {Component} from 'react';
import "./css/closeHamburger.css"
class CloseButton extends Component {
    render() {
        return (
            <button
                type="button"
                onClick={this.handleClick}
                className={`hamburger hamburger--collapse ${this.props.activeClass}`}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        );
    }

    handleClick = () => {
        console.log("onClick")
        this
            .props
            .changeClass()
    }

}

export default CloseButton