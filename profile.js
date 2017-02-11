var firstNameInput = document.getElementById("firstNameInput");
var firstNameValue = document.getElementById("firstNameValue");

var lastNameInput = document.getElementById("lastNameInput");
var lastNameValue = document.getElementById("lastNameValue");

var phonePlusBtn = document.getElementById("phonePlusBtn");
var phoneInput = document.getElementById("phoneInput");
var phoneValidationMsg = document.getElementById("phoneValidationMsg");
var phoneValue = document.getElementById("phoneValue");

var emailPlusBtn = document.getElementById("emailPlusBtn");
var emailInput = document.getElementById("emailInput");
var emailValidationMsg = document.getElementById("emailValidationMsg");
var emailValue = document.getElementById("emailValue");

var saveBtn = document.getElementById("saveBtn");

var inputs = document.getElementsByClassName("input");
var errMessages = document.getElementsByClassName("errMsg");

var messageWindow = document.getElementById("messageWindow");

var phonePattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
var emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;



var plusBtnArray = document.getElementsByClassName("plusBtn");
for(var i = 0; i < plusBtnArray.length; i++) {
	plusBtnArray[i].addEventListener("click", showInput);
}
saveBtn.addEventListener("click", validateAndSave);

function showInput(event) {
	var target = event.target;
	target.classList.remove("show");
	target.classList.add("hide");
	target.nextElementSibling.classList.remove("show");
	target.nextElementSibling.classList.add("hide");
	target.parentElement.children[0].classList.remove("hide");
	target.parentElement.children[0].classList.add("show");
	target.parentElement.children[3].classList.remove("hide");
	target.parentElement.children[3].classList.add("show");
}

function validateAndSave() {
	clear();
	validatePhone();
	validateEmail();

	if(validatePhone()&&validateEmail()) {
		save();
	}
}

function clear() {

	for(var i = 0; i < errMessages.length; i++) {
		errMessages[i].classList.remove("show");
		errMessages[i].classList.add("hide");
	}

	for(var i = 0; i < inputs.length; i++) {
		inputs[i].style.borderColor = "grey";
	}
}

function validatePhone() {

	if(phoneInput.value !== "") {
		if(phoneInput.value.match(phonePattern)) {
			phoneValue.innerHTML = phoneInput.value;
			return true;
		} else {
			phoneValidationMsg.classList.remove("hide");
			phoneValidationMsg.classList.add("show");
			phoneInput.style.borderColor = "red";
			return false;
		}
	}
}


function validateEmail() {

	if(phoneInput.value !== "") {
		if(emailInput.value.match(emailPattern)) {
			emailValue.innerHTML = emailInput.value;
			return true;
		} else {
			emailValidationMsg.classList.remove("hide");
			emailValidationMsg.classList.add("show");
			emailInput.style.borderColor = "red";
			return false;
		}
	}
}


function save() {

	messageWindow.classList.remove("hide");
	messageWindow.classList.add("show");

	setTimeout(function() {
		messageWindow.classList.remove("show");
		messageWindow.classList.add("hide");
	}, 4000)

	firstNameValue.innerHTML = firstNameInput.value;
	lastNameValue.innerHTML = lastNameInput.value;

	firstNameInput.classList.remove("show");
	firstNameInput.classList.add("hide");
	firstNameValue.classList.remove("hide");
	firstNameValue.classList.add("show");

	lastNameInput.classList.remove("show");
	lastNameInput.classList.add("hide");
	lastNameValue.classList.remove("hide");
	lastNameValue.classList.add("show");

	phoneValidationMsg.classList.remove("show");
	phoneValidationMsg.classList.add("hide");
	phoneInput.classList.remove("show");
	phoneInput.classList.add("hide");
	phoneValue.classList.remove("hide");
	phoneValue.classList.add("show");

	emailValidationMsg.classList.remove("show");
	emailValidationMsg.classList.add("hide");
	emailInput.classList.remove("show");
	emailInput.classList.add("hide");
	emailValue.classList.remove("hide");
	emailValue.classList.add("show");
}
