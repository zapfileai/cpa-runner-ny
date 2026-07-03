const newYorkCities = [
  "Endwell", "Erieville", "Esopus", "Evans Mills", "Fabius",
  "Fairport", "Falconer", "Far Rockaway", "Farmingdale", "Farmington",
  "Farmingville", "Fayetteville", "Ferndale", "Feura Bush", "Fishkill",
  "Floral Park", "Florida", "Flushing", "Fly Creek", "Fonda",
  "Forest Hills", "Forestburgh", "Forestport", "Fort Ann", "Fort Edward",
  "Frankfort", "Franklin Square", "Fredonia", "Freeport", "Freeville",
  "Fresh Meadows", "Frewsburg", "Fulton", "Fultonville", "Galway",
  "Gansevoort", "Garden City", "Garnerville", "Garrison", "Gasport",
  "Geneseo", "Geneva", "Genoa", "Germantown", "Gerry",
  "Getzville", "Ghent", "Gilbertsville", "Gilboa", "Glen Cove",
  "Glen Head", "Glen Oaks", "Glen Spey", "Glenfield", "Glenham",
  "Glenmont", "Glens Falls", "Glenwood Landing", "Gloversville", "Goldens Bridge",
  "Goshen", "Gowanda", "Grand Island", "Granite Springs", "Great Neck",
  "Great River", "Great Valley", "Greene", "Greenfield Center", "Greenfield Park",
  "Greenlawn", "Greenport", "Greenvale", "Greenwich", "Greenwood Lake",
  "Guilderland", "Hagaman", "Haines Falls", "Hamburg", "Hamilton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
