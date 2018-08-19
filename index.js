// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
kittens.unshift();
return kittens;
}

function detructivelyRemoveLastKitten(){
  kitten.pop();
  return kitten;
}

function destructivelyRemoveFirstKitten(){
  kitten.shift()
return kitten;
}

function appendKitten(name){
  var newArray = [... kittens]
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
  var newArray= ["name"... "kittens"];
  return newArray;
}

function removeLastKitten(){
  var kittens.slice[2,1,"name"];
  return kittens;
}

function removeFirstKitten(){
  var kittens.slice[0,1,"name"];
  return kittens;
}
