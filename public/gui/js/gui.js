'use strict';
var roomInviteButton = document.querySelector("#room-invite-button");
var snackbarContainer = document.querySelector('#demo-snackbar-example');
var copyInvitationUri = function () {
    var data = {
		message: 'Your room invite link has been copied to your clipboard.',
		timeout: 5000
	  };
	snackbarContainer.MaterialSnackbar.showSnackbar(data);

	var copy = function (e) {
        e.preventDefault();
        console.log('copy');
        var text = "blabla"
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', text);
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', text);
        }
    }
    window.addEventListener('copy', copy);
    document.execCommand('copy');
    window.removeEventListener('copy', copy);
}
roomInviteButton.addEventListener('click', copyInvitationUri);

var contactButton = document.querySelector("#contact-button");
contactButton.addEventListener('click', function () {
    window.redirect('mailto://hello@sexybuddha.hu')
});
