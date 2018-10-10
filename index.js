// index
const fs = require('fs');
const util = require('util');
const Pipotron = require('./Pipotron');

const promReadFile = util.promisify(fs.readFile);

async function init() {
	let sData = await promReadFile('data-pipotron.json');
	let data = JSON.parse(sData);
	return data;
}

function main() {
	let pp = new Pipotron();
}
