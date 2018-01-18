const Evemitter = require("events")
class Clock extends Evemitter {
    constructor() {
        super()
    }
}
var clock = new Clock();
clock.on("tick", function () {
    console.log("WooHoo")
})

clock.emit("tick")
