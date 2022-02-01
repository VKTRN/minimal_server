const express    = require("express") 
const app      = express() 

app.get("/", (req, res) => {
    res.send("Hello!")
});

app.listen(80, () => {console.log("Listening on http://localhost:80")})
