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


    // If the states are the same, then we bail out
    if (start === end) {
      return { outStates: [], inStates: [] };
    }

    // If there's no end, then we don't go anywhere
    if (typeof end === "undefined") {
      return { outStates: [], inStates: [] };
    }

    // If the start doesn't exist, then we enter into
    // our states without any exits.
    if (typeof start === "undefined") {
      var output = buildOutput(end.split(sep), "", sep);
      if (end !== "") {
        output.unshift("");
      }
      return { outStates: [], inStates: output };
    }

    // Assuming we're working with empty strings from now on
    // makes future calculations easier
    start = start ? start : "";
    end = end ? end : "";

    // Determine the state up to which they are the same
    var startStates = start ? start.split(sep) : [];
    var endStates = end ? end.split(sep) : [];
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