const express = require("express");
const router = express.Router();
const db = require("../data/db");

async function renderWithQuery(res, view, query, dataKey) {
    try {
        const [result] = await db.execute(query);
        res.render(view, { [dataKey]: result });
    } catch (err) {
        console.error(`${view} hatası:`, err.message);
        res.render(view, { [dataKey]: [] });
    }
}

router.get("/web", (req, res) => {
    renderWithQuery(res, "admin/web-geliştirme", "SELECT * FROM akademitabloweb", "webb");
});

router.get("/yapay", (req, res) => {
    renderWithQuery(res, "admin/yapay-zeka", "SELECT * FROM akademitabloyapay", "webb");
});

router.get("/mobil", (req, res) => {
    renderWithQuery(res, "admin/mobil-geliştirme", "SELECT * FROM akademitablomobil", "webb");
});

router.get("/veri", (req, res) => {
    renderWithQuery(res, "admin/veri-bilimi", "SELECT * FROM akademitabloveri", "webb");
});

router.get("/siber", (req, res) => {
    renderWithQuery(res, "admin/siber-güvenlik", "SELECT * FROM akademitablosiber", "webb");
});

router.get("/bulut", (req, res) => {
    renderWithQuery(res, "admin/bulut-bilisim", "SELECT * FROM akademitabloadmin", "categoryler");
});

router.get("/savunma", (req, res) => {
    renderWithQuery(res, "admin/siber-savunma", "SELECT * FROM akademitablosiber", "webb");
});

router.get("/alanlar", (req, res) => {
    renderWithQuery(res, "admin/alanlar", "SELECT * FROM akademitabloadmin", "categoryler");
});

module.exports = router;
