var text='Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur='triceratops';
var DINOSAUR = dinosaur.toUpperCase();
var replace=text.replace('Velociraptor',DINOSAUR);
var part=replace.slice(0,text.length/2);
console.log(part);