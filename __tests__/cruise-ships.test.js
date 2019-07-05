const CruiseShip = require('../src/cruise-ships');
const Port = require('../src/Port.js');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new CruiseShip()).toBeInstanceOf(Object);
  });
  it('sets the starting port property', () => {
    const port = new CruiseShip('jest', Port);
    expect(port.currentPort).toBe(Port);
  });
  it('lets the ship set sail', () => {
    const port = new CruiseShip('jest', Port);
    port.setSail();
    expect(port.currentPort).toBeFalsy();
  });
  it('checks the ship is in port', () => {
    const port = new CruiseShip('jest', Port);
    expect(port.currentPort).toBeTruthy();
  });
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const ship = new CruiseShip(dover);
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
