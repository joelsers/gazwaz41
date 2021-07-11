
let obj1 = { '2': '3' }
let obj2 = { '2': '3' }

const compareObjects = (obj1, obj2) => {
    let objects = []
    objects.push(obj1)
    objects.push(obj2)
    if (objects[0] == objects[1]) {
        console.log('true')
    } else {
        console.log('false')
    }
}


console.log(compareObjects(obj1, obj2))

