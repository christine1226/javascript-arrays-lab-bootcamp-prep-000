// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  
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
  var newArray = [... "kitten", "name"];
  return newArray;
}

function prependKitten(name){
  var newArray= ["name"... "kittens"];
  return newArray;
}

function removeLastKitten(){
  var newArray= kittens.slice[2,1,"name"];
  return newArray;
}

function removeFirstKitten(){
  var newArray= kittens.slice[0,1,"name"]
}