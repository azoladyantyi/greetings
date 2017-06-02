describe('greetings', function() {
    it("should be able to greet Azola in Isixhosa'", function() {
    var greet = greetMassage('Azola', 'isixhosa');
    assert.equal("Molo, Azola", greet);
    });
    it("should be able to greet Phuyolo in English", function() {
    var greet = greetMassage('Phuyolo', 'english');
    assert.equal("Hello, Phuyolo", greet);
    });
    it("should be able to greet Azola in Sesotho", function() {
    var greet = greetMassage('Azola', 'sesotho');
    assert.equal("Dumela, Azola", greet);
    });
  });
