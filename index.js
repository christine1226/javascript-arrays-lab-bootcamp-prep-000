// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
kittens.unshift(name);
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
  var newArray= [kittens];
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(){
  var newArray= [...kittens];
  newArray.pop()
  return newArray;
}

function removeFirstKitten(){
  var newArray= [...kittens];
  newArray.shift(name);
  return newArray;
}
