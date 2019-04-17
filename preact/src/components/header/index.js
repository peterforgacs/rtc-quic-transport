import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
		<div class="mdl-layout--large-screen-only mdl-layout__header-row">
		</div>
		<div class="mdl-layout--large-screen-only mdl-layout__header-row">
			<h3>Sexy Buddha</h3>
		</div>
		<div class="mdl-layout--large-screen-only mdl-layout__header-row">
		</div>
		<div class=" mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark mdl-js-ripple-effect--ignore-events">
			<Link class="mdl-layout__tab is-active" activeClassName={style.active} href="/">HOME</Link>
			<Link class="mdl-layout__tab" activeClassName={style.active} href="/lab">LAB</Link>
			<Link class="mdl-layout__tab" activeClassName={style.active} href="/jobs">JOBS</Link>
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
);

export default Header;
