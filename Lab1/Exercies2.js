String.prototype.filterwords = function (x) {
    let s = this
    for (var word in x) {
        s = s.replace(x[word], '***')
    }

    return s
}

console.log("This house is nice!".filterwords(["house", "nice"]))