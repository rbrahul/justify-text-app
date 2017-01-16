import React, { Component } from 'react';

class TextView extends Component {
    render() {
        return (<div className="row">
            <div className="col s12 ">
                <div className="card-panel white main-content">
                    <h4 className="header">Justified Text</h4>
                    <span className="passage" dangerouslySetInnerHTML={{__html: this.props.text}}>
                 </span>
                </div>
            </div>
        </div>);
    }
}

export default TextView;
