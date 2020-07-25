
window.onload = function(){
    function emailAlert(){
        alert("Hi , this is my Email ID  maitybhaskar2015@gmail.com");

    }

    var emailId = document.getElementById("email");

    emailId.addEventListener ('click',emailAlert);
}