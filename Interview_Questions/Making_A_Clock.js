//Making a accurate clock/ timer using nested settimeouts.

var interval = 1000; // ms
var expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
  var dt = Date.now() - expected; // the drift (positive for overshooting)
  console.log("dt=", dt);
  if (dt > interval) {
    // something really bad happened. Maybe the browser (tab) was inactive?
    // possibly special handling to avoid futile "catch up" run
  }
  expected += interval;
  setTimeout(step, Math.max(0, interval - dt)); // take into account drift
}
