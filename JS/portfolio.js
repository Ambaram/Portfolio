window.onload = execute;
function execute(){
    const theme = document.getElementById("lightmode");
    theme.addEventListener('click',switchtheme);
}
function switchtheme(){
    document.getElementById("body").classList.toggle('body');
    document.getElementById("body").classList.toggle('switch');
}

function send()
{
    emailjs.send("service_gg3vqvw","template_lzvimyq",{
        name: document.querySelector("#name"),
        tech: document.querySelector("#service"),
        email: document.querySelector("#email").value
        }).then(response=>{
            console.log("Success", response.status);
        },(error)=>{
            console.log(error);
        }) ;
}

document.querySelector("#submit").addEventListener('click',send);