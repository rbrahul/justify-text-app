import React, { Component } from 'react';

class NoHistoryFoundMessage extends Component {
	constructor(props) {
		super(props);
	}
	
    render() {
        return(<div className="card horizontal blue">
					<div className="card-stacked">
						<div className="card-content max-lines">
							<p className="white-text">No history found.</p>
						</div>
					</div>
				</div>);
    }
} 

export default NoHistoryFoundMessage;
