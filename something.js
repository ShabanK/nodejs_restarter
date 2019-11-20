const events = require("events");

const ee = new events.EventEmitter();

ee.on("myevent", () => {
  console.log("hellow");
});
ee.emit("myevent");
