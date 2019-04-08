import React,{Component} from 'react'
import '../static/index.css';
export default class Header extends Component {
	render () {
		return (
				<nav className="uk-navbar-container" uk-navbar="true" style={{backgroundColor: '#162f38'}}>
				<a className="uk-navbar-item uk-logo" href="#"><h2 className="uk-text-bold uk-text-capitalize">Bike->Store</h2></a>
				    <div className="uk-navbar-right">
				        <ul className="uk-navbar-nav">
				            <li className="uk-active"><a href="#" className="uk-text-primary">Home</a></li>
				            <li><a href="#" className="uk-text-muted">About</a></li>
				            <li><a href="#" className="uk-text-muted">Contact</a></li>
				        </ul>
			        </div>
			    </nav>
			)
	}
}