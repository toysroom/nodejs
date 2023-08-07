const express = require("express");

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

// parse requests of content-type - application/json
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to node + mysql application." });
});

app.use('/customers', require('./app/routes/customer.routes.js'));

// set port, listen for requests
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
