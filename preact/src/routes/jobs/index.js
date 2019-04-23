import { h, Component } from "preact";
import style from "./style.css";
import { Job } from "./Job";

const Jobs = () => (
  <span>
    <Job
      title="PHP Developer"
      description="Looking for an experienced PHP developer for maintaining and developing a payment platform."
      icon="settings"
      chips={["Senior", "Full time", "Remote"]}
      applyAt="https://forms.gle/jEGAscY8873F3GS78"
    >
      <p>
        Looking for an experienced PHP developer for maintaining and developing
        a payment platform.
      </p>

      <p>
        Your job would be to work with a team of developers to implement various
        cms features for an amember based payment system.
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
      chips={["Senior", "Full time", "Remote"]}
      applyAt="https://forms.gle/eiSczrUvUdCGw7hHA"
    >
      <p>
        Looking for an experienced Node.js developer developing a real time
        video application.
      </p>

      <p>
        Your job would be to work with a team of developers to implement various
        features, fix bugs.
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
      chips={["Hungarian", "4 hours", "Remote"]}
      applyAt="https://forms.gle/DXDaDAeur8XhBKBe7"
    >
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