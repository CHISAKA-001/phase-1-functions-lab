// Code your solution in this file!

//distanceFromHqInBlocks()
function distanceFromHqInBlocks(blockDistance){
    if (blockDistance > 42) {
        return blockDistance - 42;
    } else {
        return 42 - blockDistance;
    }
}

//distanceFromHqInFeet()
function distanceFromHqInFeet (blockDistance) {
    return distanceFromHqInBlocks(blockDistance) * 264;
}

//distanceTravelledInFeet()
 function distanceTravelledInFeet(start, destination) {
    return start < destination ? (destination -start) * 264 :(start -destination) * 264;
 }

 //calculatesFarePrice(start, destination)
 function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }


