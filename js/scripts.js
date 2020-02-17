//Pokédex Object Array
var pokeRepository = (function(){
  var repository = [
    {
      name: 'Dragonite',
      height: 2.2,
      weight: 210,
      type: ['Dragon ', ' Flying']
    },
    {
      name: 'Salamence',
      height: 1.5,
      weight: 102,
      type: ['Dragon ', ' Flying']
    },
    {
      name: 'Rayquaza',
      height: 7,
      weight: 206.5,
      type: ['Dragon ', ' Flying']
    }
  ];

function add(pokemon) {
  repository.push(pokemon);
}

function getAll() {
  return repository;
}

return {
  add: add,
  getAll : getAll
};
})();



pokeRepository.add({name: 'Golem', height: 1.4, type:['Rock', 'Ground']});
console.log(pokeRepository.getAll());

//Node select for Pokémon list
var pokeRepository = document.querySelector('.poke-list');

//forEach loop
pokeRepository.getAll().forEach(function(detail){
  //list item & button for each Pokémon
  var $listItem = document.createElement('li');
  $pokeList.append($listItem);
  var $pokeButton = document.createElement('button');
  //innerText
  $pokeButton.innerText = pokemon.name;
  //class for button
  $pokeButton.classList.add('list-button');
  //append button to list items
  $listItem.appendChild($pokeButton);
  }

});
