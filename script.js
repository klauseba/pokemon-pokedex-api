const searchString = document.getElementById("searchBar");

searchString.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getPokemon(e.target.value);
  }
});

randombtn.addEventListener("click", randomPoke);
function randomPoke() {
  searchString.value = Math.floor(Math.random() * 1008);
   getPokemon(searchString.value);
}

let api_url = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(index) {
  const response = await fetch(api_url + index);
  const data = await response.json();

  const { height, name, weight } = data;

  // the height, name and weight
  document.getElementById("hei").textContent = height;
  document.getElementById("nam").textContent =
    name.charAt(0).toUpperCase() + name.slice(1);

  document.getElementById("wei").textContent = weight;

  // getting the type of the pokemon (electric, grass, water...etc) then writing the first letter in upper case:
  const types = data.types[0].type.name;
  document.getElementById("typ").textContent =
    types.charAt(0).toUpperCase() + types.slice(1);

  //getting the HP, attack, defense, special attack etc stats
  const healthpoints = data.stats[0].base_stat;
  document.getElementById("hp").textContent = healthpoints;

  const attack = data.stats[1].base_stat;
  document.getElementById("attk").textContent = attack;

  const defense = data.stats[2].base_stat;
  document.getElementById("def").textContent = defense;

  const specialAttack = data.stats[3].base_stat;
  document.getElementById("spAttk").textContent = specialAttack;

  const specialDefense = data.stats[4].base_stat;
  document.getElementById("spDef").textContent = specialDefense;

  const speed = data.stats[5].base_stat;
  document.getElementById("spd").textContent = speed;

  const picture = data.sprites.front_default;
  document.getElementById("pic").src = picture;

  // when clicking on the buttons "left/right" "Default" or "Shiny" the image changes accordingly
  const btn = document.querySelector(".item-2");
  const btn2 = document.querySelector(".item-3");
  const btn3 = document.querySelector(".item-1");
  const btn4 = document.querySelector(".item-4");

  btn.addEventListener("click", defa);
  function defa() {
    document.getElementById("pic").src = data.sprites.front_default;
  }

  btn2.addEventListener("click", shiny);
  function shiny() {
    document.getElementById("pic").src = data.sprites.front_shiny;
  }

  btn3.addEventListener("click", defaultBack);
  function defaultBack() {
    document.getElementById("pic").src = data.sprites.back_default;
  }

  btn4.addEventListener("click", shinyBack);
  function shinyBack() {
    document.getElementById("pic").src = data.sprites.back_shiny;
  }

  const buttonColor = function () {
    theTypeButton.style.position = "absolute";
    theTypeButton.style.top = "260px";
    theTypeButton.style.left = "10px";
    theTypeButton.style.height = "30px";
    if (typ.innerHTML === "Grass" || typ.innerHTML === "Bug") {
      theTypeButton.style.backgroundColor = "green";
    }
    if (typ.innerHTML === "Fire" || typ.innerHTML === "Dragon") {
      theTypeButton.style.backgroundColor = "red";
    }
    if (typ.innerHTML === "Water") {
      theTypeButton.style.backgroundColor = "blue";
    }
    if (
      typ.innerHTML === "Ice" ||
      typ.innerHTML === "Ghost" ||
      typ.innerHTML === "Flying" ||
      typ.innerHTML === "Normal"
    ) {
      theTypeButton.style.backgroundColor = "white";
    }
    if (typ.innerHTML === "Electric") {
      theTypeButton.style.backgroundColor = "yellow";
    }
    if (typ.innerHTML === "Psychic") {
      theTypeButton.style.backgroundColor = "brown";
    }
    if (typ.innerHTML === "Steel") {
      theTypeButton.style.backgroundColor = "#71797E";
    }
    if (
      typ.innerHTML === "Dark" ||
      typ.innerHTML === "Ground" ||
      typ.innerHTML === "Rock"
    ) {
      theTypeButton.style.backgroundColor = "brown";
    }
    if (typ.innerHTML === "Psychic") {
      theTypeButton.style.backgroundColor = "violet";
    }
    if (typ.innerHTML === "Fairy") {
      theTypeButton.style.backgroundColor = "pink";
    }
    if (typ.innerHTML === "Poison") {
      theTypeButton.style.backgroundColor = "orange";
    }
  };
  buttonColor();
}
