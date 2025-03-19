
document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById('signup');
    if (signupBtn) {
        signupBtn.addEventListener('click', signup);
    }
});

function signup()
{   
    alert('signup');
    let email =document.getElementById('signup-email').value;
    let password=document.getElementById('signup-password').value;

    if (email && password){
        localStorage.setItem('userEmail',email);
        localStorage.setItem('userPassword',password);
        alert('Signup Succcessful,you can login now!!');
        window.location.href='index.html';
    }
    else{
        alert('please enter valid details');
    }
}



function login()
{
    const email=document.getElementById('login-email').value;
    const password=document.getElementById('login-password').value;

    let storedEmail=localStorage.getItem('userEmail');
    let storedPassword=localStorage.getItem('userPassword');

    if (email==storedEmail && password==storedPassword){
        localStorage.setItem('isLoggedIn',true);
        alert('Login Succcessful');
        window.location.href='quote.html';
    }
    else{
        alert('Invalid Credentials');
    }



}


function logout(){
    localStorage.setItem('isLoggedIn',false);
    alert('Logged out successfully');
    window.location.href='index.html';
}


function checkAuth()
{
    if(!localStorage.getItem('isLoggedIn')){
        alert('You need to login first');
        window.location.href='index.html';
    }
}


if(window.location.pathname.includes('quote.html')){
    checkAuth();
}