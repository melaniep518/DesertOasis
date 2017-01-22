import React from 'react';

const IndividualMarket = React.createClass({
	render() {
		return(
			<div>
				<p>Hello from: <strong>{this.props.marketName}</strong></p>
				<p>Located at: <strong>{this.props.marketAddress}</strong></p>
			</div>
		)
	}
});

export default IndividualMarket;