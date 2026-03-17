const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE_PATH = "./product.json";


const readData = () => {
  const data = fs.readFileSync(FILE_PATH);
  return JSON.parse(data);
};


const writeData = (data) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};


app.get("/", (req, res) => {
  const products = readData();
  res.json(products);
});


app.get("/:id", (req, res) => {
  const products = readData();
  const id = parseInt(req.params.id);

  const product = products.find(p => p.prodid === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.json(product);
});


app.post("/add", (req, res) => {
  const products = readData();

  const newProduct = {
    prodid: parseInt(req.query.prodid),
    ProductName: req.query.ProductName,
    price: parseInt(req.query.price)
  };

  products.push(newProduct);
  writeData(products);

  res.send("Product added using params");
});


app.post("/insert", (req, res) => {
  const products = readData();

  const newProduct = req.body;

  products.push(newProduct);
  writeData(products);

  res.send("Product added using body");
});


app.delete("/:id", (req, res) => {
  let products = readData();
  const id = parseInt(req.params.id);

  const newProducts = products.filter(p => p.prodid !== id);

  if (products.length === newProducts.length) {
    return res.status(404).send("Product not found");
  }

  writeData(newProducts);

  res.send("Product deleted");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});