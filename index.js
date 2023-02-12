function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42 
    } else if (42 > block) {
        return 42 - block
    }
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264
}


function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) *264
    } else {
        return (start - destination) *264
    }
}


function calculatesFarePrice(start, destination) {
    const distanceTraveled = distanceTravelledInFeet(start, destination)

    if (distanceTraveled <= 400) {
        return 0
    } 
    else if (distanceTraveled > 400 && distanceTraveled <= 2000 ) { 
        return (distanceTraveled - 400) * .02
    }
    else if (distanceTraveled > 2000 && distanceTraveled <= 2500) {
        return 2500 / 100
    }
    else {
        return 'cannot travel that far'
    }
} 