'use strict';

var pluckKeyValues = require('pluck-key-values');
var dotty = require('dotty');

module.exports = indexBy;

indexBy.key = key;
indexBy.keys = keys;
indexBy.fn = fn;
indexBy.path = path;

function indexBy( list, by, map ){
	var map = map || {};

	if (typeof by === 'string')
		key(list, by, map);
	else if (typeof by === 'function')
		fn(list, by, map);
	else if (Array.isArray(by))
		keys(list, by, '.', map);
	else
		throw new Error('I cannot index by that');

	return map;
}

function key( list, key, map ){
	for (var i = list.length - 1;i >= 0;i--)
		map[list[i][key]] = list[i];
}

function keys( list, keys, sep, map ){
	for (var i = list.length - 1;i >= 0;i--)
		map[pluckKeyValues(list[i], keys).join(sep)] = list[i];
}

function fn( list, fn, map ){
	for (var i = list.length - 1;i >= 0;i--)
		map[fn(list[i], i, list)] = list[i];
}

function path( list, path, map ){
	var map = map || {};

	for (var i = list.length - 1;i >= 0;i--)
		map[dotty.get(list[i], path)] = list[i];

	return map;
}
