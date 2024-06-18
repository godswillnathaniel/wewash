

// // Function to update price based on selected quantity
function updatePrice(priceId, selectElement, initialPrice) {
  const priceElement = document.getElementById(priceId)
  const quantity = parseInt(selectElement.value, 10)
  const newPrice = initialPrice * quantity
  priceElement.textContent = `Price: ₦${newPrice}`
}

// Populate select options
const quantitySelects = document.querySelectorAll('.quantity')
quantitySelects.forEach(select => {
  for (let i = 1; i <= 20; i++) {
    const option = document.createElement('option')
    option.value = i
    option.textContent = i
    select.appendChild(option)
  }
})
