let botonAdivinar = document.querySelector('.app__guess');
let nombre = document.querySelector('.app__name');
let edad = document.querySelector('.app__result');
const URL = "https://api.agify.io?name=";

botonAdivinar.addEventListener('click', function () {
    let nameURL = URL + nombre.value;
    
    fetch(nameURL)
    .then(answer => answer.json())
    .then(answer => (answer.age != null) ? (edad.innerText = answer.age) : (edad.innerText = "-", console.log("No parece ser un nombre valido")))
    .catch(error => console.log(error));
});