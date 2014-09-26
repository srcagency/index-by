'use strict';

var indexBy = require('./');
var test = require('tape');

test(function( t ) {
	var chickens = [
		{ name: 'Gurli', owner: 'Ivan', plan: { bought: 'today', slaughter: 'tomorrow' }, hunger: 3 },
		{ name: 'Obik', owner: 'Peter', plan: { bought: 'today', slaughter: 'yesterday' }, hunger: 1 },
		{ name: 'Lui', owner: 'Ivan', plan: { bought: 'today', slaughter: 'never' }, hunger: 5 },
	];

	t.deepEqual(indexBy(chickens, 'name'), {
		Gurli: chickens[0],
		Obik: chickens[1],
		Lui: chickens[2],
	});

	t.deepEqual(indexBy(chickens, 'owner'), {
		Ivan: chickens[0],
		Peter: chickens[1],
	});

	t.deepEqual(indexBy(chickens, [ 'owner', 'name' ]), {
		'Ivan.Gurli': chickens[0],
		'Peter.Obik': chickens[1],
		'Ivan.Lui': chickens[2],
	});

	t.deepEqual(indexBy(chickens, function( chicken ){
		return chicken.name.substr(-2);
	}), {
		li: chickens[0],
		ik: chickens[1],
		ui: chickens[2],
	});

	t.deepEqual(indexBy.path(chickens, 'plan.slaughter'), {
		tomorrow: chickens[0],
		yesterday: chickens[1],
		never: chickens[2],
	});

	t.deepEqual(indexBy.path(chickens, 'plan.bought'), {
		today: chickens[0],
	});

	t.end();
});
