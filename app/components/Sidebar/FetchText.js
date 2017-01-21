import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FetchText extends Component {
    constructor(props) {
        super(props);
        this.fetchTextFromRemote = this.fetchTextFromRemote.bind(this);
    }
    fetchTextFromRemote() {
        this.props.fetchRandomText();
    }

    setLength() {
        const lineLength = ReactDOM.findDOMNode(this.refs.lineLengthField).value.trim();

        const pat = /^[0-9]+$/;
        if(!lineLength ||  !pat.test(lineLength)) {
          alert('Enter valid number');
          ReactDOM.findDOMNode(this.refs.lineLengthField).value='';
        } else {
           this.props.setLineLength(lineLength);
           return;
        }
    }

    render() {
        return (<div className="row title-area">

            <div className="input-field">
            <div className="row lineLengthField" >
                 <div className="col s8">
                      <input defaultValue={this.props.maximumLineLength} ref="lineLengthField" type="text" className="line-length" />
                </div>
                <div className="col s4">
                <a className=" white-text waves-effect waves-light btn blue" onClick={this.setLength.bind(this)}>
                <i className="material-icons left">done</i>Save</a>
                </div>
                </div>
                <label className="active white-text" >Line Length</label>
            </div>

            <a href="#" onClick={this.fetchTextFromRemote} className=" waves-effect waves-light justify-btn white blue-text btn-large center-align ">
   Justify Text</a>
        </div>
        );
    }
}

FetchText.propTypes = {
        fetchRandomText: React.PropTypes.func.isRequired
    };

export default FetchText;
