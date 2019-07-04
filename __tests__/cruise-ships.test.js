const CruiseShip = require('../src/cruise-ships');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new CruiseShip()).toBeInstanceOf(Object);
  });
  it('sets the starting port property', () => {
    const cruiseShip = new CruiseShip('jest', 'Dover');
    expect(cruiseShip.startingPort).toBe('Dover');
  });
  it('lets the ship set sail', () => {
    const cruiseShip = new CruiseShip('jest', 'Dover');
    cruiseShip.setSail();
    expect(cruiseShip.startingPort).toBeFalsy();
  });
  it('checks the ship is in port', () => {
    const cruiseShip = new CruiseShip('jest', 'Dover');
    expect(cruiseShip.startingPort).toBeTruthy();
  });
});
