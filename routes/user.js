const express = require("express");
const router = express.Router();

// 🟢 React bilgilendirme sayfası
router.get("/users/React-bilgilendirme", (req, res) => {
  res.render("users/React-bilgilendirme");
});

// 🟢 Node.js bilgilendirme sayfası
router.get("/users/node-js-bilgilendirme", (req, res) => {
  res.render("users/node-js-bilgilendirme");
});

// 🟢 JavaScript bilgilendirme sayfası
router.get("/users/javascript", (req, res) => {
  res.render("users/javascript");
});

// 🟢 Hakkımızda sayfası
router.get("/users/hakkimizda", (req, res) => {
  res.render("users/hakkimizda");
});
// 🟢 Hakkımızda sayfası
router.get("/users/iletisim", (req, res) => {
  res.render("users/iletisim");
});


// 🟢 Ana sayfa
router.get("/users/index", (req, res) => {
  res.render("users/index");
});
// 🟢 Ana sayfa
router.get("/", (req, res) => {
  res.render("users/index");
});
module.exports = router;
