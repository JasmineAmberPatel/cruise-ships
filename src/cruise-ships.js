function CruiseShip(name, startingPort) {
  this.name = name;
  this.startingPort = startingPort;
}

CruiseShip.prototype = {
  setSail: function () {
    return this.startingPort = false;
  },

};

module.exports = CruiseShip;
