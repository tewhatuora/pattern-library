import util from 'util';

export const log = (message) => console.log(util.inspect(message, { colors: true, depth: Infinity }));
