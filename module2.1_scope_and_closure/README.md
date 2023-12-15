## scope:

```JavaScript
var hero = aHero();
var newSaga = function() {
  var foil = aFoil();

}
newSaga();
console.log(foil) // this will not work
```

```JavaScript
var hero = aHero();
var newSaga = function() {
  foil = aFoil();

}
newSaga();
console.log(foil) // this will work but not suggested.
```

```JavaScript
var hero = aHero();
if ( checkSomething()) {
  var foil = aFoil();

}
console.log(foil) // this will work
```


```JavaScript
var hero = aHero();
if ( checkSomething()) {
  let foil = aFoil();

}
console.log(foil) // this will not work
```
