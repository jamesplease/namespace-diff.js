# namespace-diff.js
[![Travis build status](http://img.shields.io/travis/jmeas/namespace-diff.js.svg?style=flat)](https://travis-ci.org/jmeas/namespace-diff.js)
[![Code Climate](https://codeclimate.com/github/jmeas/namespace-diff.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/namespace-diff.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/namespace-diff.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/namespace-diff.js)
[![Dependency Status](https://david-dm.org/jmeas/namespace-diff.js.svg)](https://david-dm.org/jmeas/namespace-diff.js)
[![devDependency Status](https://david-dm.org/jmeas/namespace-diff.js/dev-status.svg)](https://david-dm.org/jmeas/namespace-diff.js#info=devDependencies)

Generate the diff between two namespaces.

### About

A namespace is a series of strings broken up by a separator. For instance,
`books.book.comments` and `books.about` use a period as a separator.
This library can generate the difference between two namespaces in terms of
*outgoing* parts and *incoming* parts.

For instance, given the above namespaces, this library would return:

```js
{
  outStates: ['books.book.comments', 'books.book'],
  inStates: ['books.about']
}
```

### API

#### namespaceDiff(start, end, separator = '.')

Generates the difference of `start` and `end`. Returns
an object with two keys, `outStates` and `inStates`.

Optionally pass a separator to handle namespaces formatted
differently. E.g.; `this/namespace/uses/slashes`. The
separator defaults to a period.

The outbound array is reversed such that the deepest nested
part is first in the array.

### Undefined values

Attempting to enter an `undefined` state is a no-op; the `outStates`
and `inStates` will be an empty array.

Leaving an `undefined` state and moving into a new state will include
entering the root state, `''`. This is the only time that the root
state will be entered.