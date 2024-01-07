let bands = new Set();
bands.add("Journey");
bands.add("Reo Speedwagon");
bands.add("styx");

if (bands.has("Journey")) {
  console.log("Journey is in the bands");
}

for (const band of bands) {
  console.log(band)
}