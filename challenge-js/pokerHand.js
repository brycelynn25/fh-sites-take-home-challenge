class PokerHand {
  constructor(hand) {
    this.hand = hand;
    this.ranks = [];
    this.suits = [];

    const cards = hand.split(' ');

    cards.forEach(card => {
      const rank = card.slice(0, -1);
      const suit = card.slice(-1);
      this.ranks.push(rank);
      this.suits.push(suit);
    })



  }
      //returns the rank of the current Hand
  getRank() {
    

    if (this.isRoyalFlush()) {
      return 'Royal Flush';
    }
    if (this.isFlush() && this.isStraight()) {
      return 'Straight Flush';
    }
    if (this.isFlush()) {
      return 'Flush';
    }
    if (this.isThreeOfAKind() && this.isPair()) {
      return 'Full House';
    }
    if (this.isTwoPair()) {
      return 'twoPair';
    }
    if (this.isPair()) {
      return 'onePair';
    }
    if (this.isFourOfAKind()) {
      return "fourOfAKind";
    }
    if (this.isThreeOfAKind()) {
      return "threeOfAKind";
    }
    if (this.isStraight()) {
      return "Straight";
    }
    if (this.isHighCard()) {
      return "highCard"
    }
    else return 'broken';

  }

  //calculates how many of each rank there is ( 2 kings )
  getRankCounts() {
    // Create object to store the counts of each rank
    const counts = {};

    // Loop over each rank in the 'this.ranks' array -should be 5 for 5 cards
    for (let i = 0; i < this.ranks.length; i++) {
      // Get the current rank at index i
      const rank = this.ranks[i];

      // Check if this rank was on a previous card
      if (counts[rank] === undefined) {
        // If it doesn't exist in 'counts', initialize its count to 0
        counts[rank] = 0;
      }

      // Increment the count for this rank by 1 
      counts[rank] = counts[rank] + 1;
    }
    return Object.values(counts);
  }


  isFlush() {
    // Get the number of suits in my hand , a set is a unique group of values so if they are all the same there is 1 
    const numSuits = new Set(this.suits).size;
    if (numSuits == 1) {
      return true;
    }
    else {
      return false;
    }
  }


  // Check for One Pair (two cards of the same rank)
  isPair() {
    const rankCounts = this.getRankCounts();
    return Object.values(rankCounts).includes(2);
  }

  // Check for Two Pair (two different pairs)
  isTwoPair() {
    const rankCounts = this.getRankCounts();
    const pairs = Object.values(rankCounts).filter(count => count === 2);
    return pairs.length === 2;
  }

  isThreeOfAKind() {
    const rankCounts = this.getRankCounts();
    return Object.values(rankCounts).includes(3);
  }

  isFourOfAKind() {
    const rankCounts = this.getRankCounts();
    return Object.values(rankCounts).includes(4);
  }



  isStraight() {
    const rankValues = this.ranks.map(rank => {
      if (rank === 'A') return 14;
      if (rank === 'K') return 13;
      if (rank === 'Q') return 12;
      if (rank === 'J') return 11;
      return parseInt(rank, 10);
    });



    rankValues.sort((a, b) => a - b);

    let isSequential = true;
    for (let i = 1; i < rankValues.length; i++) {
      if (rankValues[i] !== rankValues[i - 1] + 1) {
        isSequential = false;
        break; // No need to check further if it's already not a straight
      }
    }
    return isSequential;
  }

  isHighCard() {
    return true;
  }

  isRoyalFlush() {
    let flushCheck = ['A', 'K', 'Q', 'J', '10'];
    return this.isFlush() && flushCheck.every(rank => this.ranks.includes(rank));

  }


}
module.exports = PokerHand;
