export const harvestPlants = (plantsArr) => {
  const harvestedPlants = []

  for ( const plant of plantsArr) {
    const output = plant.type === "Corn" ? plant.output * .5 : plant.output
    for ( let i=1; i <= output; i++ ) {
      harvestedPlants.push(plant)
    }
  }
  // return an array of seed objects
  return harvestedPlants

}

// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...

// {
//     type: "Peanut",
//     height: 30,
//     output: 2
// }

// Then the array that the function returns should have two identical objects added to it.

// [
//     {
//         type: "Peanut",
//         height: 30,
//         output: 2
//     },
//     {
//         type: "Peanut",
//         height: 30,
//         output: 2
//     }
// ]

// Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
