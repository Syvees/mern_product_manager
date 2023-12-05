const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/products", ProductController.getAllProducts); // GET ALL
    app.get("/api/products/:id", ProductController.getProduct); // GET ONE
    app.post("/api/products", ProductController.createProduct); // CREATE
    app.patch("/api/products/:id", ProductController.updateProduct); // UPDATE
    app.delete("/api/products/:id", ProductController.deleteProduct); // DELETE
}   