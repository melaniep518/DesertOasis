import React from 'react';
import { Link } from 'react-router';
import '../../../styles/welcome/welcome.css';

const Welcome = React.createClass({
	render() {
		return(
			<div>
				<div className="welcome-container">	
					<div className="content-container">
						<div className="find-oasis-button-container">
								<Link to='/search'>
									<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
									  Find An Oasis
									</button>
								</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default Welcome;