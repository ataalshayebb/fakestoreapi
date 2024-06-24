
// function Product(title, price, description, image) {
//     this.title = product1;
//     this.price = 5;
//     this.description = watch;
//     this.image = whatever;
//   }
  
//   async function fetchProducts() {
//     return await fetch('https://fakestoreapi.com/products')
//     .then(response => response.json());
//   }

//   async function createProductObjects() {
//     const productsData = await fetchProducts();
//     const products = productsData.map(products => new Product(title, price, description, image));
//     return products;
//   }
  
//   createProductObjects().then(products => {
//     console.log(products);  
//   });
  


function Product(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
  
 
  async function fetchProducts() {
    return await fetch('https://fakestoreapi.com/products?limit=20')
      // .then(response => response.json());
      .then(res=>res.json())
  }
  
 
  async function createProductObjects() {
    const productsData = await fetchProducts();
    const products = productsData.map(product => new Product(
      product.title, 
      product.price, 
      product.description, 
      product.image
    ));
    return products;
  }
  
  createProductObjects().then(products => {
    console.log(products);  
  });

  function renderProductCards(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; 
    products.map(product => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
      `;
      container.appendChild(card);
    });
  }
  
 
  createProductObjects().then(products => {
    renderProductCards(products);
  });
  

//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
  