var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'onePair');
  });
});

/**
 * test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'twoPair');
  });
});

/**
 * test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh 4h 8h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

// More tests go here
/**
 * test
 */
describe('Rank A Four of A Kind', function() {
  var hand = new PokerHand('7h 7c 7c 7s 10h');

  it('Return Four of a kind when hand given', function() {
    assert.equal(hand.getRank(), 'fourOfAKind');
  });
});

/**
 * test
 */
describe('Rank A Three of A Kind', function() {
  var hand = new PokerHand('7h Jc 7c 7s 10h');

  it('Return Three of A kind when hand given', function() {
    assert.equal(hand.getRank(), 'threeOfAKind');
  });
});

describe('Rank A Full House', function() {
  var hand = new PokerHand('3d Ah 3s 3c Ad');

  it('Return Full House when hand given', function() {
    assert.equal(hand.getRank(), 'Full House');
  });
});

describe('Rank A Straight', function() {
  var hand = new PokerHand('2d 3h 4s 5c 6d');

  it('Return Straight when hand given', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank A Straight Flush', function() {
  var hand = new PokerHand('2d 3d 4d 5d 6d');

  it('Return Straight Flush when hand given', function() {
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank A High Card', function() {
  var hand = new PokerHand('2h 3s 4d 10c 6d');

  it('Return High Card when hand given', function() {
    assert.equal(hand.getRank(), 'highCard');
  });
});