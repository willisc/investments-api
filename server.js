app.get("/", (req, res) => {

    res.send(`
        <h1>Investments API</h1>
        <p>API is running.</p>

        <ul>
            <li><a href="/api/health">Health</a></li>
            <li><a href="/api/dashboard">Dashboard</a></li>
        </ul>
    `);

});

const express = require('express');

const app = express();

app.get('/api/health', (req, res) => {

    res.json({
        status: 'OK',
        timestamp: new Date()
    });

});

app.get('/api/dashboard', (req, res) => {

    res.json({
        stocks: [
            {
                symbol: "BHP",
                price: 45.50,
                daily: 1.2
            },
            {
                symbol: "CBA",
                price: 118.20,
                daily: -0.4
            }
        ]
    });

});

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `API listening on ${PORT}`
    );

});
