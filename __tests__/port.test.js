const Port = require('../src/port.js');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    const port = new Port('Portchester');
    expect(port.name).toEqual('Portchester');
  });
});
