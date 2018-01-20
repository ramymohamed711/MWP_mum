var os = require('os');
var rx = require('@reactivex/rxjs')

var syschecking = function (mem , cpus) {
    return new Promise(function (resolve, reject) {
        if (mem < 4)
            reject("This app needs at least 4 giga ram")

        if (cpus < 2)
            reject("processor is not supported")

        if (mem >= 4 && cpus >= 2)
            resolve("system is checked successfully!")
    })
}

const mem = os.totalmem() / 1073741824;
const cpus = os.cpus().length
console.log("Checking your system...")
syschecking(mem, cpus)
.then(data=>console.log(data))
.catch(error => console.log(error))

/*using observable i used the from promise function 
to convert the promise to a stream 
*/
rx.Observable.fromPromise(syschecking(mem,cpus)).subscribe(
    (msg)=>console.log(msg),
    (error)=>console.log(error),
    ()=>console.log("Second way: Observable is completed system checking")
)

/**
 * an other way is create new observable
 * add the checking process in creating function
 * parameter and pass the message to next function
*/
var observable = rx.Observable.create(observer=>{
    if(mem < 4)
    observer.next("Third way: This app needs at least 4 giga ram")
    if(cpus < 2)
    observer.next("Third way: Unspported processor")
    if(mem >= 4 && cpus >= 2)
    observer.next("Third way: system is checked successfully!")
})
observable.subscribe((x)=>{console.log(x)})