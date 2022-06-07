import { createSeed } from "./seeds/seedFactory.js"
import { addPlant } from "./field.js"

export const plantSeeds = (plan) => {
  for (const row of plan) {
    for (const plant of row) {
      addPlant(createSeed(plant))
    }
  }
}
