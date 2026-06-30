const newYorkCities = [
  "Accord", "Adams Center", "Akron", "Albany", "Albertson",
  "Albion", "Alden", "Alexandria Bay", "Alfred Station", "Allegany",
  "Alplaus", "Altamont", "Altona", "Amagansett", "Amawalk",
  "Amityville", "Amsterdam", "Ancram", "Angelica", "Apalachin",
  "Appleton", "Aquebogue", "Arcade", "Arden", "Ardsley",
  "Armonk", "Arverne", "Astoria", "Atlantic Beach", "Attica",
  "Au Sable Forks", "Auburn", "Averill Park", "Avon", "Babylon",
  "Bainbridge", "Baldwin", "Baldwin Place", "Baldwinsville", "Ballston Lake",
  "Ballston Spa", "Barker", "Barryville", "Batavia", "Bath",
  "Bay Shore", "Bayport", "Bayside", "Bayville", "Beacon",
  "Beaver Falls", "Bedford", "Bedford Hills", "Bellerose", "Bellmore",
  "Bellport", "Bemus Point", "Berkshire", "Berne", "Bethpage",
  "Big Flats", "Binghamton", "Black River", "Blauvelt", "Bloomingburg",
  "Blossvale", "Blue Mountain Lake", "Blue Point", "Bohemia", "Bolton Landing",
  "Boston", "Bowmansville", "Brainardsville", "Brant", "Brantingham",
  "Breezy Point", "Brentwood", "Brewerton", "Brewster", "Briarcliff Manor",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newYorkCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newYorkCities[i]);
}

module.exports = { batches };
