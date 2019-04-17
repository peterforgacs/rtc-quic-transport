import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    	<link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css" />
		
		
		<header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
			<div class="mdl-layout--large-screen-only mdl-layout__header-row">
			</div>
			<div class="mdl-layout--large-screen-only mdl-layout__header-row">
				<h3>Sexy Buddha</h3>
			</div>
			<div class="mdl-layout--large-screen-only mdl-layout__header-row">
			</div>
			<div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
				<Link activeClassName={style.active} href="/">HOME</Link>
				<Link activeClassName={style.active} href="/">LAB</Link>
				<Link activeClassName={style.active} href="/">JOBS</Link>
				<a href="../index.html" class="mdl-layout__tab is-active">HOME</a>
				<a href="../lab/gui/index.html" class="mdl-layout__tab">LAB</a>
				<a href="#rtc-quic-transport-demo" class="mdl-layout__tab">JOBS</a>
				<button
					class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
					id="contact-button">
					<i class="material-icons" role="presentation">email</i>
					<span class="visuallyhidden">Contact</span>
				</button>
				<div class="mdl-tooltip" data-mdl-for="contact-button">
					Say Hello!
				</div>
			</div>
	</header>
	</div>
);

export default Header;
