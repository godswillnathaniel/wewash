

// // // Function to update price based on selected quantity
// function updatePrice(priceId, selectElement, initialPrice) {
//   const priceElement = document.getElementById(priceId)
//   const quantity = parseInt(selectElement.value, 10)
//   const newPrice = initialPrice * quantity
//   priceElement.textContent = `Price: ₦${newPrice}`
// }

// // Populate select options
// const quantitySelects = document.querySelectorAll('.quantity')
// quantitySelects.forEach(select => {
//   for (let i = 1; i <= 20; i++) {
//     const option = document.createElement('option')
//     option.value = i
//     option.textContent = i
//     select.appendChild(option)
//   }
// })


// function updateOrderSummary() {
//   let subtotal = 0

//   // Calculate the subtotal
//   document.querySelectorAll('.quantity').forEach(select => {
//     const priceId = select.closest('.clothe').querySelector('[id^="price"]').id
//     const priceElement = document.getElementById(priceId)
//     const price = parseInt(priceElement.textContent.replace('Price: ₦', ''), 10)
//     subtotal += price
//   })

//   // Update the subtotal and total in the order summary
//   const subtotalElement = document.getElementById('subtotal')
//   const totalElement = document.getElementById('total')
//   subtotalElement.textContent = `₦${subtotal}`
//   totalElement.textContent = `₦${subtotal}`
// }

// // Initial update to set default values
// updateOrderSummary()

// // checkout page






// 22222222222222222222


function updatePrice(priceId, selectElement, initialPrice) {
  const priceElement = document.getElementById(priceId)
  const quantity = parseInt(selectElement.value, 10)
  const newPrice = initialPrice * quantity
  priceElement.textContent = `Price: ₦${newPrice}`
}

function enableAddButton(buttonId, selectElement, initialPrice) {
  const button = document.getElementById(buttonId)
  const quantity = parseInt(selectElement.value, 10)
  button.disabled = quantity <= 0

  // Update the displayed price when the quantity changes
  updatePrice(selectElement.id.replace('quantity', 'price'), selectElement, initialPrice)
}

function addToSummary(initialPrice, priceId, quantityId, buttonId) {
  const priceElement = document.getElementById(priceId)
  const price = parseInt(priceElement.textContent.replace('Price: ₦', ''), 10)

  const subtotalElement = document.getElementById('subtotal')
  const totalElement = document.getElementById('total')

  const currentSubtotal = parseInt(subtotalElement.textContent.replace('₦', ''), 10)
  const newSubtotal = currentSubtotal + price

  subtotalElement.textContent = `₦${newSubtotal}`
  totalElement.textContent = `₦${newSubtotal}`

  // Reset the quantity selection and disable the "Add" button
  const quantitySelect = document.getElementById(quantityId)
  quantitySelect.value = 0
  document.getElementById(buttonId).disabled = true

  // Reset the displayed price to the initial price
  updatePrice(priceId, quantitySelect, initialPrice)
}

// Populate select options
const quantitySelects = document.querySelectorAll('.quantity')
quantitySelects.forEach(select => {
  const initialOption = document.createElement('option')
  initialOption.value = 0
  initialOption.textContent = 0
  select.appendChild(initialOption)

  for (let i = 1; i <= 20; i++) {
    const option = document.createElement('option')
    option.value = i
    option.textContent = i
    select.appendChild(option)
  }
});



