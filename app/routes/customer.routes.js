const express = require ('express');
const router = express();

const customers = require("../controllers/customer.controller.js");

// Create a new Customer
router.post("/", customers.create);

// Retrieve all Customers
router.get("/", customers.findAll);

// Retrieve a single Customer with customerId
router.get("/:customerId", customers.findOne);

// Update a Customer with customerId
router.put("/:customerId", customers.update);

// Delete a Customer with customerId
router.delete("/:customerId", customers.delete);

// Delete all customers
router.delete("/", customers.deleteAll);

module.exports = router;
