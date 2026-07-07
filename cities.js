const newYorkCities = [
  "Stony Brook", "Stony Point", "Stormville", "Stuyvesant", "Suffern",
  "Sugar Loaf", "Sunnyside", "Sylvan Beach", "Syosset", "Syracuse",
  "Tannersville", "Tappan", "Tarrytown", "Thiells", "Thornwood",
  "Tillson", "Tomkins Cove", "Tonawanda", "Treadwell", "Troy",
  "Trumansburg", "Tuckahoe", "Tully", "Tupper Lake", "Tuxedo Park",
  "Ulster Park", "Uniondale", "Upton", "Utica", "Valatie",
  "Valhalla", "Valley Cottage", "Valley Stream", "Verbank", "Verona",
  "Verplanck", "Vestal", "Victor", "Victory Mills", "Voorheesville",
  "Waccabuc", "Wading River", "Wainscott", "Walden", "Wallkill",
  "Walton", "Walworth", "Wantagh", "Wappingers Falls", "Warners",
  "Warwick", "Washingtonville", "Water Mill", "Waterport", "Watertown",
  "Watervliet", "Waverly", "Webster", "Weedsport", "West Babylon",
  "West Chazy", "West Coxsackie", "West Edmeston", "West Falls", "West Harrison",
  "West Haverstraw", "West Hempstead", "West Henrietta", "West Hurley", "West Islip",
  "West Nyack", "West Point", "West Sand Lake", "West Sayville", "West Shokan",
  "Westbrookville", "Westbury", "Westerlo", "Westfield", "Westhampton Beach",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
