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
  },

  {
    name: 'Golem',
    height: 1.4,
    type:['Rock', 'Ground']
  },
]


function add(pokemon) {
  repository.push(pokemon);
}

function getAll() {
  return repository;
}

function addListItem(pokemon){
  //list item & button for each Pokémon
  var listItem = document.createElement('li');
  var button = document.createElement('button');
  $pokeList.appendChild(listItem);
  //innerText
  button.innerText = pokemon.name;
  //class for button
  button.classList.add('list-button');
  //append button to list items
  listItem.appendChild(button);

}
return {
  add: add,
  getAll : getAll,
  addListItem: addListItem
};

})();


//Node select for Pokémon list
var $pokeList = document.querySelector('.poke-list');

//forEach loop
pokeRepository.getAll().forEach(function(newItem){
  pokeRepository.addListItem(newItem);
})
