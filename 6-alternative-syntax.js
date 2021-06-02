//const items = ['item1', 'item2']

// module as u go
module.exports.item = ['item1', 'item2']
 
const person = {
    name: 'bob'
}

const multiplePerson = {
    first_name: 'john',
    last_name : 'wick'
}

module.exports.singlePerson = person
exports.multiplePerson = multiplePerson
exports = {}

console.log('exports :', exports)
console.log('module  :', module)