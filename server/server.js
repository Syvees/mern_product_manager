const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

app.use(cors())
app.use(express.json(), express.urlencoded({extended: true})); // MIDDLEWARE

require("./config/mongoose.config"); // ESTABLISH CONNECTION TO DB
const productRoutes = require("./routes/product.routes")
productRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))