
/* Print the numbers from 1 to 100
If a number is divisible by 3 print "Fizz" instead
If a number is divisible by 5 print "Buzz" instead
If a number is divisible by 3 and 5 print "FizzBuzz" instead */

function FizzBuzz()
{ }

FizzBuzz.prototype.play = function(number) {
  if (this._isDivBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
};
FizzBuzz.prototype._isDivBy = function(divisor, number) {
  return number % divisor === 0;
};
var a = new FizzBuzz();
for (var i = 1; i <= 100; i++) {
  console.log(a.play(i));
};
