function buildOutput(outStates, base, sep) {
  for (var j = 0; j < outStates.length; j++) {
    outStates[j] = (base += outStates[j]);
    if (j !== outStates.length) {
      base += sep;
    }
  }
  return outStates;
}

function namespaceDiff(start = '', end = '', sep = '.') {
  if (start === end) {
    return { outStates: [], inStates: [] };
  }

  // Determine the state up to which they are the same
  var startStates = start ? start.split(sep) : [];
  var endStates = end ? end.split(sep) : [];
  var base = '';
  for (var i = 0; i < startStates.length; i++) {
    if (startStates[i] !== endStates[i]) {
      break;
    } else {
      base += startStates[i] + sep;
    }
  }

  // Use that information to generate the result
  return {
    outStates: buildOutput(startStates.slice(i), base, sep).reverse(),
    inStates: buildOutput(endStates.slice(i), base, sep)
  };
}

export default namespaceDiff;
