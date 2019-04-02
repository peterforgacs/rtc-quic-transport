'use strict';
var inviteFriendsButton = document.querySelector("#invite-friends");
var snackbarContainer = document.querySelector('#demo-snackbar-example');
inviteFriendsButton.addEventListener('click', function () {
	var data = {
		message: 'Your invite url has been copied to your clipboard.',
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

