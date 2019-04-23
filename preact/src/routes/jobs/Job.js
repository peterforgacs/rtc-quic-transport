import { h, Component } from 'preact';
import { JobChip } from './JobChip';
import { JobDialog } from './JobDialog';

export class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.uuidv4(),
      dialog: null
    };
  }

  uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  componentDidMount() {
    this.setState(
      () => ({ dialog: document.getElementById(this.state.id) }),
      this.polyfillDialog.bind(this)
    );
  }

  polyfillDialog() {
    if (this.state.dialog) {
      if (!this.state.dialog.showModal) {
        console.log("Registering showmodal");
        dialogPolyfill.registerDialog(this.state.dialog);
      }

      this.state.dialog
        .querySelector(".close")
        .addEventListener("click", () => {
          this.state.dialog.close();
        });
    }
  }

  render() {
    const { title, description, chips, applyAt, icon, children } = this.props;
    const { id } = this.state;
    const hasChips = chips && chips.length > 0;

    return (
      <span>
        <section class="job section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <header class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white mdl-color--primary">
            <i class="material-icons">{icon}</i>
          </header>
          <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div class="mdl-card__supporting-text">
              <h4>{title}</h4>
              <p>{description}</p>
              {hasChips ? chips.map(chip => <JobChip text={chip} />) : null}
            </div>
            <div class="mdl-card__actions">
              <a
                onClick={() => this.state.dialog.showModal()}
                href="#"
                class="mdl-button"
              >
                Details
              </a>
              <a href={applyAt} class="mdl-button">
                Apply
              </a>
            </div>
          </div>
        </section>
        <JobDialog id={id} title={title} applyAt={applyAt}>
          {children}
        </JobDialog>
      </span>
    );
  }
}
