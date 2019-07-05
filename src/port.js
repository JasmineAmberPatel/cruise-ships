function Port(name) {
  this.name = name;
}

Port.prototype = {
  setSail: function () {
    return this.currentPort = false;
  },
  dock: function () {
  },
};

module.exports = Port;