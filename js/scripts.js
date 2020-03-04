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
      showModal(item);
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

//Modal function
function showModal(item) {
  var $modalContainer = document.querySelector('#modal-container');
  //class to show modal
  $modalContainer.classList.add('is-visible');
  //clear existing modal content
  $modalContainer.innerHTML = '';

  var modal = document.createElement('div');
  modal.classList.add('modal')

  //new modal content
  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'X'

  //close modal upon click
  closeButtonElement.addEventListener('click', hideModal);

  //name in modal
  var nameElement = document.createElement('h1');
  nameElement.innerText = item.name;

  //height in Modal
  var heightElement = document.createElement('p');
  heightElement.innerText = 'Height : ' + item.height + 'm';


  //image in modal
  var picElement = document.createElement('img');
  picElement.classList.add('modal-img');
  picElement.setAttribute('src',item.imageUrl);

  //append
  modal.appendChild(closeButtonElement);
  modal.appendChild(nameElement);
  modal.appendChild(picElement);
  modal.appendChild(heightElement);
  $modalContainer.appendChild(modal);

}

function  hideModal() {
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.remove('is-visible');
}

//hide modal with ESC
window.addEventListener('keydown', (e) =>{
  var $modalContainer = document.querySelector('#modal-container');
  if (
    e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
});

//click out of Modal
var $modalContainer = document.querySelector('#modal-container');
$modalContainer.addEventListener('click', (e) =>
{
  var target = e.target;
  if(target === $modalContainer) {
    hideModal();
  }
})
return {
  add: add,
  getAll : getAll,
  //search: search,
  loadList: loadList,
  loadDetails: loadDetails,
  addListItem: addListItem,
  showDetails: showDetails,
  showModal: showModal,
  hideModal: hideModal

};

})();

//forEach loop
pokeRepository.loadList(). then(function(){
  pokeRepository.getAll(). forEach(function(pokemon){
    pokeRepository.addListItem(pokemon);
  });
});
