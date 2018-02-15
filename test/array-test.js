import chai from 'chai';
import toCaps from '../array';
const expect = chai.expect;

chai.Assertion.addProperty('uppercase', function () {
  const obj = this._obj;
  new chai.Assertion(obj).to.be.a('string');

  this.assert(
      obj === obj.toUpperCase() // adapt as needed
    , 'expected #{this} to be all uppercase'    // error message when fail for normal
    , 'expected #{this} to not be all uppercase'  // error message when fail for negated
  );
});

xdescribe("toCaps", ()=> {
  const arr = ["thats a bad idea", "this is what money is", "just a test btw"];
  const val = toCaps(arr);

  it("should return an array", () => {
    // var arr = ["this is money", "this is what money is", "just a test btw"];
    // var val = toCaps(arr);
    expect(val).to.be.a('array');
  });
  it("first letter at index[0] should be capitalized", () => {
    expect(val[0].charAt(0)).to.be.uppercase;
  });
  it("first letter at index[i] should be capitalized", ()=>{
    for (let i = 0; i < val.length; i++){
      expect(val[i].charAt(0)).to.be.uppercase;
    };
  });
  it("concatenate cap letter to rest of string", () => {
    val.forEach(element => {
      expect(element.charAt(1)).to.not.be.uppercase;
    })
  })
})
