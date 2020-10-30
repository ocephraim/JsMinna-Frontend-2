const terms = document.querySelector('#check');
const btn = document.querySelector('.submitBtn');
const loader = document.querySelector('.loader');
const btnText = document.querySelector('.btnText')

btn.disabled = true;

// Validate form fields
const validFname = () => {
    const nameInput = document.forms['myForm']['fname'].value;
    const error = document.querySelector('#err1');

    if (nameInput === '') {
        error.textContent = 'Please enter your first name';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
};

const validLname = () => {
    const nameInput = document.forms['myForm']['lname'].value;
    const error = document.querySelector('#err2');

    if (nameInput === '') {
        error.textContent = 'Please enter your last name';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
};

const validEmail = () => {
    const emailInput = document.forms['myForm']['email'].value;
    const error = document.querySelector('#err3');
    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (mailformat.test(emailInput)) {
        error.textContent = '';
        return true;
    } else {
        error.textContent = 'Please enter a valid email address';
        return false;
    }
}

const validPassword = () => {
    const pswdInput = document.forms['myForm']['password'].value;
    const error = document.querySelector('#err4');
    // const pswdReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (pswdInput.length >= 8) {
        error.textContent = '';
        return true;
    } else {
        error.textContent = 'Password should be 8 characters long';
        return false;
    }
}

const confirmPassword = () => {
    const pswdInput = document.forms['myForm']['password'].value;
    const cnfmPswd = document.forms['myForm']['cpassword'].value;
    const error = document.querySelector('#err5');

    if (cnfmPswd === pswdInput) {
        error.textContent = '';
        return true;
    } else {
        error.textContent = 'Password should match';
        return false;
    }
}


//disable sign up button until all fields are validated.
const signup = () => {

    if(validFname() && validLname() && validEmail() && validPassword() && confirmPassword() && terms.checked) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }

}

//disable login button until all fields are validated.
const login = () => {

    if(validEmail() && validPassword()) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }

}

//show loader on button click and refresh page
const loadPage = () => {
    btn.disabled = true;
    loader.style.display = 'block';
    btnText.style.display = 'none';
    window.location.reload();
};