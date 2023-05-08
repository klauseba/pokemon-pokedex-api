/*
const api  = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();
console.log(request.responseText);

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
});
*/

const api_url = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getPokemon() {
  const response = await fetch(api_url);
  const data = await response.json();
  /* console.log(data);*/
  const { height, name, weight } = data;

  document.getElementById("hei").textContent = height;
  document.getElementById("nam").textContent = name;
  document.getElementById("wei").textContent = weight;

  const types = data.types[0].type.name;
  document.getElementById("typ").textContent = types;
}

getPokemon();
