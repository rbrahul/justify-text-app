import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Preloader from './Preloader.js';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = { noInternetConnection: false };
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
					(this.props.showPreloader || this.state.noInternetConnection) &&
					<Preloader noInternetConnection={this.state.noInternetConnection} />
				}

				<Sidebar />
				<MainContent />
			</div>
		);
	}
}



function mapStateAsProps(state) {
    return {
        showPreloader: state.justifyText.showPreloader
    };
}

function mapDispatchAsProps(dispatch) {
    return {
    }
}

export default Container = connect(mapStateAsProps, mapDispatchAsProps)(Container);
