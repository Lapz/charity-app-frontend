import React, {Component} from 'react';
// const bulma = require("bulma");

class Contact extends Component {
    render() {
        return (

            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter">

                    <form>
                        <label className="label">Name</label>
                        <p className="control">
                            <input className="input" type="text" placeholder="John Applseed"/>

                        </p>

                        <label className="class">Email</label>
                        <p className="control">
                            <input className="input" type="text" placeholder="John.Applseed@example.com"/>
                        </p>
                        <label className="label">Message</label>
                        <p className="control">
                            <textarea className="textarea" placeholder="Textarea"></textarea>
                        </p>

                        <div className="control">
                            <p className="control">
                                <button className="button is-primary">Submit</button>
                            </p>

                        </div>

                    </form>
                </div>
            </div>

        );
    }
}

// bulma()(Contact)
export default Contact;