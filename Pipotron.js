class Pipotron {
	
	/**
	 * Renvoie un élément au hasard parmis ceux du teableau passé en paramètre
	 * @return {null|*}
	 */
	choose(a) {
		if (a.length) {
			let n = Math.floor(Math.random() * a.length);
			return a[n];
		} else {
			throw new Error('this array has no item');
		}
	}
	
	/**
	 * Définition des données du pipotron
	 * @param oData {object}
	 */
	data(oData) {
		this._data = oData;
	}
	
	/**
	 * Fabrique une chaîne
	 * @param sSection {string} nom de la section à produire
	 * @return {string}
	 */
	render(sSection) {
		if (!(sSection in this._data)) {
			throw new Error('this section does not seam to exist : "' + sSection + '"');
		}
		const WATCHDOG_LIMIT = 128;
		let pattern = /\{[^}]+\}/;
		let rNoBracket = /\{([^}]+)\}/;
		let phrase = this.choose(this._data[sSection]);
		let sFound = phrase.match(pattern);
		
		let wd = 0;
		while(++wd < WATCHDOG_LIMIT && sFound !== null) {
			sFound = sFound.shift();
			let sSubSection = sFound.match(rNoBracket)[1];
			phrase = phrase.replace(pattern, this.choose(this._data[sSubSection]));
			sFound = phrase.match(pattern);
		}
		return phrase;
	}
}

module.exports = Pipotron;
