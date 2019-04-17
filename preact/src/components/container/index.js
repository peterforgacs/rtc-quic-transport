import { h, Component } from 'preact';

class Container extends Component {
	render(){

		let children = this.props.children.map(children => children);
		return (
			<div id="app" class="mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.deep_purple-pink.min.css" />
				{ children }
			</div>
			</div>
		)
	}
}

export default Container;