(function exportCruiseShip() {
  function CruiseShip(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  CruiseShip.prototype = {
    setSail: function setSail() {
      this.previousPort = this.currentPort;
      this.currentPort.removeShip(this);
      this.currentPort = null;
    },
    dock: function dock() {
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      this.currentPort = itinerary.ports[previousPortIndex + 1];
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CruiseShip;
  } else {
    window.CruiseShip = CruiseShip;
  }
})();
