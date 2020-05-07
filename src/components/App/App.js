import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// App component renders a SearchBar component and a BusinessList component
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1> ravenous </h1>
				<BusinessList />
				<SearchBar />
			</div>
		);
	}
}

export default App;
