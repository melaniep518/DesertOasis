//IMPORT MODULES
import React from 'react';

//IMPORT CSS
import '../../../styles/welcome/login.css';

//BUILD COMPONENT
const Login = React.createClass({
	getInitialState() {
		return(
		{
			userid: "",
			password: ""
		}
		)
	},
	handleChange(input, event) {
		if (input === "userid") {
			this.setState({ userid: event.currentTarget.value })
		} else if (input === "password") {
			this.setState({ password: event.currentTarget.value })
		}
	},
	render() {
		return(
			<div>
				<div className="login-inputs-container">
					<p>
						<input type="text" 
							placeholder="User Id" 
							onChange={this.handleChange.bind(this, "userid")}>
						</input>
					</p>
				</div>
				<div className="login-inputs-container">	
					<p>
						<input type="password" 
							placeholder="Password" 
							onChange={this.handleChange.bind(this, "password")}>
						</input>
					</p>
				</div>

				<div className="login-button-container">
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
					  LOGIN
					</button>
				</div>

			</div>
		)
	}
});

export default Login;