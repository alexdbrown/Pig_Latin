describe('pigLatin', function() {

  it("adds an ay at the end of every word", function() {
    expect(pigLatin('apple')).to.equal('appleay');
  });

  it("checks for a different vowels", function() {
    expect(pigLatin('eat')).to.equal('eatay');
  });

  it("cuts the first consecutive consonants from the beginning of the word and adds ay to the end", function() {
    expect(pigLatin('coffee')).to.equal('offeecay');
  });

  // it("adds the first consecutive consonants ")

});
