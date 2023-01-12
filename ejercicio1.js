class ProductManager {
  constructor() {
    this.products = [];
    this.id = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Please fill in all required fields");
      return;
    }

    const existingProduct = this.products.find(product => product.code === code);
    if (existingProduct) {
      console.log("A product with this code already exists");
      return;
    }

    const product = {
      id: this.id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(product);
    this.id++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.log("Not found");
      return;
    }
    return product;
  }
}

const productManager = new ProductManager();

//add product
productManager.addProduct("Product 1", "This is a sample product", 9.99, "path/to/thumbnail.jpg", "product1", 10);

//get products
const products = productManager.getProducts();
console.log(products);

//get products by id
const product = productManager.getProductById(1);
console.log(product);



