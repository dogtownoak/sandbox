function alterUser(){
    alert('Button is clicked.')
}

document.getElementById('btn').addEventListener('click', alertUser);

// below would execute without the event happening because ()
document.getElementById('btn').addEventListener('click', alertUser());

// /////////////////////

var emailInputFld = document.getElementById('email');
var subcribeBtn = document.getElementById('subscribe');


emailInputFld.addEventListener('focus', checkInputFld);

subcribeBtn.addEventListener('focus', checkInputFld);

function checkInputFld(){
    if(emailInputFld.Value.length ===0){
        document.getElementById('message').innerText = 'Please enter email Id.';
    }
}

// message is the id for p tage in button