import React from 'react'
import $ from 'jquery'

const MarketContainer = React.createClass({
	getInitialState(){
		return({lat:'', lng:'', marketName:'',market:[]})
	},
	componentDidMount(){
		$.ajax({
			url:`/api/user/username/${this.props.user}`
		})
		.done(data => console.log(data))
	},
	render() {
		console.log(this.props.user)
		return(
			<div>
				<ul>

				</ul>
			</div>
		)
	}
});

export default MarketContainer;