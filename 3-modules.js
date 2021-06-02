const john = "John"

const info = (name) => {
    console.log("Hello "+name)
}

info("Farhan")
info(john)

require('./2-global')
const nama = require('./4-name')
const funcs = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')

funcs(nama.john)
funcs("Susan")
funcs(data.singlePerson.name)

// funcs.mySecondFunc(nama.wick)

module.exports = {
    testvar : 1000
}

console.log(module)
console.log(nama)
console.log(funcs)



