describe('pigLatin', function() {

  it("adds an ay at the end of every word", function() {
    expect(pigLatin('apple')).to.equal('appleay');
  });

});
