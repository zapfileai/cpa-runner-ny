const newYorkCities = [
  "Conklin", "Constable", "Cooperstown", "Copake", "Copake Falls",
  "Copiague", "Coram", "Corfu", "Corning", "Cornwall",
  "Cornwall On Hudson", "Corona", "Cortland", "Cortlandt Manor", "Cossayuna",
  "Coxsackie", "Craryville", "Croghan", "Cross River", "Croton On Hudson",
  "Cuddebackville", "Cutchogue", "Dansville", "Darien Center", "Deer Park",
  "Delancey", "Delanson", "Delhi", "Delmar", "Depew",
  "Deposit", "Dewittville", "Dexter", "Dobbs Ferry", "Dover Plains",
  "Dryden", "Duanesburg", "Dunkirk", "Durhamville", "Eagle Bridge",
  "East Amherst", "East Aurora", "East Berne", "East Chatham", "East Concord",
  "East Elmhurst", "East Greenbush", "East Hampton", "East Islip", "East Marion",
  "East Meadow", "East Meredith", "East Moriches", "East Nassau", "East Northport",
  "East Norwich", "East Quogue", "East Rochester", "East Rockaway", "East Schodack",
  "East Setauket", "East Syracuse", "Eastchester", "Eastport", "Eden",
  "Edmeston", "Elba", "Elbridge", "Eldred", "Elizabethtown",
  "Elizaville", "Ellenburg Depot", "Ellenville", "Ellicottville", "Elma",
  "Elmhurst", "Elmira", "Elmont", "Elmsford", "Endicott",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
