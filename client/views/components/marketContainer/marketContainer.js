import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router'

const MarketList = (props) => {

}

const MarketContainer = React.createClass({
	getInitialState(){
		return({lat:'', lng:'',marketName:'',market:[],username:this.props.user, data:null,expanded: false})
	},
	componentDidMount(){
		var that=this
		$.ajax({
			url:`/api/user/username/${that.props.user}`
		})
		.done(data => {
			that.setState({data:data, lat:data})
		})
	},
	expand: function () {
		const expanded = this.state.expanded
		this.setState({expanded: !expanded})
	},
	render() {
		const expanded = this.state.expanded
		let data = []
		console.log(this.props.user)
		console.log(this.state.data)
		if(this.state.data){
		return(
			<div>
				<ul>
					{
						this.state.data.Markets.map((val,index) =>{
							this.setState({lat:val.lat,lng:val.lng})
							return (
								<div>
								<li onClick={this.expand} key={index}>{val.name}</li> 
									{expanded &&
										<div>
										Woohoo!
										</div>
									}
								</div>
							)	
						})
				  }
				</ul>
			</div>
		)
	} else {
		return(
			<div>
				...Loading
			</div>
			)
	}
 	}
});

export default MarketContainer;