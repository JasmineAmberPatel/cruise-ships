const CruiseShip = require('../src/cruise-ships');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe('constructor', () => {
  it('returns an object', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    expect(new CruiseShip(itinerary)).toBeInstanceOf(Object);
  });
  it('sets the starting port property', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new CruiseShip(itinerary);
    expect(ship.currentPort).toBe(port);
  });
  it('lets the ship set sail', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new CruiseShip(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('checks the ship is in port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new CruiseShip(itinerary);
    ship.dock();
    expect(ship.currentPort).toBeTruthy();
  });
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new CruiseShip(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
  });
  it('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new CruiseShip(itinerary);
    expect(dover.ships).toContain(ship);
  });
});
