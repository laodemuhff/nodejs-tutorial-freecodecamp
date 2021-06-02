// __dirname
// __filename
// exports
// module
// require()
// module.exports.a = 1

// Try all this to differ module.exports & exports
// module.exports = {a:1}
// exports.a = 2

// module.exports.a = 1
// exports.a = 2

// module.exports = {a:1}
// exports = {a:2}

// exports.a = 2
// module.exports = {a:1}

// exports = {a:1}
// module.exports.a = 2

// exports.a = 2
// module.exports.a = 1

// exports = {a:2}
// module.exports = {a:1}

module.exports.a = 10
exports.b = 15

console.log(__dirname)
console.log(__filename)
console.log(exports)
console.log(module)
console.log(module.exports)
// console.log(require())