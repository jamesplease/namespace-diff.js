# namespace-diff.js
[![Travis build status](http://img.shields.io/travis/jmeas/namespace-diff.js.svg?style=flat)](https://travis-ci.org/jmeas/namespace-diff.js)
[![Code Climate](https://codeclimate.com/github/jmeas/namespace-diff.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/namespace-diff.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/namespace-diff.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/namespace-diff.js)
[![Dependency Status](https://david-dm.org/jmeas/namespace-diff.js.svg)](https://david-dm.org/jmeas/namespace-diff.js)
[![devDependency Status](https://david-dm.org/jmeas/namespace-diff.js/dev-status.svg)](https://david-dm.org/jmeas/namespace-diff.js#info=devDependencies)

Generate a diff between two namespaces.

### About

A namespace is a series of strings separated by a period. For instance,
`books.book.comments` and `books.about`. This library can generate the
difference between two namespaces in terms of *outgoing* parts and
*incoming* parts.

For instance, given the above namespaces, this library would return:

```js
{
  outStates: ['comments', 'book'],
  inStates: ['about']
}
```

### API

#### namespaceDiff(start, end, separator = '.')

Generates the difference of `start` and `end`. Returns
an object with two keys, `out` and `in`.

Optionally pass a separator to handle namespaces formatted
differently. E.g.; `this/namespace/uses/slashes`. The
separator defaults to a period.

The outbound array is reversed such that the deepest nested
part is first in the array.
