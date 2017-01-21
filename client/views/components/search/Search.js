import React from 'react';
import { Link } from 'react-router';

const Search = React.createClass({
	render() {
		return(
			<div>
				<h1>Search</h1>
				<p><Link to='/'>Go Home</Link></p>
			</div>
		)
	}
});

export default Search;