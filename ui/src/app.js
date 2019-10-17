const URL_POKEAPI = "https://pokeapi.co/api/v2/";

// Lista de pokemones consultados
const requestedPokemons = [];

document.getElementById('username').onkeyup = function() {

}

// EJERCICIO Si ya cargó diez pokemones no volver a cargar
// EJERCICIO Si el que busca no está en la lista agregarlo
// EJERCICIO Si hay un error ocultarlo
// EJERCICIO Si hay un error manejarlo con una función

function formData(event) {
  cleanList();
  event.preventDefault();
  let username = document.getElementById('username').value;
  displayInfo(username);
  cleanForm();
}

function cleanForm() {
  document.getElementById('username').value = '';
}

function cleanList() {
  const list = document.getElementById('pokemon-list');
  if (list.childNodes.length > 0) {
    list.removeChild(list.childNodes[0])
  }
  const errorDiv = document.getElementById('error-message');
  errorDiv.style.display = "none";
}

// muestra info específica de cada pokemon
function displayInfo(data) {
  getPokemonData(data);
  const p = document.createElement('p');
  const textValue = document.createTextNode(data.firstToUpperCase());
  p.appendChild(textValue);
  document.getElementById('pokemon-list').appendChild(p);
}

// obtiene los datos de pokemones
function getPokemonData(name, index) {
  document.getElementById('error-message').style.display = "none";
  if (!requestedPokemons.includes(name)) {
    axios.get(URL_POKEAPI + 'pokemon/' + name).then(resp => {
      requestedPokemons.push(resp.data.name);
      displayPokemonFace(resp.data, index);
    }).catch(error => {
      console.error(error);
      showErrorMessage(error);
    });
  }
}

// despliega el mensaje de error
function showErrorMessage(error) {
  const errorDiv = document.getElementById('error-message');
  errorDiv.style.display = "inline";
  const spanError = document.getElementById('error-content');
  spanError.innerHTML = error.message;
}

// Crear elementos de lista y muestra el nombre junto a la imagen
function displayPokemonFace(data, index = 0) {
  const ulElement = document.getElementById('pokemon-list');
  const liElement = document.createElement('li');
  const abilites = document.createElement('ul');
  data.abilities.map(attack => {
    const liAbility = document.createElement('li');
    liAbility.innerHTML = attack.ability.name.firstToUpperCase();
    abilites.appendChild(liAbility);
  });
  liElement.innerHTML = data.name.firstToUpperCase() + ' ' + index;
  const img = document.createElement('img');
  img.src = data.sprites.front_shiny;
  img.title = data.name.firstToUpperCase();

  liElement.appendChild(img);
  liElement.appendChild(abilites);
  ulElement.append(liElement);
}

let i = 1;

function getFirstTen() {
  const ii = i + 10;
  for (i; i < ii; i++) {
    getPokemonData(i, i);
  }
}

String.prototype.firstToUpperCase = function firstToUpperCase() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
