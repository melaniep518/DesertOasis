//IMPORT MODULES
import React from 'react';
import { Link } from 'react-router';

//IMPORT COMPONENTS
import Login from './Login';

//IMPORT CSS
import '../../../styles/welcome/welcome.css';

//BUILD COMPONENT
const Welcome = React.createClass({
	render() {
		return(
			<div>
				<div className="welcome-container">	
					<div className="content-container">
						
						<div>
							<div className="login-container">
								<Login />
							</div>
						</div>
						
						<div className="find-oasis-button-container">
								<Link to='/homepage'>
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