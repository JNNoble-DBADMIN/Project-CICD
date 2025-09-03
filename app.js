const express = require('express');
const app = express();  // <-- This line is critical
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
        }
        input {
          padding: 10px;
          font-size: 1rem;
          margin-right: 10px;
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
      <input type="text" id="userInput" placeholder="Enter your message" />
      <button onclick="updateMessage()">Update</button>

      <script>
        function updateMessage() {
          const userInput = document.getElementById("userInput").value;
          const message = document.getElementById("message");
          message.textContent = userInput || "Hello to the DBM World";
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
