
var car = function(loc) {
  var obj = {loc: loc};
  obj.move = function() {obj.loc++};
  return obj;
};

// define method outside constructor so that the interpretor will not create new instance of the function every time it
// runs.

var car = function(loc) {
  var obj = {loc: loc};
  obj.move = move;
  return obj;
};

var move = function() {this.loc++;};

// define an object containing all the methods and assign it to obj:
var car = function(loc) {
  var obj = {loc: loc};
  extend(obj, car.methods); // jquery is needed
};

car.methods = {
  move: function() {this.obj++;}
}

var amy = car(1);
amy.move();
var ben = car(9);
ben.move();

