## scope:

A scope (`lexical scope`) is a part of the program where binding between a variable and a value is valid.
It determines which variable can be written in the source code.

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

## Execution context:

Execution context is the `in-memory scope` structures to store variables and their values when a program runs.

A new execution context should be created every time you run a function.


