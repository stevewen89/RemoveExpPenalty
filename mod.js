const expFilename = 'global\\excel\\experience.txt';
const experience = D2RMM.readTsv(expFilename);
experience.rows.forEach((row) => {
  if (config.removeexppenalty) {
    if (row.Level >= 70 && row.Level <= 99) {
      row['ExpRatio\r'] = 1024;
    }
  }

  if (row.Level >= 1 && row.Level <= 99) {
    row['ExpRatio\r'] = Math.floor(row['ExpRatio\r'] * config.multiplyexp);
  }
});
D2RMM.writeTsv(expFilename, experience);
