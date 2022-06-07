import { createAsparagus } from "./asparagus.js"
import { createCorn } from "./corn.js"
import { createPotato } from "./potato.js"
import { createSoybean } from "./soybean.js"
import { createSunflower } from "./sunflower.js"
import { createWheat } from "./wheat.js"

const seeds = {
  createAsparagus,
  createCorn,
  createPotato,
  createSoybean,
  createSunflower,
  createWheat
}

export const createSeed = (type) => {
  const fnRef = `create${type}`
  return seeds[fnRef]()
}
