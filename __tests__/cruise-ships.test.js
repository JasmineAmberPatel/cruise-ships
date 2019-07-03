const CruiseShip = require('../src/cruise-ships');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new CruiseShip()).toBeInstanceOf(Object);
  });
  it('sets the starting port property', () => {
    const cruiseShip = new CruiseShip('Dover');
    expect(cruiseShip.startingPort).toEqual('Dover');
  });
});
