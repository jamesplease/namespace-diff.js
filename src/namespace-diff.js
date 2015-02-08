function namespaceDiff(start, end, sep = '.') {
  if (start === end) {
    return {outStates: [], inStates: []};
  }

  // Determine the state up to which they are the same
  var startStates = start.split(sep);
  var endStates = end.split(sep);
  for (var i = 0; i < startStates.length; i++) {
    if (startStates[i] !== endStates[i]) {  break; }
  }

  // Use that information to generate the result
  return {
    outStates: startStates.slice(i).reverse(),
    inStates: endStates.slice(i)
  };
}

export default namespaceDiff;
