let spanName = document.getElementById("name");
spanName.innerText = trainer.name;
spanName.style.fontSize = "2rem";

let trainerInfo = document.getElementById("trainer");
trainerInfo.innerHTML = `<img src='${trainer.sprite}'/>`;

let pokemonImg = document.getElementById("pokemon-side");
for(let x = 0; x < pokemon.length; x++){
    pokemonImg.innerHTML += `<div class="card"}'>${pokemon[x].image}</div>`;
};

let badges = document.getElementById("badges");
for(let y = 0; y < trainer.badges.length; y++){
    badges.innerHTML += `<img src='${trainer.badges[y]}'/>`;
};