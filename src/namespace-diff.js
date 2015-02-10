function buildOutput(outStates, base, sep) {
  for (var j = 0; j < outStates.length; j++) {
    outStates[j] = (base += outStates[j]);
    if (j !== outStates.length) {
      base += sep;
    }
  }
  return outStates;
}

function namespaceDiff(start, end, sep = '.') {
  if (start === end) {
    return { outStates: [], inStates: [] };
  }

  // Determine the state up to which they are the same
  var startStates = start.split(sep);
  var endStates = end.split(sep);
  var base = '';
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

export default namespaceDiff;
