
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <center>
                    <div style={{ border: 'double', width: '260px'}}>
                        <div>
                            <img src="/assets/me.jpg"
                                style={{
                                    height: '300px',
                                    width: '250px',
                                    border: 'double'
                                }} />
                        </div>
                        <div>
                            Designation : Trainee
                    </div>
                    </div>
                </center>
            </div>
        )
    }
}


About.defaultProps = {

}

About.propTypes = {

}