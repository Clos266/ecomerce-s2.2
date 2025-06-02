var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

var cart = [];

var total = 0;

function buy(id) {
  let cartProduct = [];
  let product = products.find((item) => {
    return item.id === id;
  });
  cartProduct = cart.find((cartProduct) => {
    return cartProduct === product;
  });
  if (product != cartProduct) {
    product.quantity = 1;
    cart.push(product);
  } else {
    cartProduct.quantity += 1;
    console.log("cartProduct", cartProduct, cartProduct.quantity);
  }

  applyPromotionsCart();
  printCart();
  calculateTotal();
  countProduct();
}

function cleanCart() {
  const cartTable = document.getElementById("cart_list");
  cartTable.innerHTML = "";
  document.getElementById("total_price").innerHTML = "00.00";
  cart = [];
  countProduct();
}

function calculateTotal() {
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].subtotalWithDiscount) {
      total += cart[i].subtotalWithDiscount;
    } else {
      total += cart[i].price * cart[i].quantity;
    }
  }
  document.getElementById("total_price").innerHTML = total.toFixed(2);
}

function applyPromotionsCart() {
  if (!Array.isArray(cart)) {
    console.error("cart no es un array:", cart);
    return;
  }

  for (let item of cart) {
    let originalProduct = products.find((p) => p.id === item.id);

    if (originalProduct && originalProduct.offer) {
      if (item.quantity >= originalProduct.offer.number) {
        let discount = originalProduct.offer.percent;
        let discountedPrice = originalProduct.price * (1 - discount / 100);
        item.subtotalWithDiscount = discountedPrice * item.quantity;
      }
    }
  }
}

function printCart() {
  const cartTable = document.getElementById("cart_list");
  cartTable.innerHTML = "";

  cart.forEach((item) => {
    cartTable.innerHTML += `<tr><th scope="row">${item.name}</th>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>${(item.subtotalWithDiscount ?? item.price * item.quantity).toFixed(
      2
    )}</td></tr>`;
  });
}
function countProduct() {
  let count = 0;
  cart.forEach((item) => {
    count += parseInt(item.quantity);
  });
  document.getElementById("count_product").innerHTML = count;
  console.log(count);
  return count;
}

function removeFromCart(id) {}

function open_modal() {
  printCart();
}
