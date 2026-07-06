const newYorkCities = [
  "Rush", "Rye", "Sackets Harbor", "Sag Harbor", "Saint Albans",
  "Saint Bonaventure", "Saint James", "Saint Johnsville", "Salamanca", "Salem",
  "Salisbury Mills", "Salt Point", "Sanborn", "Sandy Creek", "Saranac Lake",
  "Saratoga Springs", "Saugerties", "Sauquoit", "Sayville", "Scarsdale",
  "Schaghticoke", "Schenectady", "Schodack Landing", "Schuylerville", "Scottsville",
  "Sea Cliff", "Seaford", "Selden", "Selkirk", "Seneca Falls",
  "Shelter Island", "Shelter Island Heights", "Shenorock", "Sherrill", "Shirley",
  "Shokan", "Shoreham", "Shortsville", "Shrub Oak", "Shushan",
  "Sidney Center", "Sinclairville", "Skaneateles", "Skaneateles Falls", "Slate Hill",
  "Slingerlands", "Sloatsburg", "Smallwood", "Smithtown", "Smyrna",
  "Sodus", "Somers", "Sound Beach", "South Colton", "South Dayton",
  "South Fallsburg", "South Glens Falls", "South Jamesport", "South Ozone Park", "South Richmond Hill",
  "South Salem", "South Wales", "Southampton", "Southold", "Sparkill",
  "Speculator", "Spencerport", "Speonk", "Sprakers", "Spring Valley",
  "Springfield Center", "Springfield Gardens", "Springville", "Staatsburg", "Stanfordville",
  "Staten Island", "Steamburg", "Stephentown", "Stillwater", "Stone Ridge",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
