'use strict';
var roomInviteButton = document.querySelector("#room-invite-button");
var contactButton = document.querySelector("#contact-button");
var snackbar = document.querySelector('#snackbar');

function copyToClipboard(e)  {
    e.preventDefault();
    console.log('copy');
    var text = "blabla"
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', text);
    } else if (window.clipboardData) {
        window.clipboardData.setData('Text', text);
    }
}

function copyInvitationLink() {
    var data = {
		message: 'Your room invite link has been copied to your clipboard.',
		timeout: 5000
	  };
	snackbar.MaterialSnackbar.showSnackbar(data);

    window.addEventListener('copy', copyToClipboard);
    document.execCommand('copy');
    window.removeEventListener('copy', copyToClipboard);
}

function sendMail () {
    window.location = "mailto:hello@sexybuddha.hu"
}

function updateProgressBar () {
    this.MaterialProgress.setProgress(44);
}

function fadeIn(el) {
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
}

function toggleFileStats() {
    var isHidden = document.querySelector("#stats-file").style.display === "none";

    if (isHidden){
        document.querySelector("#stats-file").style.opacity = 0;
        document.querySelector("#stats-file").style.display = 'block';
        document.querySelector("#info-file-1-icon").innerHTML = 'unfold_less';
        fadeIn(document.querySelector("#stats-file"));
    }
    else {
        document.querySelector("#stats-file").style.display = 'none';
        document.querySelector("#info-file-1-icon").innerHTML = 'unfold_more';
    }
}



document.querySelector('#info-file-1-button').addEventListener('click', toggleFileStats);
document.querySelector('#file-1-progress').addEventListener('mdl-componentupgraded', updateProgressBar);
roomInviteButton.addEventListener('click', copyInvitationLink);
contactButton.addEventListener('click', sendMail);