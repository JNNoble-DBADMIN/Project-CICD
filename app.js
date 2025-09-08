const express = require('express'); 
const app = express(); 
const PORT = 8080;

// Serve static files from the "public" folder
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
          height: 100vh;               /* Always full viewport height */
          width: 100vw;                /* Always full viewport width */
          display: flex;
          flex-direction: column;
          justify-content: center;     /* Center vertically */
          align-items: center;         /* Center horizontally */
          background-image: url('/bg.jpg'); /* Background in public folder */
          background-size: cover;      /* Fill the screen, crop if needed */
          background-position: center; /* Centered */
          background-repeat: no-repeat;/* No tiling */
          font-family: Arial, sans-serif;
          padding: 0;                  /* Remove padding */
          box-sizing: border-box;
        }

        .centered-text {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
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
  console.log("App running on port " + PORT);
});

