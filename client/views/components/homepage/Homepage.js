//IMPORT MODULES
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//IMPORT COMPONENTS 
import SnapBudget from './SnapBudget';
import CashBudget from './CashBudget';
import MarketInfo from './MarketInfo';

//IMPORT CSS
import '../../../styles/homepage/homepage.css';

//BUILD COMPONENT
const Homepage = React.createClass({
	getInitialState(){
		return(
			{
				open: false,
				lat:'', 
				lng:'',
				marketName:'',
				markets:[], 
				data:null,
				name: ""
			}
		)
	},
	componentWillMount() {
		injectTapEventPlugin();
	},
	componentDidMount(){
		var that=this
		$.ajax({
			url:`/api/user/username/${that.props.params.username}`
		})
		.done(data => {
			return (
				that.setState({data:data, lat:data, markets: data.Markets})
			)
		})
	},
	handleOpen() {
    this.setState({open: true});
  },
  handleClose() {
    this.setState({open: false});
  },
	generateMarkets() {
		if (this.state.markets) {
			return(
				<div>
			{this.state.markets.map( function (market, index) {
				return(
					<div key={market.id}>
						<MarketInfo 
							info={market}/>
					</div>
				)
			})}
			</div>
			)
		} else {
			return(
				<div>
					<button>Search For Markets</button>
				</div>
			)
		}
	},
	render() {
		
		const actions = [
      <FlatButton
        label="CLOSE"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
		return(
			    	<div className="homepage-container">

						<MuiThemeProvider>
			    		<div>
			        
			        <Dialog
			          title="SEARCH FOR A MARKET"
			          actions={actions}
			          modal={false}
			          open={this.state.open}
			          onRequestClose={this.handleClose}
			          autoScrollBodyContent={true}
			          autoDetectWindowHeight={true}
			        >
			          <div className="modal-sample">
			          	<img src="https://s25.postimg.org/4m7tsrc9r/modal_map_image.png" />
			          </div>
			        </Dialog>
      			</div>
      		</MuiThemeProvider>

      				<div className="card card-1">
			    			<div className="welcome">
			    				<div className="welcome-left">
			    					<img src="https://s25.postimg.org/qzfkfkd7j/vic_headshot_400px_wide.jpg" />
			    				</div>
			    				<div className="welcome-right">
			    					Welcome back, Victor!
			    				</div>
			    			</div>
			    		</div>

			    		<div className="card card-1">
			    			
			    			<SnapBudget />

			    			<CashBudget />

			    		</div>

			    		<div className="card card-1">
			    			<div className="find-new-markets" onClick={this.handleOpen}>
			    				FIND NEW MARKETS
			    			</div>
			    		</div>

			    		<div className="card card-1">
			    			<div className="markets">

			    				{this.generateMarkets()}

			    			</div>
			    		</div>

			    	</div>
		)
	}
})

export default Homepage;