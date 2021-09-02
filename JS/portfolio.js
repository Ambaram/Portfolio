window.onload = execute;
function execute(){
    const theme = document.getElementById("lightmode");
    theme.addEventListener('click',switchtheme);
    const btn = document.getElementById("more");
    btn.addEventListener("click",visible);
}
function visible(){
    document.getElementById("notables").classList.toggle("otherworks");
    document.getElementById("notables").classList.toggle("visible");
    const btn = document.getElementById("more");
    if(btn.innerHTML == "See More"){
        btn.innerHTML = "See Less";
    }
    else{
        btn.innerHTML = "See More";
    }
}

function switchtheme(){
    document.getElementById("body").classList.toggle('body');
    document.getElementById("body").classList.toggle('switch');
}