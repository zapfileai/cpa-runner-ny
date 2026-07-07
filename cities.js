const newYorkCities = [
  "Westtown", "White Plains", "Whitesboro", "Whitestone", "Whitney Point",
  "Williamson", "Williston Park", "Wingdale", "Winthrop", "Woodbury",
  "Woodhaven", "Woodmere", "Woodside", "Woodstock", "Wurtsboro",
  "Wyandanch", "Wynantskill", "Yaphank", "Yonkers", "Yorktown Heights",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
