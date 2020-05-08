import React from 'react';
import './SearchBar.css';

// A SearchBar component to search for business
//https://www.yelp.com/developers/documentation/v3/business_search
const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
	// dynamically create the list items needed to display the sort options
	// to help future proof against potential changes to the Yelp API.
	//The method should iterate through the keys and values of the sortByOptions object and return a list item.
	//The list item elements should use the keys as an attribute, and the values as content.
	renderSortByOptions() {
		// To iterate through the object,start by accessing the keys of the sortByOptions object.
		//Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument.
		//Now that you have access to the keys, you’ll iterate through them using the map() method.
		return Object.keys(sortByOptions).map((sortByOption) => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}> {sortByOption} </li>;
		});
	}
	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" />
					<input placeholder="Where?" />
				</div>
				<div className="SearchBar-submit">
					<a href="">Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
