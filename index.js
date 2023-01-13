// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


function findMatching(arr, name){
    return arr.filter(
        (driver)=> driver.toLowerCase() === name.toLowerCase()
                          )
}

function fuzzyMatch(arr, letters){
    return arr.filter(
        (driver) => driver.startsWith(letters)
    )
}
function matchName(arr, letters){
    return arr.filter(
        (drivObj)=> drivObj.name === letters
                      )
}