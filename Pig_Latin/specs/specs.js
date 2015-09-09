describe('pigLatin', function() {

  it("adds an ay at the end of every word", function() {
    expect(pigLatin('apple')).to.equal('appleay');
  });

  it("checks for a different vowels", function() {
    expect(pigLatin('eat')).to.equal('eatay');
  });

  it("cuts the one consonant from the beginning of the word and adds them to the end and adds ay", function() {
    expect(pigLatin('coffee')).to.equal('offeecay');
  });

  it("cuts all consecutive consonants and adds them to the end of the word, and then adds ay", function() {
    expect(pigLatin('llama')).to.equal('amallay');
  });

  it("moves the u along with the q in words that start with qu and then adds ay", function() {
    expect(pigLatin('squeal')).to.equal('ealsquay');
  });

});
