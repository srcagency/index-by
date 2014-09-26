# indexBy

Create an object from an array of objects indexed by a chosen key

## Install

```
npm install index-by
```

## Usage

```js
var chickens = [
	{ name: 'Gurli', hunger: 3 },
	{ name: 'Obik', hunger: 1 },
	{ name: 'Lui', hunger: 5 },
];

var indexBy = require('index-by');

indexBy(chickens, 'name');
// { Gurli: .., Obik: .., Lui: .. }

indexBy(chickens, [ 'name', 'hunger' ]);
// { 'Gurli.3': .., 'Obik.1': .., 'Lui.5': .. }

indexBy(chickens, callback);
// index by the return value of: callback(currentValue, index, array)

indexBy.path(list, 'path.to.key');
// index by a deep key
```

All functions take a third argument `map` which is an existing map to
amend

## License

[MIT](http://opensource.org/licenses/MIT) © [src.agency](http://src.agency) / Thomas Jensen
