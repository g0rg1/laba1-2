document.addEventListener("DOMContentLoaded" , function()  {
    const cookieNotice = document.getElementById('cookie-notice');
    const acceptedCookiesButton = document.getElementById('accept-cookies');

    if (!sessionStorage.getItem('cookiesAccepted')){
        cookieNotice.style.display = 'block';

    }

    acceptedCookiesButton.addEventListener('click' , function (){
        sessionStorage.setItem('cookiesAccepted' , 'true');
        cookieNotice.style.display = 'none';
    });
});

