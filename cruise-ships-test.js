const CruiseShip = require('../src/cruise-ships.js');

describe('constructor', () => {
  it('returns an object', () => {
    cruiseShip();
    expect(new CruiseShip).toEqual(Object);
  });
  it('sets the starting port property', () => {
    expect(cruiseShip.port).toEqual('spain');
  });
});
