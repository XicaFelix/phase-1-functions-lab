// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let distance = Math.abs(location-42);
    return distance;
}
function distanceFromHqInFeet(location){
    const blockLength = 264;
    let distance = distanceFromHqInBlocks(location);
    distance *= blockLength;
    return distance;
}
function distanceTravelledInFeet(startBlock, endBlock){
    let distance = 264 * Math.abs(startBlock - endBlock);
    return distance;
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    let fare;
    if (distance <= 400){
        fare = 0;
    } else if (distance <= 2000){
        fare = 0.02 * (distance - 400);
    }else if((distance > 2000) && (distance <= 2500)){
        fare = 25;
    }
    else{
        fare = 'cannot travel that far'
    }
    return fare;
}