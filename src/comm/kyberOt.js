'use strict';

const kyber = require('./kyberPke.js');
const labelParser = require('../parse/label.js');

function KyberOT(socket) {
  this.socket = socket;
}

KyberOT.prototype.send = function (tag, m0, m1) {
  const self = this;
  const _id = this.socket.nextId();

  r1 = kyber.addPublicKeys(pk1, H)
};

KyberOT.prototype.receive = function (tag, c) {
  const self = this;
  const _id = this.socket.nextId();

  publicSeed = kyber.generatePublicSeed();
  pk0, sk0 = kyber.generateKeys(publicSeed);
  pk1, sk1 = kyber.generateKeys(publicSeed);

  H = 
  r1 = kyber.subtractPublicKeys(pk1, H)

  // transmit both
  

};

module.exports = KyberOT;