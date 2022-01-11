const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res) => {
    console.log(req.originalUrl);
    res.send("hook endpoint");
  });
  
  app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
  );
  