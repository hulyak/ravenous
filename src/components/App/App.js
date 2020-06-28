//Import React and ReactDOM libraries
import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
	imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
	name: 'Luca Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90
};
//list of businesses
const businesses = [ business, business, business, business, business, business ];
// App component renders a SearchBar component and a BusinessList component
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>ravenous</h1> 
				<SearchBar />
				{/* add a businesses property to component */}
				<BusinessList businesses={businesses} /> {' '}
			</div>
		);
	}
}

export default App;
