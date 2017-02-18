import React, {Component} from 'react';
import "./css/about.css";
import "./css/loader.css";
import axios from "axios"
class About extends Component {
    constructor() {
        super()
        this.state = {
            body: {}
        }
    }
    render() {

        return ((this.state.body.__html)
            ? (
                <div className="about-content-wrapper">
                    <h1>{this.state.title}</h1>
                    {/*<PreviousButton/>*/}

                    <div className="about-content" dangerouslySetInnerHTML={this.state.body}></div>
                </div>
            )
            : (
                <div className=" post-loading loader">
                    <div className="line-scale-party">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ));
    }

    componentDidMount() {
        axios
            .get("about")
            .then((response) => {
                console.log(response)

                this.setState({
                    body: {
                        __html: response.data.html
                    }

                })
            })
    }

}

export default About;