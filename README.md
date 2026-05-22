# 🕹️ HiddenSteam

Сайт для поиска скрытых игр в Steam которые никто не видел.
Отвечаешь на 3 вопроса — получаешь подборку именно под себя.

## Как это работает

1. Выбираешь режим игры (один / с друзьями)
2. Указываешь бюджет (бесплатно / до $1 / до $10 / любая цена)
3. Выбираешь жанр
4. Сайт показывает скрытые игры с малым количеством игроков и отзывов

## Технологии

- **Frontend** — HTML, CSS, JavaScript (vanilla)
- **Backend** — Node.js + Express
- **API** — SteamSpy API, Steam Store API
- **Деплой** — Netlify (фронт) + Railway (сервер)

## Запуск

Перейди по ссылке: [HiddenSteam](https://courageous-pie-023f20.netlify.app/)

## Запуск локально

Установи [Node.js](https://nodejs.org), затем в терминале:

```bash
npm install
node server.js
```

После этого открой `index.html` в браузере.
