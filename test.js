var nextPOT = require('./')
var test = require('tape')

test('returns the next highest power of two', function(t) {
  t.equal(nextPOT(0), 1)
  t.equal(nextPOT(1), 1)
  t.equal(nextPOT(2), 2)
  t.equal(nextPOT(3), 4)
  t.equal(nextPOT(4), 4)
  t.equal(nextPOT(5), 8)
  t.equal(nextPOT(100), 128)
  t.equal(nextPOT(-15), 0)
  t.end()
})