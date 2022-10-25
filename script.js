const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checksEmpty(firstname);
    checksEmpty(lastname);
    checksEmpty(password);
    validateEmail(email);
});

function checksEmpty(user) {
    if (!user.value) {
        const formControls = user.parentElement;
        const small = formControls.querySelector('small');
        const placeHolder = user.placeholder;
        small.innerHTML = `${placeHolder} cannot be empty`;
        formControls.classList.add('error');
    } else {
        const formControls = user.parentElement;
        const small = formControls.querySelector('small');
        small.innerHTML = '';
        formControls.classList.remove('error');
    }
}

function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value) {
        checksEmpty(email);
    } else if (!email.value.match(pattern)) {
        const formControls = email.parentElement;
        const small = formControls.querySelector('small');
        small.innerHTML = `Looks like this is not an email`;
        formControls.classList.add('error');
    } else {
        const formControls = email.parentElement;
        const small = formControls.querySelector('small');
        small.innerHTML = '';
        formControls.classList.remove('error');
    }
}