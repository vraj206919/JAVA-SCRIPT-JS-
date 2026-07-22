let products = JSON.parse(localStorage.getItem("products")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

loadProducts();

function loadProducts() {
  if (products.length > 0) {
    displayProducts(products);

    displayCart();

    return;
  }

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())

    .then((data) => {
      products = data.map((product) => ({
        id: product.id,

        title: product.title,

        price: product.price,

        image: product.image,
      }));

      saveProducts();

      displayProducts(products);

      displayCart();
    });
}

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function displayProducts(data) {
  let html = "";

  data.forEach((product) => {
    html += `

<div class="col-md-3 mb-4">


<div class="card h-100">


<img src="${product.image}"
class="product-img">



<div class="card-body text-center">



<h5 class="card-title">

${product.title}

</h5>



<p class="price">

₹ ${product.price}

</p>



<button class="btn cart-btn w-100 mb-2"

onclick="addToCart(${product.id})">

Add To Cart

</button>



<button class="btn edit-btn w-100 mb-2"

onclick="editProduct(${product.id})">

Edit

</button>



<button class="btn delete-btn w-100"

onclick="deleteProduct(${product.id})">

Delete

</button>



</div>


</div>


</div>

`;
  });

  document.getElementById("productArea").innerHTML = html;
}

function searchProducts() {
  let value = document.getElementById("searchBox").value.toLowerCase();

  let result = products.filter((product) =>
    product.title.toLowerCase().includes(value),
  );

  displayProducts(result);
}

function saveProduct() {
  let id = document.getElementById("productId").value;

  let title = document.getElementById("title").value;

  let price = document.getElementById("price").value;

  let image = document.getElementById("image").value;

  if (id) {
    let product = products.find((p) => p.id == id);

    product.title = title;

    product.price = Number(price);

    product.image = image;
  } else {
    let newId = 1;

    if (products.length > 0) {
      newId = Math.max(...products.map((p) => p.id)) + 1;
    }

    products.push({
      id: newId,

      title: title,

      price: Number(price),

      image: image,
    });
  }

  saveProducts();

  displayProducts(products);

  document.getElementById("productId").value = "";

  document.getElementById("title").value = "";

  document.getElementById("price").value = "";

  document.getElementById("image").value = "";
}

function editProduct(id) {
  let product = products.find((p) => p.id == id);

  document.getElementById("productId").value = product.id;

  document.getElementById("title").value = product.title;

  document.getElementById("price").value = product.price;

  document.getElementById("image").value = product.image;

  let modal = new bootstrap.Modal(document.getElementById("productModal"));

  modal.show();
}

function deleteProduct(id) {
  products = products.filter((p) => p.id != id);

  cart = cart.filter((p) => p.id != id);

  saveProducts();

  saveCart();

  displayProducts(products);
}

function addToCart(id) {
  let product = products.find((p) => p.id == id);

  let item = cart.find((p) => p.id == id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      id: product.id,

      image: product.image,

      title: product.title,

      price: product.price,

      quantity: 1,
    });
  }

  saveCart();
}

function displayCart() {
  let html = "";

  let total = 0;

  let count = 0;

  cart.forEach((item) => {
    let itemTotal = item.price * item.quantity;

    total += itemTotal;

    count += item.quantity;

    html += `

<tr>


<td>

${item.id}

</td>



<td>

<img src="${item.image}">

</td>



<td>

${item.title}

</td>



<td>

₹ ${item.price}

</td>




<td>


<button class="btn btn-danger btn-sm qty-btn"

onclick="changeQty(${item.id},-1)">

-

</button>



${item.quantity}



<button class="btn btn-success btn-sm qty-btn"

onclick="changeQty(${item.id},1)">

+

</button>



</td>




<td>

₹ ${itemTotal}

</td>




<td>


<button class="btn btn-danger btn-sm"

onclick="removeItem(${item.id})">

Remove

</button>


</td>



</tr>

`;
  });

  if (cart.length == 0) {
    html = `

<tr>

<td colspan="7">

Cart Empty

</td>

</tr>

`;
  }

  document.getElementById("cartArea").innerHTML = html;

  document.getElementById("cartCount").innerHTML = count;

  document.getElementById("grandTotal").innerHTML = total;
}

function changeQty(id, value) {
  let item = cart.find((p) => p.id == id);

  item.quantity += value;

  if (item.quantity <= 0) {
    cart = cart.filter((p) => p.id != id);
  }

  saveCart();
}

function removeItem(id) {
  cart = cart.filter((p) => p.id != id);

  saveCart();
}
