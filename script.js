let themeButton = document.getElementById('theme-button'); //references html file to get id

const changeColor = () => { //const = define function in javascript, this is for changing color
    document.documentElement.classList.toggle('different-color');
    document.body.classList.toggle('different-color');
}

themeButton.addEventListener('click', changeColor); //event listener for button click to change color