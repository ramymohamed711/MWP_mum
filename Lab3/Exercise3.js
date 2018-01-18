const Evemitter = require("events")
class Clock extends Evemitter {
    constructor() {
        super()
        this.name="woohooo"
    }
    everytick(){
        setInterval(()=>console.log(`${this.name}`),1000)
    }
}

var clock = new Clock();
clock.on("tick", clock.everytick)
clock.emit("tick")
