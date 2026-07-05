const newYorkCities = [
  "Mongaup Valley", "Monroe", "Monsey", "Montauk", "Montgomery",
  "Monticello", "Montour Falls", "Montrose", "Moravia", "Mount Kisco",
  "Mount Sinai", "Mount Upton", "Mount Vernon", "Mount Vision",
  "Nanuet", "Napanoch", "Naples", "Narrowsburg", "Nassau",
  "Nedrow", "Nesconset", "Neversink", "New City", "New Hartford",
  "New Hyde Park", "New Lebanon", "New Paltz", "New Rochelle", "New Windsor",
  "New York", "New York City", "New York Mills", "Newark", "Newark Valley",
  "Newburgh", "Newfane", "Niagara Falls", "Niskayuna", "North Babylon",
  "North Bangor", "North Chili", "North Creek", "North Java", "North River",
  "North Rose", "North Salem", "North Tonawanda", "Northport", "Nyack",
  "Oakdale", "Oakland Gardens", "Oaks Corners", "Oceanside", "Ogdensburg",
  "Old Bethpage", "Old Forge", "Old Westbury", "Olean", "Oneida",
  "Oneonta", "Ontario", "Orangeburg", "Orchard Park", "Oriskany",
  "Ossining", "Oswego", "Otego", "Otisville", "Owego",
  "Oyster Bay", "Ozone Park", "Painted Post", "Palisades", "Palmyra",
  "Paradox", "Parksville", "Patchogue", "Patterson", "Pavilion",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
