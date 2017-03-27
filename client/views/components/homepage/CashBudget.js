import React from 'react';
import $ from 'jquery';

//IMPORT CSS
import '../../../styles/homepage/homepage.css';

const CashBudget = React.createClass({
	getInitialState: function() {
    return ({
    			remaining: 0,
    			budget: 0,
    			spent: 0,
          expanded: false,
          info: null
        })
  },
  componentDidMount() {
  	var that = this;
  	$.ajax({
  		url: `/api/treasure/Vamosa`,
  		method: 'GET'
  	})
  	.then(function(treasure) {
  		that.setState({ budget: treasure.cashBudget, spent: treasure.cashSpent })
  		that.calculateRemaining();
  	})
  },
  calculateRemaining() {
  	this.setState({ remaining: this.state.budget - this.state.spent })
  },
  expand() {
    const expanded = this.state.expanded
    this.setState({expanded: !expanded})
  },
  budgetHandleChange(e) {
  	this.setState({ budget: e.currentTarget.value })
  	console.log(this.state.budget)
  },
   spentHandleChange(e) {
  	this.setState({ spent: e.currentTarget.value })
  	console.log(this.state.spent)
  },
  updateBudget() {
  	this.setState({ budget: this.state.budget })
  	console.log(this.state.budget)
  	console.log("SUBMIT BUTTON CLICK!")
  	this.calculateRemaining()
  },
	render() {
		var budget = this.state.budget;
		var spent = this.state.spent;
		const expanded = this.state.expanded;
		return(
			<div>

				<div className="cash">
					<div className="cash-top">
	  				<div className="cash-left">
	  					<img src="https://s25.postimg.org/rvtyulzhb/credit_card.png"
	  						alt="CASH BALANCE" />
	  				</div>
	  				<div className="cash-right">
	  					<div onClick={this.expand} className="cash-amount">
	  						${budget - spent}
	  					</div>
	  					<div className="cash-title">
	  						CASH BUDGET
	  					</div>
	  				</div>
  				</div>

  				{expanded && 

  				<div className="cash-bottom">
	  				<div className="cash-inputs-container">
	  					<div className="budget-inputs-container">
	  						
	  						<div className="budget-inputs-left">
	  							<div><input type="number" placeholder="MONTHLY BUDGET" ref="" onChange={this.budgetHandleChange}></input></div>
	  						</div>
	  						<div className="budget-inputs-right">
	  							<div><input type="number" placeholder="AMOUNT SPENT" ref="" onChange={this.spentHandleChange} /></div>
	  						</div>
	  							
	  					</div>
	  				</div>
	  			</div>

	  			}

  			</div>


			</div>
		)
	}
});

export default CashBudget;