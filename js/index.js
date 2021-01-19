// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let price = product.querySelector('.price span').innerHTML;
  price = price === "FREE" ? '0.00' : price;
  
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = (price * quantity).toFixed(2);
  let subtotalElement = product.querySelector('.subtotal span');

  if(quantity > 0) {
    subtotalElement.innerHTML = subtotal;
  }

  return Number(subtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = [... document.getElementsByClassName('product')];
  let totalValueEl = document.querySelector('#total-value span');
  let total = 0;
  products.forEach(product => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  totalValueEl.innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productNameEl = document.querySelector(".create-product input[type='text']");
  if(! productNameEl.value) {
    alert("Give a name to the product!");
    return;
  }

  let priceEl = document.querySelector(".create-product input[type='number']");
  let price = parseFloat(priceEl.value).toFixed(2);
  let tbody = document.querySelector('tbody');
  let newTr = document.createElement("tr");

  newTr.classList.add('product');

  newTr.innerHTML = `<td class="name">
    <span>${productNameEl.value}</span>
  </td>
  <td class="price">$<span>${price === '0.00' ? 'FREE' : price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove" onclick="removeProduct(event);">Remove</button>
  </td>`;

  tbody.appendChild(newTr);

  productNameEl.value = '';
  priceEl.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = [... document.querySelectorAll('.btn-remove')];
  removeBtns.forEach(removeBtn => removeBtn.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});