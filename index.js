// index
const fs = require('fs');
const util = require('util');
const Pipotron = require('./Pipotron');

const promReadFile = util.promisify(fs.readFile);

let pp = new Pipotron();

async function init() {
	let sData = await promReadFile('data-pipotron.json');
	let data = JSON.parse(sData);
	pp.data(data);
}

function main() {
	console.log(pp.render('phr'));
	console.log(pp.render('phr'));
	console.log(pp.render('phr'));
	console.log(pp.render('phr'));
	console.log(pp.render('phr'));
}


init().then(main);
