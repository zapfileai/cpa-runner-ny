const newYorkCities = [
  "Bridgehampton", "Bridgeport", "Brightwaters", "Broadalbin", "Brockport",
  "Bronx", "Bronxville", "Brookfield", "Brookhaven", "Brooklyn",
  "Brooktondale", "Brushton", "Buchanan", "Buffalo", "Burdett",
  "Burlington Flats", "Burnt Hills", "Cadyville", "Caledonia", "Callicoon",
  "Calverton", "Cambria Heights", "Camillus", "Campbell Hall", "Canaan",
  "Canajoharie", "Canandaigua", "Canastota", "Canisteo", "Canton",
  "Cape Vincent", "Carle Place", "Carmel", "Castile", "Castleton On Hudson",
  "Catskill", "Cattaraugus", "Cazenovia", "Cedarhurst", "Center Moriches",
  "Centereach", "Centerport", "Central Islip", "Central Square", "Central Valley",
  "Chadwicks", "Champlain", "Chappaqua", "Chaumont", "Chautauqua",
  "Chazy", "Chelsea", "Chenango Forks", "Chester", "Chittenango",
  "Churchville", "Cicero", "Circleville", "Clarence", "Clarence Center",
  "Claverack", "Clay", "Clayville", "Cleverdale", "Clifton Park",
  "Clifton Springs", "Clinton", "Clinton Corners", "Clintondale", "Clymer",
  "Cobleskill", "Cohocton", "Cohoes", "Cold Spring", "Cold Spring Harbor",
  "Colden", "College Point", "Colton", "Commack", "Congers",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
