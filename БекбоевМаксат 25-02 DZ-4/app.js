fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById("products-container");

    data.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      const image = document.createElement("img");
      image.src = product.image;
      productCard.appendChild(image);

      const price = document.createElement("div");
      price.textContent = "Цена: " + product.price;
      productCard.appendChild(price);

      const description = document.createElement("div");
      description.textContent = product.description;
      productCard.appendChild(description);

      productsContainer.appendChild(productCard);
    });
  })
  .catch(error => console.log(error));