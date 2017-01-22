import React from 'react';
import { Chart } from 'react-google-charts';

const SnapBudgetChart = React.createClass({
	getInitialState() {
		return(
			{
				snapBudget: "",
				snapSpent: "",
				snapRemaining: ""
			}
		)
	},
	snapBudgetHandleChange(event) {
		this.setState({ snapBudget: event.target.value })
	},
	snapSpentHandleChange(event) {
		this.setState({ snapSpent: event.target.value })
	},
	updateSnap() {
		var budget = this.state.snapBudget;
		var spent = this.state.snapSpent;
		this.setState({ snapBudget: this.state.snapBudget, snapSpent: this.state.snapSpent, snapRemaining: Math.round((snapBudget - snapSpent) * 100) / 100 })
		console.log(this.state.snapRemaining)
	},
	render() {
		return(
			<div>
			
			<h2>{this.state.snapBudget}</h2>
			<h2>{this.state.snapSpent}</h2>

				<div className={"budget-container"}>
			    <div className="snap-container">
			    	<div className="snap graph">
				      <Chart
				        chartType="PieChart" 
				        data={[['Allocation', 'Dollar Amount'], [`Spent: $${this.state.snapSpent}`, {v: this.state.snapSpent, f: `$${this.state.snapSpent}`}], [`Remaining: $${this.state.snapRemaining}`, {v: this.state.snapRemaining, f: `$${this.state.snapRemaining}`}]]}
				        options={{ title: 'My SNAP Budget', pieHole: 0.4 }}
				        graph_id="ScatterChart"
				        width="100%"
				        height="300px"
				        legend_toggle
				       />
			      </div>
			      
			      <form onSubmit={this.updateSnap}>
				      
				      <div className="snap-title">
				      	SNAP BUDGET
				      </div>
				      
				      <div className="set-snap-budget">
				      	
				      	<div className="snap=budget-header">
				      		Set SNAP Budget
				      	</div>
				      	
				      	<div className="snap-budget-input">
				      		<input type="text" placeholder="SNAP BUDGET" onChange={this.snapBudgetHandleChange}></input>
				      	</div>
				      	
				      	<div className="snap=budget-spent">
				      		SNAP Budget Spent
				      	</div>
				      	
				      	<div className="snap-spent-input">
				      		<input type="text" placeholder="SNAP SPENT" onChange={this.snapSpentHandleChange}></input>
				      	</div>
				      	
				      	<div className="snap-submit">
				      		<button type="submit" >UPDATE</button>
				      	</div>
			      	
			      	</div>

				    </form>

			    </div>
			  </div>
			</div>
		)
	}
});

export default SnapBudgetChart;