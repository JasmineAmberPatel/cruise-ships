function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype = {
  addShip: function addShip(ship) {
    this.ships.push(ship);
  },
  removeShip: function removeShip(ship) {
    const shipToRemove = this.ships.indexOf(ship);
    this.ships.splice(shipToRemove, 1);
  },
};

module.exports = Port;
