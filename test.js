var test = require('tape');
var calc = require('./Components/Calculate.js');

test('Mischungsverhältnis überprüfen', function (t) {
  t.plan(3);
  var dilution = calc('100', '400', '500');
  var expectedResult = ['100ml : 400ml', 20];
  var expectedWrongResult = ['200ml : 400ml', 20];
  t.equal(dilution[0], expectedResult[0]);
  t.notEqual(dilution[0], expectedWrongResult[0]);
  t.equal(dilution[1], expectedResult[1]);
  t.end();
});
