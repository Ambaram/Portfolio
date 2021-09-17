window.onload = execute;
function execute(){
    const theme = document.getElementById("lightmode");
    theme.addEventListener('click',switchtheme);
}
function switchtheme(){
    document.getElementById("body").classList.toggle('body');
    document.getElementById("body").classList.toggle('switch');
}