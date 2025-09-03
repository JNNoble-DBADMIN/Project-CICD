const express = require('express');  // <-- Required to use Express
const app = express();               // <-- Creates the Express app
const PORT = 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DBM World</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f0f0f0;
          font-family: Arial, sans-serif;
        }
        .centered-text {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 20px;
          transition: color 0.3s;
        }
        button {
          padding: 10px 20px;
          font-size: 1rem;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div id="message" class="centered-text">Hello to the DBM World</div>
      <button onclick="changeColor()">Change Color</button>

      <script>
        function changeColor() {
          const colors = ["#333", "#e74c3c", "#2ecc71", "#3498db", "#f1c40f"];
          const message = document.getElementById("message");
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          message.style.color = randomColor;
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
