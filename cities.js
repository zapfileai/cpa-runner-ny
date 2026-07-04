const newYorkCities = [
  "Hammondsport", "Hampton Bays", "Harriman", "Harrison", "Hartford",
  "Hartsdale", "Hastings On Hudson", "Hauppauge", "Haverstraw", "Hawthorne",
  "Hempstead", "Henrietta", "Herkimer", "Heuvelton", "Hewlett",
  "Hicksville", "Highland", "Highland Falls", "Highland Mills", "Hillsdale",
  "Hilton", "Himrod", "Hogansburg", "Holbrook", "Holland Patent",
  "Holley", "Hollis", "Holmes", "Holtsville", "Homer",
  "Honeoye", "Honeoye Falls", "Hoosick Falls", "Hopewell Junction", "Hornell",
  "Horseheads", "Houghton", "Howard Beach", "Howes Cave", "Hubbardsville",
  "Hudson", "Hudson Falls", "Hughsonville", "Hunter", "Huntington",
  "Huntington Station", "Hurley", "Hyde Park", "Ilion", "Indian Lake",
  "Irvington", "Island Park", "Islandia", "Islip", "Islip Terrace",
  "Ithaca", "Jackson Heights", "Jamaica", "Jamesport", "Jamestown",
  "Jamesville", "Jay", "Jefferson Valley", "Jericho", "Johnson City",
  "Johnstown", "Jordanville", "Katonah", "Kattskill Bay", "Kauneonga Lake",
  "Keeseville", "Kerhonkson", "Kew Gardens", "Kinderhook", "King Ferry",
  "Kings Park", "Kingston", "Kirkwood", "La Fayette", "Lacona",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
