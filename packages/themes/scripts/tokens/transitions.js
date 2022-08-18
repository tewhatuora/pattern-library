/**
 * Format transitions tokens
 * @param {Object} transitions transition tokens
 * @return {Object} Formatted transitions tokens
 */
const transitions = (transitions) => {
  // const formatted = Object.keys(transitions).reduce((tokens, name) => {
  //   tokens[name] = `${transitions[name].duration}s`; // transitions[name];
  //
  //   return tokens;
  // }, {});

  return {
    fast: 'transform .125s ease, opacity .125s ease',
  };
};

export default transitions;
