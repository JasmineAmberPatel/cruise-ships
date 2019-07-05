function CruiseShip(name, currentPort) {
  this.name = name;
  this.currentPort = currentPort;
}

CruiseShip.prototype = {
  setSail: function () {
    return this.currentPort = false;
  },
  dock(port) {
    this.currentPort = port;
  },
};

module.exports = CruiseShip;
