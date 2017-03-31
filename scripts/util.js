module.exports.clearConsole = () => process.stdout.write(
  'win32' === process.platform ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
);
