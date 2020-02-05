//Pokédex Object Array
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

/* Loop
for(var i = 0; i < repository.length; i++){
  document.write('<br>' + 'PokéName: ' + repository[i].name + '   Height: ' + repository[i].height + '  Type: ' + repository[i].type);
  if (repository[i].height > 5.5){
    document.write(' (--WOW! That\'s a big Pokémon!)')
  }*/




//forEach loop
repository.forEach(function(detail){
  document.write('<br>' + 'PokéName: ' + detail.name + '   Height: ' + detail.height + '  Type: ' + detail.type);
  if (detail.height > 5.5){
    document.write('    (--WOW! That\'s a big Pokémon!)')
  }
  document.write('<p>')
});
