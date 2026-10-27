// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.

const db = require("./orders-db");

async function loadOrders() {
  return await db.findAllOrders();
}

function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "cancelled"
  );
}

function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

async function describeOrder(id) {
  try {
    const order = await db.findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      item: order.item,
      price: order.price,
    }))
  );
}

module.exports = {
  loadOrders,
  myOrders,
  summarize,
  describeOrder,
  toJsonLines,
};
