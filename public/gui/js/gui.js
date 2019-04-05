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

roomInviteButton.addEventListener('click', copyInvitationLink);
contactButton.addEventListener('click', sendMail);