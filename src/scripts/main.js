import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plants = usePlants()
const harvest = harvestPlants(plants)

Catalog(harvest)
