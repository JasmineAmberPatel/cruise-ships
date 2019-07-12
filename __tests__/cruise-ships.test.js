const CruiseShip = require('../src/cruise-ships');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

describe('CruiseShip object', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;
  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new CruiseShip(itinerary);
  });
  describe('constructor', () => {
    it('returns an object', () => {
      expect(new CruiseShip(itinerary)).toBeInstanceOf(Object);
    });
    it('sets the starting port property', () => {
      expect(ship.currentPort).toBe(dover);
    });
    it('lets the ship set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
    });
    it('checks the ship is in port', () => {
      ship.dock();
      expect(ship.currentPort).toBeTruthy();
    });
    it('can dock at a different port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
    });
    it('gets added to port on instantiation', () => {
      expect(dover.ships).toContain(ship);
    });
  });
});
