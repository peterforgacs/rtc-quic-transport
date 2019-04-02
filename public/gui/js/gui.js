'use strict';
var roomInviteButton = document.querySelector("#room-invite-button");
var snackbarContainer = document.querySelector('#demo-snackbar-example');
roomInviteButton.addEventListener('click', function () {
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
});

