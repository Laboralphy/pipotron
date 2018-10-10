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

let pp = new Pipotron();
pp.data({
	"nom.s": [
		"l'excellence",
		"l'intervention",
		"l'objectif",
		"le diagnostic",
		"l'experience",
		"la formation",
		"l'évaluation",
		"la finalité",
		"l'expression",
		"le management",
		"la méthode",
		"le vécu",
		"le recadrage",
		"la logistique",
		"la compréhension",
		"l'organisation",
		"la planification",
		"l'exploration",
		"l'ordonancement",
		"l'amplitude",
		"le progrès",
		"l'approche qualitative",
		"la logique",
		"la force des choses",
		"la puissance",
		"le libéralisme",
		"l'ultra-libéralisme"
	],
	"verb.s": [
		"renforce",
		"mobilise",
		"révèle",
		"stimule",
		"modifie",
		"clarifie",
		"renouvelle",
		"identifie",
		"perfectionne",
		"développe",
		"dynamise",
		"programme",
		"ponctue",
		"intensifie",
		"affirme",
		"stabilise",
		"étend",
		"améliore",
		"synthétise",
		"régénère",
		"intensifie",
		"rétablit",
		"assure",
		"cristalise"
	],
	"nom.p": [
		"les facteurs",
		"les processus",
		"les paramètres",
		"les changements",
		"les concepts",
		"les savoir-faire",
		"les problèmes",
		"les indicateurs",
		"les résultats",
		"les effets",
		"les blocages",
		"les besoins",
		"les paradoxes",
		"les systèmes",
		"les progrès",
		"les standards",
		"les ensembles",
		"les groupements",
		"les convergences",
		"les tendances",
		"les bilans",
		"les révolutions",
		"les obstacles",
		"les barages",
		"les craintes",
		"les aspects"
	],
	"adj.p": [
		"institutionnels",
		"organisationnels",
		"qualificatifs",
		"analytiques",
		"caractéristiques",
		"opérationnels",
		"motivationnels",
		"pédagogiques",
		"représentatifs",
		"participatifs",
		"cumulatifs",
		"stratégiques",
		"systématiques",
		"informatifs",
		"relationnels",
		"quantitatifs",
		"distincts",
		"croissants",
		"novateurs",
		"impactants",
		"structurants",
		"élaborés",
		"fédérateurs"
	],
	"cod": [
		"des synergies",
		"du dispositif",
		"de l'entreprise",
		"du groupe",
		"du projet",
		"des bénéficiaires",
		"de la hiérarchie",
		"de la pratique",
		"de la démarche",
		"des acteurs",
		"de la situation",
		"des structures",
		"du métacadre",
		"de la société",
		"du développement",
		"des entités",
		"des services",
		"du marketing"
	],
	"prop": [
		"{nom.s} {verb.s} {nom.p} {adj.p} {cod}"
	],
	"phr": [
		"s'il est vrai que {prop}, n'oublions pas que seul {prop}.",
		"en effet, {prop}, mais, malgré tout {prop}.",
		"{prop} de part le fait que {prop}.",
		"{prop} quand {prop}.",
		"qui pourrait expliquer que {prop} si nul ne sait pourquoi {prop}.",
		"soyez en sûr, chers collaborateurs, {prop} car {prop}.",
		"{prop} et {prop}.",
		"{prop} sans que {prop}.",
		"néanmoins, si {prop} il est clair que {prop}.",
		"il est vrai que {prop} mais on ne peut ommettre que {prop}.",
		"c'est pourquoi il faut que {prop} et que {prop}.",
		"si {prop} alors {prop}.",
		"il suffirait pourtant que {prop} pour que {prop}.",
		"malgré tout, {prop} uniquement pour que {prop}.",
		"il devient donc nécessaire que {prop} pour que {prop}.",
		"comme le disait mon prédécesseur : \"{prop}\", il faut donc que {prop}.",
		"le fait que {prop} ne suffit plus, l'essentiel réside dans le fait que {prop}.",
		"je vous le dit chers collaborateurs, {prop} et seul {prop}.",
		"certes {prop} mais {prop}.",
		"nous devons garder en tête que {prop} sans oublier que {prop}.",
		"à ce jour, deux points sont à retenir : - {prop} - {prop}.",
		"sommes-nous sûr que {prop} ? non me direz-vous, seul {prop}.",
		"il est urgent que {prop} pour que {prop}.",
		"on pense souvent que {prop}, cela vient du faite que {prop}",
		"{prop}, et cela nous conduit à croire que {prop}",
		"on n'est pas surpris lorsque {prop}, cependant lorsque {prop} et que {prop} alors {prop}",
		"c'est en se souvenant que {prop} qu'on s'assure que {prop}"
	]
}
);

console.log(pp.render('phr'));
console.log(pp.render('phr'));
console.log(pp.render('phr'));
console.log(pp.render('phr'));
console.log(pp.render('phr'));
console.log(pp.render('phr'));
