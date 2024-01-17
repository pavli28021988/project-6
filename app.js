const form = document.getElementById('form');
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.getElementsByClassName('message-container')[0]
const message = document.getElementById('message')


let isValid = false;
let passwordMatch = false;

function validateForm(){
    //Using Constraint API

    isValid = form.checkValidity(); // checkValidity() ready method
    //console.log(isValid);
     
    // style main message for an error

    //message.textContent = 'Please fill out all fields';//HTML novalidation   
    //message.style.color = 'red';
    //messageContainer.style.borderColor = 'red';

    if(!isValid){
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return; // we do not need to continue
    }

    // check to see if password match

    if(password1El.value === password2El.value){
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }else{
        passwordMatch = false;
        message.textContent = 'Make sure password match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;  // we do not need to continue
    }

    // if form ans password are valid

    if(isValid && passwordMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData(){
    const user = {
       name: form.name.value,
       phone: form.phone.value,
       email: form.email.value,
       website:form.website.value,
       password: form.name.password
    };

    // Do something with user data

    console.log(user);
};



function processFormData(e){
    e.preventDefault();
    //console.log(e);
    validateForm();

    // submit data if valid

    if(isValid && passwordMatch){
        storeFormData();
    }
}
// Event Listener
form.addEventListener('submit', processFormData)