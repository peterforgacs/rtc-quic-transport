import { Link } from "preact-router/match";

const Header = () => (
  <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
    <div class="mdl-layout--large-screen-only mdl-layout__header-row" />
    <div class="mdl-layout--large-screen-only mdl-layout__header-row">
      <h3>Sexy Buddha</h3>
    </div>
    <div class="mdl-layout--large-screen-only mdl-layout__header-row" />
    <div class=" mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark mdl-js-ripple-effect--ignore-events">
      <Link activeClassName="is-active" class="mdl-layout__tab" href="/">
        HOME
      </Link>
      <Link activeClassName="is-active" class="mdl-layout__tab" href="/lab">
        LAB
      </Link>
      <Link activeClassName="is-active" class="mdl-layout__tab" href="/jobs">
        JOBS
      </Link>
      <button
        onClick={() =>  window.location.href = 'mailto:hello@sexybuddha.hu'}
        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
        id="contact-button"
      >
        <i class="material-icons" role="presentation">
          email
        </i>
        <span class="visuallyhidden">Contact</span>
      </button>
      <div class="mdl-tooltip" data-mdl-for="contact-button">
        Say Hello!
      </div>
    </div>
  </header>
);

export default Header;
