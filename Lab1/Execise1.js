'use strict'
class Musician {
    constructor(name){
        this.name = name
    }
     play(piece) {
        console.log(`[ ${this.name} ] is now playing ${piece}`) 
    }
}
let Violinist = new Musician("RamyOne")

let Pianist = new Musician("RamyTwo")

Violinist.play("Test1")
Pianist.play("Test2")
