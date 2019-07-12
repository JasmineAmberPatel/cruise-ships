const Port = require('../src/port.js');

describe('Port object', () => {
  let port;
  beforeEach(() => {
    port = new Port('Portchester');
  });
  describe('constructor', () => {
    it('returns an object', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      expect(port.name).toEqual('Portchester');
    });
    it('Adds a ship to the ships array', () => {
      const ship = jest.fn();
      port.addShip(ship);
      expect(port.ships).toContain(ship);
    });
    it('Removes a ship from the ships array', () => {
      const titanic = jest.fn();
      const queenMary = jest.fn();
      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);
      expect(port.ships).toEqual([titanic]);
    });
  });
});
