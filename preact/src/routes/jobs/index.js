import style from './style.css';

const Jobs = () => (
  <span>
    <section class="job section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white mdl-color--primary">
        <i class="material-icons">settings</i>
      </header>
      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>PHP Developer</h4>
          <p>
            Looking for an experienced PHP developer for maintaining and
            developing a payment platform.
          </p>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Senior</span>
          </span>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Full time</span>
          </span>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Remote</span>
          </span>
        </div>
        <div class="mdl-card__actions">
          <a id="job-php-details-button" href="#" class="mdl-button">
            Details
          </a>
          <a href="https://forms.gle/jEGAscY8873F3GS78" class="mdl-button">
            Apply
          </a>
        </div>
      </div>
    </section>

    <dialog id="job-php-details" class="mdl-dialog">
      <h4 class="mdl-dialog__title">PHP Developer</h4>
      <div class="mdl-dialog__content">
        <p>
          Looking for an experienced PHP developer for maintaining and
          developing a payment platform.
        </p>

        <p>
          Your job would be to work with a team of developers to implement
          various cms features for an amember based payment system.
        </p>
        <h4>Requirements</h4>
        <ul>
          <li>At least 3 years of professional experience</li>
          <li>Strong PHP knowledge</li>
          <li>Experience with amember framework</li>
        </ul>
      </div>
      <div class="mdl-dialog__actions">
        <a
          href="https://forms.gle/jEGAscY8873F3GS78"
          type="button"
          class="mdl-button"
        >
          Apply
        </a>
        <button type="button" class="mdl-button close">
          Close
        </button>
      </div>
    </dialog>

    <section class="job section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white mdl-color--primary">
        <i class="material-icons">settings</i>
      </header>
      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>Node.js Developer</h4>
          <p>
            Looking for an experienced Node.js developer to join the team in a
            real time video application.
          </p>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Senior</span>
          </span>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Full time</span>
          </span>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Remote</span>
          </span>
        </div>
        <div class="mdl-card__actions">
          <a id="job-node-details-button" href="#" class="mdl-button">
            Details
          </a>
          <a href="https://forms.gle/eiSczrUvUdCGw7hHA" class="mdl-button">
            Apply
          </a>
        </div>
      </div>
    </section>

    <dialog id="job-node-details" class="mdl-dialog">
      <h4 class="mdl-dialog__title">Node.js Developer</h4>
      <div class="mdl-dialog__content">
        <p>
          Looking for an experienced Node.js developer developing a real time
          video application.
        </p>

        <p>
          Your job would be to work with a team of developers to implement
          various features, fix bugs.
        </p>
        <h4>Requirements</h4>
        <ul>
          <li>At least 3 years of professional experience</li>
          <li>Strong Javascript knowledge</li>
        </ul>

        <h4>Nice to have</h4>
        <ul>
          <li>Knowledge of React</li>
          <li>Experience in building Node.js microservices</li>
        </ul>
      </div>
      <div class="mdl-dialog__actions">
        <a
          href="https://forms.gle/eiSczrUvUdCGw7hHA"
          type="button"
          class="mdl-button"
        >
          Apply
        </a>
        <button type="button" class="mdl-button close">
          Close
        </button>
      </div>
    </dialog>

    <section class="job section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white mdl-color--primary">
        <i class="material-icons">assistant</i>
      </header>
      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>Virtual Assistant</h4>
          <p>
            Looking for a virtual assistant to help with the office errands.
          </p>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Hungarian</span>
          </span>

          <span class="mdl-chip">
            <span class="mdl-chip__text">4 hours</span>
          </span>

          <span class="mdl-chip">
            <span class="mdl-chip__text">Remote</span>
          </span>
        </div>
        <div class="mdl-card__actions">
          <a id="job-assistant-details-button" href="#" class="mdl-button">
            Details
          </a>
          <a href="https://forms.gle/DXDaDAeur8XhBKBe7" class="mdl-button">
            Apply
          </a>
        </div>
      </div>
    </section>

    <dialog id="job-assistant-details" class="mdl-dialog">
      <h4 class="mdl-dialog__title">Virtual Assistant</h4>
      <div class="mdl-dialog__content">
        <p>
          Looking for a virtual assistant to help with the organization of the
          company.
        </p>

        <h4>Requirements</h4>
        <ul>
          <li>Experience in working in an office environment </li>
          <li>Hungarian language</li>
          <li>English language</li>
        </ul>
      </div>
      <div class="mdl-dialog__actions">
        <a
          href="https://forms.gle/DXDaDAeur8XhBKBe7"
          type="button"
          class="mdl-button"
        >
          Apply
        </a>
        <button type="button" class="mdl-button close">
          Close
        </button>
      </div>
    </dialog>
  </span>
);

export default Jobs;
