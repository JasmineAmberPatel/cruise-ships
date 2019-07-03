const CruiseShip = require('../src/cruise-ships.js');

describe('constructor', () => {
  it('returns an object', () => {
    CruiseShip();
    expect(new CruiseShip()).toEqual(Object);
  });
  it('sets the starting port property', () => {
    expect(CruiseShip.startingPort).toEqual('');
  });
});
