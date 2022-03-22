const { Router } = require("express");
const fetch = require("cross-fetch");
const router = Router();

// Mensaje de bienvenido
router.get("/", async (req, res) => {
  res.json({ message: "Bienvenido!!" });
});

// Post para acortar Urls
router.get("/short", async (req, res) => {
  console.log("res", req, res);
  res.json({ message: "Hola" });
  // fetch("https://api-ssl.bitly.com/v4/shorten", {
  //   method: "POST",
  //   headers: {
  //     Authorization: "Bearer {TOKEN}",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     long_url: "https://dev.bitly.com",
  //     domain: "bit.ly",
  //   }),
  // });
});

module.exports = router;
