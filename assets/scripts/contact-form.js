function validateForm() {
  let valid = true;
  let name = document.forms["contact"]["name"].value;
  let nameErr = document.getElementById('nameError');
  if (name == "" || name.length < 2 || !/[a-zA-Z]$/.test(name)) {
    nameErr.innerText = "Name must be filled out";
    return valid = false;
  } else {nameErr.innerText = "";}
  let email = document.forms["contact"]["email"].value;
  let emailErr = document.getElementById('emailError');
  if (email == "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailErr.innerText = "Please enter a valid email";
    return valid = false;
  } else {emailErr.innerText = "";}
  let phone = document.forms["contact"]["phone"].value;
  let phoneErr = document.getElementById('phoneError');
  if (phone == "" || phone.length < 10 || !/[0-9]/.test(phone)) {
    phoneErr.innerText = "Please enter a valid phone number";
    return valid = false;
  } else {phoneErr.innerText = "";}
  let message = document.forms["contact"]["message"].value;
  let messageErr = document.getElementById('messageError');
  if (message == "" || message.length > 50 || !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm.test(message)) {
    messageErr.innerText = "Please enter a valid message with no web or email addresses";
    return valid = false;
  }  else {Err.innerText = "";}

  if(valid = false){
    return false;
  }
}