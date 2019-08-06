import React, { Component } from 'react';
import './App.scss';
import Home from './components/home'
import Mask from '@/baseComponent/outBox/mask'
class App extends Component {
	render() {
		return (
			<div className="App">
				<Home />
				<div>
				<Mask />
				</div>
			</div>
		);
	}
}
export default App;
