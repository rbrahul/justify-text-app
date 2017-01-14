import React, { Component } from 'react';


class Preloader extends Component {

    render() {
        console.log("Internet connectivity : "+ this.props.noInternetConnection);
        return (<div className="text-center preloader">
            <img src="./../../src/images/bars.svg" className="preloader-img" />
            {
                this.props.noInternetConnection &&
                 <p className="internet-status"> No Internet Connectivity</p>
            }
        </div>
        );
    }
}

export default Preloader;