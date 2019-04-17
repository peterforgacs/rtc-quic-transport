const Lab = () => (
	<span>

	<section id="welcome" class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
		<header
			class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white mdl-color--primary">
			<i class="material-icons">home</i>
		</header>
		<div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
			<div class="mdl-card__supporting-text">
				<h4>Welcome</h4>
				This experiment is showcasing how the new RTCQuicTransport can be used to send files between peers.
			</div>
			<div class="mdl-card__actions">
				<a href="#" class="mdl-button">Read more</a>
			</div>
		</div>
	</section>

<section id="transporter" class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
	<div class="demo-card-wide mdl-card mdl-cell--12-col mdl-tabs mdl-js-tabs">
		<div class="mdl-card__title">
			<h2 class="mdl-card__title-text">RTC QUIC Transporter</h2>
		</div>
		<div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary">
			<a href="#room" class="mdl-tabs__tab is-active">ROOM</a>
			<a href="#files" class="mdl-tabs__tab">FILES</a>
		</div>
		<div class="mdl-card__menu">
			<button id="misc-dropdown" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
				<i class="material-icons">more_vert</i>
			</button>
			<div class="mdl-tooltip" data-mdl-for="misc-dropdown">
				Misc
			</div>
		</div>

		<section id="room" class="mdl-tabs__panel demo-card-wide mdl-card mdl-cell--12-col is-active">
			<div class="mdl-card__supporting-text">
				Select a user from the list to establish the connection.
			</div>
			<div class="mdl-card__actions mdl-card--border">
				<ul class="demo-list-control mdl-list">
					<li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-avatar">person</i>
							Bryan Cranston
							<span class="user-state">
									<span class="mdl-chip mdl-chip">
											<span class="mdl-chip__text">ice gathering - complete</span>
									</span>

									<span class="mdl-chip mdl-chip">
											<span class="mdl-chip__text">ice transport - connected</span>
									</span>

									<span class="mdl-chip mdl-chip">
											<span class="mdl-chip__text">quic transport - connected</span>
									</span>

							</span>
						</span>

						<span class="mdl-list__item-secondary-action">
							<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
								<input type="checkbox" id="list-switch-1" class="mdl-switch__input" />
							</label>
						</span>
					</li>

					<li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-avatar">person</i>
							Aaron Paull
						</span>
						<span class="mdl-list__item-secondary-action">
							<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-2">
								<input type="checkbox" id="list-switch-2" class="mdl-switch__input" />
							</label>
						</span>
					</li>


					<li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-avatar">person</i>
							Bob Odenkirk
						</span>
						<span class="mdl-list__item-secondary-action">
							<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-3">
								<input type="checkbox" id="list-switch-3" class="mdl-switch__input" />
							</label>
						</span>
					</li>
				</ul>
			</div>
			<div class="mdl-card__actions mdl-card--border">
				<a id='room-invite-button' class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
					Copy Invite Link
				</a>
			</div>
		</section>

		<section id="files" class="mdl-tabs__panel demo-card-wide mdl-card mdl-cell--12-col">
			<div class="mdl-card__supporting-text">
				Select files to upload to the selected peer.
			</div>
			<div class="mdl-card__actions mdl-card--border">
				<ul class="demo-list-control mdl-list">
					<li class="mdl-list__item file1">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-icon">photo</i>
							some-long-name.png
						</span>

						<span class="file-size"> <span>0.3</span> of <span>1.25 MB</span></span>
						<div id="file-1-progress" class="mdl-progress mdl-js-progress"></div>
						<span class="file-speed">123 KB/s</span>
						<span class="file-controls mdl-list__item-secondary-action">
							<button id="resume-file-1-button"
								class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
								<i class="material-icons">play_arrow</i>
							</button>
							<div class="mdl-tooltip" data-mdl-for="resume-file-1-button">
								Resume
							</div>

							<button id="pause-file-1-button"
								class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
								<i class="material-icons">pause</i>
							</button>
							<div class="mdl-tooltip" data-mdl-for="pause-file-1-button">
								Pause
							</div>

							<button id="remove-file-1-button"
								class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
								<i class="material-icons">close</i>
							</button>
							<div class="mdl-tooltip" data-mdl-for="remove-file-1-button">
								Remove
							</div>

							<button id="download-file-1-button"
								class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
								<i class="material-icons">arrow_downward</i>
							</button>
							<div class="mdl-tooltip" data-mdl-for="download-file-1-button">
								Download
							</div>

							<button id="info-file-1-button"
								class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
								<i id="info-file-1-icon" class="material-icons">unfold_more</i>
							</button>
							<div class="mdl-tooltip" data-mdl-for="info-file-1-button">
								Details
							</div>
						</span>
					</li>
					<section id="stats-file" style="display: none">
						<h5>Packets</h5>
							<table class="mdl-data-table mdl-js-data-table">
								<thead>
									<tr>
										<th>Sent</th>
										<th>Received</th>
										<th>Max size</th>
										<th>Retransmitted</th>
										<th>Reordered</th>
										<th>Processed</th>
										<th>Dropped</th>
										<th>Lost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>0</td>
										<td>0</td>
										<td>0</td>
										<td>0</td>
										<td>0</td>
										<td>0</td>
										<td>0</td>
										<td>0</td>
									</tr>
								</tbody>
							</table>

							<h5>Blocked frames</h5>
								<table class="mdl-data-table mdl-js-data-table">
									<thead>
										<tr>
											<th>Sent</th>
											<th>Received</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>0</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>

								<h5>Bytes</h5>
									<table class="mdl-data-table mdl-js-data-table">
										<thead>
											<tr>
												<th>Sent</th>
												<th>Received</th>
												<th>Retransmitted</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>0</td>
												<td>0</td>
												<td>0</td>
											</tr>
										</tbody>
									</table>

									<h5>Streams</h5>
										<table class="mdl-data-table mdl-js-data-table">
											<thead>
												<tr>
													<th>Outgoing created</th>
													<th>Incoming created</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>0</td>
													<td>0</td>
												</tr>
											</tbody>
										</table>

										<h5>Stream Bytes</h5>
											<table class="mdl-data-table mdl-js-data-table">
												<thead>
													<tr>
														<th>Sent</th>
														<th>Received</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>0</td>
														<td>0</td>
													</tr>
												</tbody>
											</table>

					</section>
					<li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-icon">folder</i>
							1.txt
						</span>
						<span class="mdl-list__item-secondary-action">
							<button id="remove-file-2-button"
								class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
								<i class="material-icons">close</i>
							</button>
							<div class="mdl-tooltip" data-mdl-for="remove-file-2-button">
								Remove file
							</div>
						</span>
					</li>
					<li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-icon">folder</i>
							2.txt
						</span>
						<span class="mdl-list__item-secondary-action">
							<button id="remove-file-3-button"
								class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect ">
								<i class="material-icons">close</i>
							</button>
							<div class="mdl-tooltip" data-mdl-for="remove-file-3-button">
								Remove file
							</div>
						</span>
					</li>
				</ul>
			</div>
			<div class="mdl-card__actions mdl-card--border">
				<label id="add-files-button"
					class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
					<input type="file" />
					Add files
				</label>
			</div>
		</section>
	</div>
</section>

	<div id="snackbar" class="mdl-js-snackbar mdl-snackbar">
		<div class="mdl-snackbar__text"></div>
		<button class="mdl-snackbar__action" type="button"></button>
	</div>
</span>
)

export default Lab;