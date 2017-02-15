import React, {Component} from 'react';
import "./css/footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>
                    Made with ❤️ by
                    <a href="https://github.com/Lapz">
                        Lapz
                    </a>
                </p>
            </div>
        );
    }
}

export default Footer;