const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "public/faq.html"));
});

app.get("/contact-us", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact-us.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
