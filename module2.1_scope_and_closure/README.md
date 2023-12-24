## Scope:

A scope (`lexical scope`) is a part of the program where binding between a variable and a value is valid.
It determines which variable can be written in the source code.

- global scope


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


## Contexts vs. Objects:

Each variable in the global context has a corresponding property on the global object. In the browser, the global object is referred to as `window`:

```JavaScript:
var global_variable = 7;
console.log(global_variable);
console.log(window.global_variable);

var gimmeTheGlobalScope = function() {
  return window;
};
```

## Closures:

A closure is a function object that retains ongoing access to the variables of the context it was created in.






