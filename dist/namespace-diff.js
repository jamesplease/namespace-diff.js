(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.namespaceDiff = factory();
})(this, function () {
  "use strict";

  function buildOutput(outStates, base, sep) {
    for (var j = 0; j < outStates.length; j++) {
      outStates[j] = base += outStates[j];
      if (j !== outStates.length) {
        base += sep;
      }
    }
    return outStates;
  }

  function namespaceDiff(start, end) {
    var sep = arguments[2] === undefined ? "." : arguments[2];
    if (start === end) {
      return { outStates: [], inStates: [] };
    }

    // Determine the state up to which they are the same
    var startStates = start.split(sep);
    var endStates = end.split(sep);
    var base = "";
    for (var i = 0; i < startStates.length; i++) {
      if (startStates[i] !== endStates[i]) {
        break;
      } else {
        base += startStates[i] + sep;
      }
    }

    var outStates = buildOutput(startStates.slice(i), base, sep);
    var inStates = buildOutput(endStates.slice(i), base, sep);

    // Use that information to generate the result
    return {
      outStates: outStates.reverse(),
      inStates: inStates
    };
  }

  var namespace_diff = namespaceDiff;

  return namespace_diff;
});
//# sourceMappingURL=./namespace-diff.js.map