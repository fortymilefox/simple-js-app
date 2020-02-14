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



//forEach loop
pokeRepository.getAll().forEach(function(detail){
  document.write('<br>' + 'PokéName:   ' + detail.name   + '|      Height:   ' +   detail.height   + '|     Type: ' + detail.type);
  if (detail.height > 5.5){
    document.write('    (--WOW! That\'s a big Pokémon!)')
  }
  document.write('<p>')
});
