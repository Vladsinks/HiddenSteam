const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: f }) => f(...args));

const app = express();
app.use(cors());

// Маршрут 1: игры по жанру (SteamSpy)
app.get("/api/games", async (req, res) => {
  const tag = req.query.tag || "Indie";
  try {
    const response = await fetch(
      `https://steamspy.com/api.php?request=tag&tag=${encodeURIComponent(tag)}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Ошибка SteamSpy" });
  }
});

// Маршрут 2: детали игры (Steam Store)
app.get("/api/game/:appid", async (req, res) => {
  const appid = req.params.appid;
  try {
    const response = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appid}&l=russian`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Ошибка Steam Store" });
  }
});

app.listen(3000, () => {
  console.log("✅ Сервер запущен на http://localhost:3000");
});
