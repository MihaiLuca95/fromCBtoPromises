// Object
const data = {
    first: 1000,
    second: 2000
}

// Check existing properties in Object

const getValueOf = function(property) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.hasOwnProperty(property) ? resolve(data[property]) : reject(new ReferenceError('No such property in DATA!'))
        }, 3000 * Math.random());
    })
}

//invoke
getValueOf('first')
    .then(res => {
        console.log('Succes! DATA: ', res)
        getValueOf('second')
        .then(res => console.log('Succes! DATA: ', res))
        .catch(err => console.error('Data NOT available: ', err.message))
    })
    .catch(err => console.error('Data NOT available: ', err.message))