// let cart = {}

// function addToCart(name, price, img) {
//   const quantitySelect = document.getElementById('quantity' + name)
//   const quantity = parseInt(quantitySelect.value, 10)
//   if (quantity > 0) {
//     if (!cart[name]) {
//       cart[name] = { price: price, quantity: quantity, img: img, elementId: 'quantity' + name }
//     } else {
//       cart[name].quantity += quantity
//     }
//     updateCart()
//     showNotification(name)
//   }
// }

// function updateCart() {
//   const cartItems = document.getElementById('cart-items')
//   cartItems.innerHTML = ''
//   let total = 0

//   for (const item in cart) {
//     const cartItem = cart[item]
//     const subtotal = cartItem.price * cartItem.quantity
//     total += subtotal

//     cartItems.innerHTML += `
//       <tr ">
//         <td class="py-2 px-4">
//           <img src="${cartItem.img}" alt="${item}" class="w-12 h-12 inline-block mr-2">
//           ${item}
//         </td>
//         <td class="py-2 px-4">
//           <input type="number" min="1" value="${cartItem.quantity}" class="w-12" onchange="updateQuantity('${item}', this.value)">
//         </td>
//         <td class="py-2 px-4">₦${subtotal}</td>
//         <td class="py-2 px-4">
//           <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="removeFromCart('${item}')">Remove</button>
//         </td>
//       </tr>
//     `
//   }

//   document.getElementById('total-price').innerText = `₦${total}`
// }

// function updateQuantity(name, quantity) {
//   cart[name].quantity = parseInt(quantity, 10)
//   updateCart()
//   updateMainQuantity(name, quantity)
// }

// function updateMainQuantity(name, quantity) {
//   const quantitySelect = document.getElementById(cart[name].elementId)
//   quantitySelect.value = quantity
//   updatePrice('price' + name, quantitySelect, cart[name].price)
// }

// function removeFromCart(name) {
//   delete cart[name]
//   updateCart()
// }

// function showNotification(item) {
//   const notification = document.getElementById('notification')
//   notification.innerText = `${item} added to cart`
//   notification.style.display = 'block'
//   setTimeout(() => {
//     notification.style.display = 'none'
//   }, 2000)
// }

// function updatePrice(priceId, selectElement, initialPrice) {
//   const priceElement = document.getElementById(priceId)
//   const quantity = parseInt(selectElement.value, 10)
//   const newPrice = initialPrice * quantity
//   priceElement.textContent = `Price: ₦${newPrice}`
//   if (cart[priceId.replace('price', '')]) {
//     cart[priceId.replace('price', '')].quantity = quantity
//     updateCart()
//   }
// }

// // Populate select options
// const quantitySelects = document.querySelectorAll('select[id^=quantity]')
// quantitySelects.forEach(select => {
//   const initialOption = document.createElement('option')
//   initialOption.value = 0
//   initialOption.textContent = 0
//   initialOption.disabled = true // Disable the first item but keep it visible
//   select.appendChild(initialOption)

//   for (let i = 1; i <= 20; i++) {
//     const option = document.createElement('option')
//     option.value = i
//     option.textContent = i
//     select.appendChild(option)
//   }

//   // Set default quantity to 1
//   select.value = 1
// })




let cart = {}

function addToCart(name, price, img) {
  const quantitySelect = document.getElementById('quantity' + name)
  const quantity = parseInt(quantitySelect.value, 10)
  if (quantity > 0) {
    if (!cart[name]) {
      cart[name] = { price: price, quantity: quantity, img: img }
    } else {
      cart[name].quantity += quantity
    }
    updateCart()
    showNotification(name)
  }
}

function updateCart() {
  const cartItems = document.getElementById('cart-items')
  cartItems.innerHTML = ''
  let total = 0

  for (const item in cart) {
    const cartItem = cart[item]
    const subtotal = cartItem.price * cartItem.quantity
    total += subtotal

    cartItems.innerHTML += `
      <tr>
        <td class="py-2 px-4"><img src="${cartItem.img}" alt="${item}" class="w-12 h-12 object-cover"></td>
        <td class="py-2 px-4">${item}</td>
        <td class="py-2 px-4">
          <input type="number" min="1" value="${cartItem.quantity}" class="w-12" onchange="updateQuantity('${item}', this.value)">
        </td>
        <td class="py-2 px-4">₦${subtotal}</td>
        <td class="py-2 px-4">
          <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="removeFromCart('${item}')">Remove</button>
        </td>
      </tr>
    `
  }

  document.getElementById('total-price').innerText = `₦${total}`
}

function updateQuantity(name, quantity) {
  cart[name].quantity = parseInt(quantity, 10)
  updateCart()
  updateMainQuantity(name, quantity)
}

function updateMainQuantity(name, quantity) {
  const quantitySelect = document.getElementById('quantity' + name)
  quantitySelect.value = quantity
  updatePrice('price' + name, quantitySelect, cart[name].price)
}

function removeFromCart(name) {
  delete cart[name]
  updateCart()
}

function showNotification(item) {
  const notification = document.getElementById('notification')
  notification.innerText = `${item} added to cart`
  notification.style.display = 'block'
  setTimeout(() => {
    notification.style.display = 'none'
  }, 2000)
}

function updatePrice(priceId, selectElement, initialPrice) {
  const priceElement = document.getElementById(priceId)
  const quantity = parseInt(selectElement.value, 10)
  const newPrice = initialPrice * quantity
  priceElement.textContent = `Price: ₦${newPrice}`
  if (cart[priceId.replace('price', '')]) {
    cart[priceId.replace('price', '')].quantity = quantity
    updateCart()
  }
}

function proceedToCheckout() {
      localStorage.setItem('cart', JSON.stringify(cart))
      window.location.href = 'checkout.html'
    }

// Populate select options
const quantitySelects = document.querySelectorAll('select[id^=quantity]')
quantitySelects.forEach(select => {
  const option = document.createElement('option')
  option.value = 0
  option.textContent = 0
  option.disabled = true
  select.appendChild(option)

  for (let i = 1; i <= 20; i++) {
    const option = document.createElement('option')
    option.value = i
    option.textContent = i
    select.appendChild(option)
  }
  select.value = 0
});



 function updateCheckoutSummary() {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const orderSummary = document.getElementById('order-summary');
      let total = 0;

      for (const item in cart) {
        const cartItem = cart[item];
        const subtotal = cartItem.price * cartItem.quantity;
        total += subtotal;

        orderSummary.innerHTML += `
          <div class="flex items-center justify-between p-2">
            <p>${item} x ${cartItem.quantity}</p>
            <p>₦${subtotal}</p>
          </div>
        `;
      }

      document.getElementById('total-price').innerText = `₦${total}`;
    }

    window.onload = updateCheckoutSummary;