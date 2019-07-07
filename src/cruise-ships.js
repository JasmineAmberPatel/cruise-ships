function CruiseShip(name, currentPort) {
  this.name = name;
  this.currentPort = currentPort;
}

CruiseShip.prototype = {
  setSail: function () {
    this.currentPort = false;
  },
  dock: function (port) {
    this.currentPort = port;
  },
};

module.exports = CruiseShip;
