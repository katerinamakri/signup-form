var form = document.getElementById('form');
var firstName = document.forms["login-form"]["first-name"];
var lastName = document.forms["login-form"]["last-name"];
var email = document.forms["login-form"]["email"];
var password = document.forms["login-form"]["password"];


form.addEventListener('submit', validation);

function validation(event) {
	console.log(document.forms["login-form"]["first-name"].value)

	if (firstName.value === undefined || firstName.value === '') {
   		// errors,icons should be displayed
   		// different border color
   		document.getElementById('first-name-error').classList.add("block");
   		document.getElementById('first-name').classList.add ("border");
   		document.getElementById('first-name').classList.add ("background");
	} else {
   		document.getElementById('first-name-error').classList.remove("block");
   		document.getElementById('first-name').classList.remove("border");
   		document.getElementById('first-name').classList.remove("background");
	}

	if (lastName.value === undefined || lastName.value === '') {
   		// errors,icons should be displayed
   		// different border color
   		document.getElementById('last-name-error').classList.add("block");
   		document.getElementById('last-name').classList.add ("border");
   		document.getElementById('last-name').classList.add ("background");
	} else {
   		document.getElementById('last-name-error').classList.remove("block");
   		document.getElementById('last-name').classList.remove("border");
   		document.getElementById('last-name').classList.remove("background");
	}

	
	if (email.value === undefined || email.value === '') {
   		// errors,icons should be displayed
   		// different border color
		document.getElementById('email-error').innerHTML = "Email cannot be empty";
   		document.getElementById('email-error').classList.add("block");
   		document.getElementById('email').classList.add("border");
   		document.getElementById('email').classList.add("background");
	} else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		document.getElementById('email-error').innerHTML = "Looks like this is not an email";
		document.getElementById('email-error').classList.add("block");
  		document.getElementById('email').classList.add("border");
  		document.getElementById('email').classList.add("background");
	} else {
   		document.getElementById('email-error').classList.remove("block");
   		document.getElementById('email').classList.remove("border");
   		document.getElementById('email').classList.remove("background");
	}

	if (password.value === undefined || password.value === '') {
   		// errors,icons should be displayed
   		// different border color
   		document.getElementById('password-error').classList.add("block");
    	document.getElementById('password').classList.add ("border");
   		document.getElementById('password').classList.add ("background");
	} else {
   		document.getElementById('password-error').classList.remove("block");
   		document.getElementById('password').classList.remove("border");
   		document.getElementById('password').classList.remove("background");
	}


	event.preventDefault();
}