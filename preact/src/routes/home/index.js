import { h } from 'preact';
import style from './style';
import { SkillList, Skill } from './skill-list';

const Home = () => (
	<div class="mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">

<section class="welcome section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<header
					class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--primary mdl-color-text--white">
					<i class="material-icons">home</i>
				</header>
				<div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
					<div class="mdl-card__supporting-text">
						<h4>Welcome</h4>
						<p>We are a team from hungary specialized in modern real time web technology. We specialize in R&D projects
							and streaming platforms.</p>
					</div>
				</div>
			</section>

			<section class="skills section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<div class="mdl-card mdl-cell mdl-cell--12-col">
					<div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
						<h4 class="mdl-cell mdl-cell--12-col">Skills</h4>
						<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
							<div class="centered-circle section__circle-container__circle mdl-color--primary">
								<i class="material-icons mdl-color-text--primary-contrast">settings</i>
							</div>
						</div>
						<div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
							<h5>Developing Node.js microsvervices</h5>
							Designing and managing microservice architectures.
						</div>
						<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
							<div class="centered-circle section__circle-container__circle mdl-color--primary">
								<i class="material-icons mdl-color-text--primary-contrast">cloud</i>
							</div>
						</div>
						<div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
							<h5>Deploying services on the cloud</h5>
							Dockerizing applications and deploying them on cloud services.
						</div>

						<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
							<div class="centered-circle section__circle-container__circle mdl-color--primary">
								<i class="material-icons mdl-color-text--primary-contrast">people</i>
							</div>
						</div>
						<div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
							<h5>Building peer to peer systems</h5>
							Real time communication systems with peer to peer focus.
						</div>

						<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
							<div class="centered-circle section__circle-container__circle mdl-color--primary">
								<i class="material-icons mdl-color-text--primary-contrast">videocam</i>
							</div>
						</div>
						<div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
							<h5>Creating streaming solutions</h5>
							Peer to peer multimedia streaming solutions.
						</div>
					</div>
				</div>
			</section>

		<section
				style="width: 100vw;"
				class="mdl-grid mdl-shadow--2dp mdl-color--primary mdl-color-text--primary-contrast project-banner mdl-color--primary-dark">
			
			<h3 style="
			width: 100%; text-align:center;" class="">Projects</h3>
			</section>

			<section class="project skills section--center mdl-grid  ">
				<div
					class="mdl-card mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col--mobile mdl-cell--12-col--tablet mdl-shadow--2dp">
					<div class="mdl-card__title"
						style="min-height: 200px; background-image: url('https://st4.depositphotos.com/3170777/20886/v/600/depositphotos_208860658-stock-video-flat-dynamic-design-video-backdrop.jpg')">
						<h2 class="mdl-card__title-text ">Vivien</h2>
					</div>
					<div class="mdl-card__supporting-text mdl-color-text--grey-700">
						<p>
							We have been asked by a leading R&D company to create a next generational kiosk system that can provide
							teleperesence experience both on kiosk endpoints and on the web.
						</p>
						<p>
							The system was designed to be used by multiple service provider companies.
							We were given user stories and from that we have created a full system architecture design and interface
							design which we implemented.
						</p>

					</div>
					<div class="mdl-card__actions mdl-card--border">
						<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							More
						</a>
					</div>
				</div>

				<div
					class="mdl-card mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col--mobile mdl-cell--12-col--tablet  mdl-shadow--2dp">
					<div class="mdl-card__title"
						style="min-height: 200px; background-image: url('https://s3.envato.com/files/120334242/Preview%20image%20set/indigo-cyan.png')">
						<h2 class="mdl-card__title-text">Extracting camera controls</h2>
					</div>
					<div class="mdl-card__supporting-text mdl-color-text--grey-700">
						<p>
							We have received a request from a hardware manufacturer to help them extract control information from a
							movie camera to be able to integrate it into their own controllers.
						</p>
					</div>
				</div>
			</section>

			<section class="project skills section--center mdl-grid ">
				<div
					class="mdl-card mdl-cell mdl-cell--12-col--mobile mdl-cell--12-col--tablet mdl-cell--6-col-desktop mdl-shadow--2dp">
					<div class="mdl-card__title"
						style="min-height: 200px; background-image: url('https://s3.envato.com/files/120334242/Preview%20image%20set/indigo-cyan.png')">
						<h2 class="mdl-card__title-text">Torrent based streaming solution</h2>
					</div>
					<div class="mdl-card__supporting-text mdl-color-text--grey-700">
						<p>
							We have createad a multi platform application to stream videos from custom torrent feeds. The application
							collects meta data from public databases and displays information about the available videos.
						</p>

						<p>
							It also support real time video synchronization between multiple peers creating a shared watching
							experience.
						</p>
					</div>
				</div>
				<div
					class="mdl-card mdl-cell mdl-cell--12-col--mobile mdl-cell--12-col--tablet mdl-cell--6-col-desktop mdl-shadow--2dp">
					<div class="mdl-card__title"
						style="min-height: 200px; background-image: url('https://st4.depositphotos.com/3170777/20886/v/600/depositphotos_208860658-stock-video-flat-dynamic-design-video-backdrop.jpg')">
						<h2 class="mdl-card__title-text">WebRTC videochat platform with payments</h2>
					</div>
					<div class="mdl-card__supporting-text mdl-color-text--grey-700">
						<p>
							We have implemented a WebSocket based chat and WebRTC based video chat. Additionally we implemented
							payment systems with different payment processors. We have integrated the payment processors API to custom
							permission system and content management system.
						</p>
						<p>
							The system was designed to be used by multiple service provider companies.
							We were given user stories and from that we have created a full system architecture design and interface
							design which we implemented.
						</p>

					</div>
					<div class="mdl-card__actions mdl-card--border">
						<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							More
						</a>
					</div>
				</div>
		</section>


			<section class="section--footer mdl-color--white mdl-grid mdl-shadow--2dp">
				<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
					<div class="centered-circle section__circle-container__circle mdl-color--primary section__circle--big">
						<i class="material-icons mdl-color-text--primary-contrast">school</i>
					</div>
				</div>
				<div class="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
					<h5>Peek in the lab</h5>
					We are focused on the bleeding edge, check out what we are cooking.
				</div>
				<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
					<div class="centered-circle ssection__circle-container__circle mdl-color--primary section__circle--big">
						<i class="material-icons mdl-color-text--primary-contrast">settings</i>
					</div>
				</div>
				<div class="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
					<h5>One of us</h5>
					Want to be part of a well oiled remote team? Check out our open poitions.
				</div>
			</section>
	</div>
);

export default Home;
