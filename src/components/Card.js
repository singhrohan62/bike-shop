import React,{Component} from 'react'
import '../static/index.css'

const imgsrc = "https://images-na.ssl-images-amazon.com/images/I/51ruO4lkdHL.jpg"

export default class Card extends Component {
	
	constructor() {
		super();
		this.renderColourBoxes = this.renderColourBoxes.bind(this);
	}

	renderColourBoxes () {
		if(this.props.cycle.Colours === "N/A") {
			return <p>{this.props.cycle.Colours}</p>
		} else {
			 return this.props.cycle.Colours.map((object,i) => {
			 	return (
			 		<div className="colour-box uk-padding" key={i} style={{backgroundColor: `${object}`}}></div>
			 	);
			 })
		}
	}

	render () {
		return (
			    <div className="uk-card uk-card-default">
			    	<div className="uk-card-media-top">
				                <img src={imgsrc} alt="bike-image"/>
				    </div>
				    <div className="uk-card-body" style={{backgroundColor: '#17252a', color:'#fff'}}>
				    	<div className="uk-card-title">
					    	<h3 style={{margin: '0', color:'#fff'}}>{this.props.cycle.Brand}</h3>
					    	<h4 style={{margin: '0', color:'#fff'}}>{this.props.cycle.Name}</h4>
					    	<hr/>
					    </div>
				        <p>Price: {this.props.cycle.Price}</p>
				        <p>In Stock: {this.props.cycle.Quantity}</p>
				        <p>Colours:</p>
				        <div className="uk-flex">
				        	{this.renderColourBoxes()}
				        </div>
				    </div>
				    <div className="uk-card-footer uk-text-center" style={{backgroundColor: '#17252a'}}>
				        <button href="#" className="uk-button uk-button-default uk-text-primary">full specs</button>
				    </div>
			    </div>
			)
	}
}