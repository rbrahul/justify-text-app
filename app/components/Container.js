import React, { Component } from 'react';

import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Preloader from './Preloader.js';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = { showPreloader: false, noInternetConnection: false };

	}
	hasNet() {
		this.setState({ noInternetConnection: !navigator.onLine});
	}

	componentWillMount() {
		this.hasNet();
	}

	render() {

		return (
			<div className="row row-without-margin-bottom">
				{
					(this.state.showPreloader || this.state.noInternetConnection) &&
					<Preloader noInternetConnection={this.state.noInternetConnection} />
				}

				<Sidebar />
				<MainContent />
			</div>
		);
	}
}

export default Container;
