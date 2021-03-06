(function exportController() {
  function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();
    document.querySelector('#sailbutton').addEventListener('click', () => {
      this.setSail();
    });
  };

  Controller.prototype = {
    initialiseSea: function () {
      const backgrounds = [
        './images/water0.png',
        './images/water1.png',
      ];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
      }, 1000);
    },
    renderPorts: function (ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        newPortElement.className = 'port';
        portsElement.appendChild(newPortElement); 
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;   
      });
    },
    renderShip: function () {
      const ship = this.ship;
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    },
    setSail: function () {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = (currentPortIndex + 1);
      console.log(ship.currentPort);
      const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
      console.log(nextPortElement);
      const shipElement = document.querySelector('#ship');
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if ((ship.currentPort.name === 'Amber Cove') || (ship.currentPort.name === 'San Juan') || (ship.currentPort.name === 'Grand Turk') || (ship.currentPort.name === 'New York City')) {
          ship.dock();
          clearInterval(sailInterval);
          this.renderMessage(`Now docking ${ship.currentPort.name}`);
        };
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
      if (!nextPortElement) {
        this.renderMessage(`End of the line Matey! ${ship.currentPort.name} is the last stop`);
      };
      this.renderMessage(`Now departing ${ship.currentPort.name}`);
    },
    renderMessage: function (message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerHTML = message;
      const viewport = document.querySelector('#viewport');
      viewport.appendChild(messageElement);
      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2600);
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
