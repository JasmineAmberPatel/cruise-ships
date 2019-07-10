const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('Itinerary', () => {
  it('can have ports', () => {
    const port = jest.fn();
    const itinerary = new Itinerary(port);
    expect(itinerary.ports).toEqual(port);
  });
});
