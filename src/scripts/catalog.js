export const Catalog = (harvestedFoodArr) => {
  const catalogContainer = document.querySelector(".container")

  for ( const food of harvestedFoodArr ) {
    catalogContainer.innerHTML += `<section class="plant">${food.type}</section>`
  }
}
