const newYorkCities = [
  "Pearl River", "Peconic", "Peekskill", "Pelham", "Penfield",
  "Penn Yan", "Pennellville", "Perry", "Peru", "Phelps",
  "Phoenicia", "Piermont", "Piffard", "Pine Bush", "Pine Hill",
  "Pine Island", "Pine Plains", "Pittsford", "Plainview", "Plattsburgh",
  "Pleasant Valley", "Pleasantville", "Poestenkill", "Point Lookout", "Pomona",
  "Pompey", "Port Chester", "Port Crane", "Port Ewen", "Port Jefferson",
  "Port Jefferson Station", "Port Jervis", "Port Leyden", "Port Washington", "Porter Corners",
  "Portville", "Potsdam", "Poughkeepsie", "Poughquag", "Pound Ridge",
  "Prattsburgh", "Purchase", "Purdys", "Purling", "Putnam Valley",
  "Queens Village", "Queensbury", "Quogue", "Ransomville", "Ravena",
  "Red Hook", "Rego Park", "Remsenburg", "Rensselaer", "Rensselaerville",
  "Rexford", "Rhinebeck", "Richfield Springs", "Richmond Hill", "Richmondville",
  "Ridge", "Ridgewood", "Rifton", "Riverhead", "Rochester",
  "Rock Hill", "Rock Tavern", "Rockaway Park", "Rockville Centre", "Rocky Point",
  "Rodman", "Rome", "Ronkonkoma", "Roosevelt", "Rosedale",
  "Roslyn", "Roslyn Heights", "Rotterdam Junction", "Round Lake", "Rouses Point",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
