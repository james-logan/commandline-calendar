var should = require('chai').should();
// var assert = require('assert')

var cp = require('child_process');
var funcs = require(process.cwd() + '/lib/function.js')

//Test of functions in function.js



describe('first day of the month function', function () {
  it('should return a numeric integer value', function (done) {
    (funcs('august', 2015)%1).should.equal(0);
    done();
  })
  it('should return the correct number', function (done) {
    funcs('august', 2015).should.equal(0);
  })
});

