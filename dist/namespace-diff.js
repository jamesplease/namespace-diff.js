(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.namespaceDiff = factory();
})(this, function () {
  "use strict";

  function namespaceDiff(start, end) {
    var sep = arguments[2] === undefined ? "." : arguments[2];
    if (start === end) {
      return { outStates: [], inStates: [] };
    }

    // Determine the state up to which they are the same
    var startStates = start.split(sep);
    var endStates = end.split(sep);
    for (var i = 0; i < startStates.length; i++) {
      if (startStates[i] !== endStates[i]) {
        break;
      }
    }

    // Use that information to generate the result
    return {
      outStates: startStates.slice(i).reverse(),
      inStates: endStates.slice(i)
    };
  }

  var namespace_diff = namespaceDiff;

  return namespace_diff;
});
//# sourceMappingURL=./namespace-diff.js.map