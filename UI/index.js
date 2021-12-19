const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


if(passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}

}


// ................local storage..............

let txtuser=document.querySelector(".txtuser");
let txtpass=document.querySelector(".txtpass");
let submit=document.querySelector(".sub");




if(window.localStorage)
{
    localStorage.setItem("email","priyanka@gmail.com");
    localStorage.setItem("password","@12345678");
    let user=localStorage.getItem("user");
    let pass=localStorage.getItem("pass");

    // let message=document.querySelector(".message");
    // let message1=document.querySelector(".message1");
    // var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    submit.addEventListener("click",()=>{
        if(email==txtuser.value &&password==txtpass.value )
        {
            confirm("Hi, " +user);
        }

        // else if(mail_format.exec(user))
        // {
        if(email!=txtuser.value)
            {
                // message.innerHTML="Email format is not valid(Example: abc@d.com)";
                validateInputs();
            }
           
            if(password!=txtpass.value)
            {
                // message1.innerHTML="Password is Invalid";
                validateInputs();
            }
        
        

    })
}






