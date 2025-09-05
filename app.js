const express = require('express'); // <-- Required to use Express
const app = express(); // <-- Creates the Express app
const PORT = 8080;

// <-- Serve static files from the "public" folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DBM World</title>
      <style>
        body {
          margin: 0;
          min-height: 100vh;          /* Ensure full height */
          display: flex;
          flex-direction: column;
          justify-content: center;     /* Vertical centering */
          align-items: center;         /* Horizontal centering */
          background-image: url('/bg.jpg'); /* Background image in public folder */
          background-size: cover;      /* Cover the entire viewport */
          background-position: center;
          background-repeat: no-repeat;
          font-family: Arial, sans-serif;
          padding: 20px;               /* Padding for small screens */
          box-sizing: border-box;
        }

        .centered-text {
          font-size: clamp(1.5rem, 4vw, 2.5rem); /* Responsive font size */
          color: #333;
          margin-bottom: 20px;
          text-align: center;
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
  console.log(\`App running on port \${PORT}\`);
});
