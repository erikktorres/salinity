// == BSD2 LICENSE ==

exports.sinon= require('sinon');

var sinonChai = require('sinon-chai');
var chai = require('chai');

chai.use(sinonChai);

exports.expect = chai.expect;
exports.mockableObject = require('./mockableObject.js');
