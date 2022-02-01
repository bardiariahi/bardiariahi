
let darkMode = document.getElementById('dark-mode')
let darkText = document.getElementById('dark-text');
let webDark = false;

function darkModeBtn() {
    if (darkMode.classList.contains('dark-mode')){
        darkMode.classList.remove('dark-mode')
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkText.innerText = "Dark Theme";
        webDark = false;
    } else{
        darkMode.classList.add('dark-mode')
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkText.innerText = "Light Theme";
        webDark = true;
    }
}