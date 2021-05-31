const myFirstFunc = (name) => {
    console.log("Your First name is "+name)
}

const mySecondFunc = (name) => {
    console.log("Your Last Name is "+name)
}

// multiple obbject
module.exports = { myFirstFunc, mySecondFunc }

// only one object (this will override the above module.exports objects)
module.exports = myFirstFunc

console.log(module)