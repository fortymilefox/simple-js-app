//Pokédex Object Array
var repository = [
  {
    name: 'Dragonite',
    height: 2.2,
    weight: 210,
    type: ['dragon', 'flying']
  },
  {
    name: 'Salamence',
    height: 1.5,
    weight: 102,
    type: ['dragon', 'flying']
  },
  {
    name: 'Rayquaza',
    height: 7,
    weight: 206.5,
    type: ['dragon', 'flying']
  }
];


for(var i = 0; i < repository.length; i++){
  document.write('<br>' + 'PokéName: ' + repository[i].name + ' Height: ' + repository[i].height + 'Type: ' + repository[i].type);
  if (repository.height > 5.5){
    document.write(' (--WOW! That\'s a big Pokémon!)')
  }
}
