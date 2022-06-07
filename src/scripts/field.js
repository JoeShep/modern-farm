const plants = []

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    plants.push(seed[0])
    plants.push(seed[1])
    return
  }
  plants.push(seed)
}

export const usePlants = () => plants.map((plant) => ({...plant}))
