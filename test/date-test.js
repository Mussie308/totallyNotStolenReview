import chai from 'chai';
import logDate from '../date';
const expect = chai.expect;
const val = logDate();

describe("log the date every 3 seconds", () => {
  it("log the date", () => {
    expect(val).to.be.a("date");
  })
})
