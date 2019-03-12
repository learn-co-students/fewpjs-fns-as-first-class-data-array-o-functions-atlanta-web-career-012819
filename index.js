const wakeDog = function wakeDog(dogName, dogBreed) {
  const message = `Wake ${dogName} the ${dogBreed}`
  console.log(message);
  return message;
}

const leashDog = function leashDog(dogName, dogBreed) {
  const message = `Leash ${dogName} the ${dogBreed}`
  console.log(message);
  return message;
}

const walkToPark = function walkToPark(dogName, dogBreed) {
  const message = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(message);
  return message;
}

const throwFrisbee = function throwFrisbee(dogName, dogBreed) {
  const message = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(message);
  return message;
}

const walkHome = function walkHome(dogName, dogBreed) {
  const message = `Walk home with ${dogName} the ${dogBreed}`
  console.log(message);
  return message;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
  const message = `Unleash ${dogName} the ${dogBreed}`
  console.log(message);
  return message;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  return routine.map(task => task(dogName, dogBreed))
}