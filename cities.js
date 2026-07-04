const newYorkCities = [
  "Lagrangeville", "Lake George", "Lake Grove", "Lake Katrine", "Lake Luzerne",
  "Lake Peekskill", "Lake Placid", "Lake Success", "Lake View", "Lancaster",
  "Lansing", "Larchmont", "Latham", "Laurel", "Lawrence",
  "Le Roy", "Leicester", "Levittown", "Lewiston", "Lincolndale",
  "Lindenhurst", "Little Falls", "Little Genesee", "Little Neck", "Little Valley",
  "Liverpool", "Livingston Manor", "Livonia", "Locke", "Lockport",
  "Lockwood", "Locust Valley", "Long Beach", "Long Island City", "Lowman",
  "Lowville", "Lynbrook", "Lyon Mountain", "Lyons", "Lyons Falls",
  "Macedon", "Mahopac", "Malone", "Malverne", "Mamaroneck",
  "Manhasset", "Manlius", "Manorville", "Marcellus", "Marcy",
  "Maspeth", "Massapequa", "Massapequa Park", "Massena", "Mastic",
  "Mastic Beach", "Mattituck", "Maybrook", "Mayville", "Mcgraw",
  "Mechanicville", "Medford", "Melville", "Merrick", "Middle Grove",
  "Middle Island", "Middle Village", "Middletown", "Mill Neck", "Millbrook",
  "Miller Place", "Millerton", "Millwood", "Milton", "Mineola",
  "Minetto", "Minoa", "Modena", "Mohawk", "Mohegan Lake",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
