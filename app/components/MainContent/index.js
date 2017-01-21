import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextView from './TextView';

class MainContent extends Component {
	render() {
		return (<div className="col s8 main">
			{
				this.props.justifiedText.length ?
					<TextView text={this.props.justifiedText} /> : null
			}

		</div>);
	}
}

function mapStateAsProps(state) {
	return {
		justifiedText: state.justifyText.justifiedText
	};
}

function mapDispatchAsProps() {
	return {
	};
}

export default connect(mapStateAsProps, mapDispatchAsProps)(MainContent);

