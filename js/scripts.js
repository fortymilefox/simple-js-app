//Node select for Pokémon list
var $pokeList = document.querySelector('.poke-list');

//Pokédex Object Array
var pokeRepository = (function(){
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'


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
  button.addEventListener('click', function(){
    showDetails(pokemon)
  })
}

function showDetails(item){
  pokeRepository.loadDetails(item).then(function(){
      console.log(item);
  });
}

function loadList() {
  return fetch(apiUrl) .then(function (response){
    return response.json();
  }) .then(function (json){
    json.results.forEach(function (item){
      var pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e){
    console.error(e);
  })
}

function loadDetails(item){
  var url = item.detailsUrl;
  return fetch(url) .then(function (response){
    return response.json();
  }). then(function(details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }) .catch(function (e){
    console.error(e);
  });
}

return {
  add: add,
  getAll : getAll,
  //search: search,
  loadList: loadList,
  loadDetails: loadDetails,
  addListItem: addListItem,
  showDetails: showDetails,

};

})();

//forEach loop
pokeRepository.loadList(). then(function(){
  pokeRepository.getAll(). forEach(function(pokemon){
    pokeRepository.addListItem(pokemon);
  });
});
