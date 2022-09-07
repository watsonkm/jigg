'use strict';

const sodium = require('libsodium-wrappers-sumo');

const crypto = require('../util/crypto.js');
const labelParser = require('../parse/label.js');

function KyberOT(socket) {
  this.socket = socket;
}

KyberOT.prototype.send = function (tag, m0, m1) {
  const self = this;
  const _id = this.socket.nextId();
};

KyberOT.prototype.receive = function (tag, c) {
  const self = this;
  const _id = this.socket.nextId();
};

module.exports = KyberOT;