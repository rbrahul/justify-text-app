import React, { Component } from 'react';

class HistoryCardItem extends Component {
	constructor(props) {
		super(props);
	}
	splitText(text){
		const cardStringLimit = 100;
		const subString = text.substring(0,cardStringLimit);
		const lastPositionOfSpace = subString.lastIndexOf(' ');
		return subString.substring(0,lastPositionOfSpace).trim()+'...';

	}
	restoreHistoryItem(e,id) {
		this.props.restoreText(id);
	}
	deleteHistoryItem(e,id) {
		const confirmDelete = confirm('Do you really want to delete this history?');
		if(confirmDelete) {
			this.props.deleteText(id);
		}
		
	}
    render() {
		const id = this.props.id;
        return(<div className="card horizontal blue">
					<div className="card-stacked">
						<div className="card-content max-lines">
							<p className="white-text">{this.splitText(this.props.text)}</p>
						</div>
						<div className="card-action card-small-action">
							<a href="#" title="Delete" className="white-text" onClick={this.deleteHistoryItem.bind(this,null,id)}>
								<i className="material-icons">delete</i>
							</a>
							<a href="#" title="Restore" className="white-text" onClick={this.restoreHistoryItem.bind(this,null,id)}>
								<i className="material-icons">repeat</i>
							</a>
						</div>
					</div>
				</div>);
    }
} 

export default HistoryCardItem;
