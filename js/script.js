var activeInput = true;
let temp;
let icon;
const cardTop = document.getElementById('card-top');
const inputElement = document.getElementById('city');
const inputContainer = document.getElementById('city-container');
const cardContainer = document.getElementById('card');
const error = document.getElementById('error');
const buttonReturn = document.getElementById('return')

function SetCity() {
    var urlImg;
    if (icon >= 200 && icon <= 232) {
        urlImg = '../img/trovoada.png';
    } else if (icon >= 300 && icon <= 321) {
        urlImg = '../img/chuvisco.png';
    } else if (icon >= 500 && icon <= 531) {
        urlImg = '../img/chuvisco.png';
    } else if (icon >= 600 && icon <= 622) {
        urlImg = '../img/neve.png';
    } else if (icon == 800) {
        urlImg = '../img/sol.png';
    } else if (icon >= 801 && icon <= 804) {
        urlImg = '../img/nuvens.png';
    }
    var newElement = `<img src="${urlImg}" id="icon" /><h2>${temp}º</h2> <p>${inputElement.value}</p>`
    cardTop.innerHTML = newElement;
    Switch();
}

function Switch() {
    if (cardContainer.style.display == 'flex') {
        cardContainer.style.display = 'none'
        buttonReturn.style.display = 'none'
        inputContainer.style.display = 'flex'
    } else {
        cardContainer.style.display = 'flex'
        buttonReturn.style.display = 'flex'
        inputContainer.style.display = 'none'
    }
}

inputElement.addEventListener("keyup", e => {
    if (e.key == 'Enter' && inputElement.value != "") {
        mostraTempo();
    }
})


/*API*/

function mostraTempo() {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&units=metric&cnt=3&appid=546975304310671db4f80e4abcdd3e7d`;
    fetch(api)
        .then(response => response.json())
        .then(function (result) {
            temp = Math.round(result.main.temp);
            icon = result.weather[0].id;
            if (temp != undefined) {
                SetCity();
                console.log(icon)
            }
        })
        .catch(erro => {
            error.style.display = 'flex';
            setTimeout(function () { error.style.display = 'none' }, 5000);
        })

}







