
let cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) {
     cats.push('Ralph');
}

function destructivelyPrependCat(name) {
     cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
     cats.pop();
}

function destructivelyRemoveFirstCat() {
     cats.shift();
}

function appendCat(name) {
  let newCats = cats.slice();
   newCats.push(name);
   return newCats;
}
appendCat('Broom');

function prependCat(name) {
    let newCats = cats.slice();
    newCats.unshift(name);
    return newCats;
}
prependCat('Arnold');

function removeLastCat() {
    let newCats = cats.slice(0,-1);
    return newCats;
}

function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
}