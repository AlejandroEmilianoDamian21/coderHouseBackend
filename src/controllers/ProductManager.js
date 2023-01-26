export class ProductManager {
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
  
  updateProduct(id, title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Please fill in all required fields");
      return;
    }

    const product = this.getProductById(id);
    if (!product) {
      console.log("Product not found");
      return;
    }

    const existingProduct = this.products.find(p => p.code === code && p.id !== id);
    if (existingProduct) {
      console.log("A product with this code already exists");
      return;
    }

    product.title = title;
    product.description = description;
    product.price = price;
    product.thumbnail = thumbnail;
    product.code = code;
    product.stock = stock;
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      console.log("Product not found");
      return;
    }

    this.products.splice(productIndex, 1);
  }

}

const productManager = new ProductManager();


export default ProductManager;



/**** To run it ****/

// const productManager = new ProductManager();

// //add product
// productManager.addProduct("Product 1", "This is a sample product", 9.99, "path/to/thumbnail.jpg", "product1", 10);

// //get products
// const products = productManager.getProducts();
// console.log(products);

// //get products by id
// const product = productManager.getProductById(1);
// console.log(product);

// //update product
// productManager.updateProduct(1, "Product 1 Updated", "This is an updated sample product", 12.99, "path/to/updated-thumbnail.jpg", "product1", 20);

// //get updated products
// const updatedProducts = productManager
