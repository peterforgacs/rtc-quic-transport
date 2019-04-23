import { h, Component } from 'preact';
import style from './style.css';

const JobChip = props => (
  <span class="mdl-chip">
    <span class="mdl-chip__text">{props.text}</span>
  </span>
);

const JobDialog = (props) => (
  <dialog id={props.id} class="mdl-dialog">
    <h4 class="mdl-dialog__title">{props.title}</h4>
    <div class="mdl-dialog__content">
      { props.children }
    </div>
    <div class="mdl-dialog__actions">
      <a href={props.applyAt} type="button" class="mdl-button">Apply</a>
      <button type="button" class="mdl-button close">Close</button>
    </div>
  </dialog>
);

class Job extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: this.uuidv4(),
      dialog: null
     };
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  componentDidMount() {
    this.setState( () => ({ dialog: document.getElementById(this.state.id)}), this.polyfillDialog.bind(this));
  }

  polyfillDialog() {
    if (this.state.dialog){
      if (!this.state.dialog.showModal) {
        console.log('Registering showmodal');
        dialogPolyfill.registerDialog(this.state.dialog);
      }

      this.state.dialog.querySelector('.close').addEventListener('click', () => {
        this.state.dialog.close();
      });
    }
  }

  render(){
    const { title, description, chips, applyAt, icon, children } = this.props;
    const { id, dialog } = this.state;
    const hasChips = chips && chips.length > 0;

    return (
    <span>
    <section class="job section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header
        class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white mdl-color--primary">
        <i class="material-icons">{ icon }</i>
      </header>
      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>{ title }</h4>
          <p>{ description }</p>
          { hasChips ? chips.map(chip => <JobChip text={chip} />) : null}
        </div>
        <div class="mdl-card__actions">
          <a onClick={() => this.state.dialog.showModal()} href="#" class="mdl-button">Details</a>
          <a href={applyAt} class="mdl-button">Apply</a>
        </div>
      </div>
    </section>
    <JobDialog id={id} title={title} applyAt={applyAt}>
      { children }
    </JobDialog>
    </span>
    )
  }
}


const Jobs = () => (
  <span>

    <Job
    title="PHP Developer"
    description="Looking for an experienced PHP developer for maintaining and developing a payment platform."
    icon="settings"
    chips={['Senior', 'Full time', 'Remote']}
    applyAt="https://forms.gle/jEGAscY8873F3GS78">
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
    </Job>

    <Job
    title="Node.js Developer"
    description="Looking for an experienced Node.js developer to join the team in a real time video application."
    icon="settings"
    chips={['Senior', 'Full time', 'Remote']}
    applyAt="https://forms.gle/eiSczrUvUdCGw7hHA">
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
    </Job>

    <Job
    title="Virtual Assistant"
    description="Looking for a virtual assistant to help with the office errands."
    icon="assistant"
    chips={['Hungarian',  '4 hours', 'Remote']}
    applyAt="https://forms.gle/DXDaDAeur8XhBKBe7">
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
      </Job>

  </span>
);

export default Jobs;
