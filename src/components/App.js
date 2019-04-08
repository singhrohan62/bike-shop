import React,{Component} from 'react'
import Header from './Header'
import Card from './Card'
import '../static/index.css'
import data from '../../data.json'

export default class App extends Component {

	constructor() {
		super();
		this.renderCard = this.renderCard.bind(this);
	}

	renderCard () {
		return (data.map((object,i) => {
					return (
						<div key={i} className="uk-padding">
							<Card cycle={object}/>
						</div>
						);
				}))
	}
	render () {
		return (
				<div className="uk-padding-remove">
					<Header/>
					<div className="first-section">
						<div className="uk-grid-small uk-child-width-1-3@m" uk-grid="true">
							{this.renderCard()}
						</div>
					</div>
				</div>
			)
	}
}