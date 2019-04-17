import { h, Component } from 'preact';

class Container extends Component {
	render(){

		let children = this.props.children.map(children => children);
		return (
			<div id="app" class="mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				{ children }
			</div>
			</div>
		)
	}
}

export default Container;